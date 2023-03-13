import fs from 'fs';
import { levenshteinDistance } from './Utils';

class File {
    constructor(path) {
        this.path = path;
        this.fileName = path.split('/').splice(-1)[0];
    }
}


class Folder {
}


function ls(folder) {
    return Object.keys(folder);
}


function getSubFolders(folder) {
    return Object.values(folder).filter(e => e instanceof Folder);
}


function getFiles(folder) {
    return Object.values(folder).filter(e => e instanceof File);
}


function getAllFiles(folder) {      // result is sorted by file name
    let result = [];
    result.push(...getFiles(folder));
    result.sort((file1, file2) => file1.fileName < file2.fileName ? -1 : 1);
    getSubFolders(folder).forEach(f => result = merge(result, getAllFiles(f)));
    return result;

    function merge(a, b) {
        const result = [];
        let ai = 0, bi = 0;
        for (let i = 0; i < a.length + b.length; i++) {
            if (ai >= a.length) {
                result[i] = b[bi++];
            } else if (bi >= b.length) {
                result[i] = a[ai++];
            } else {
                if (a[ai].fileName < b[bi].fileName) {
                    result[i] = a[ai++];
                } else {
                    result[i] = b[bi++];
                }
            }
        }
        return result;
    }
}


function filterFileName(fileName) {
    return fileName.endsWith('.cs') || fileName.endsWith('.java');
}

function formatFileName(fileName) {
    return fileName.replace(new RegExp(`\.(cs)?(java)?$`), '');
}


// 结果仅保留（去后缀名的）代码文件
function buildFileTree(root, src = '') {
    try {
        const dir = fs.readdirSync(root + src);
        const folder = new Folder();
        dir.forEach(element => {
            const child = buildFileTree(root, src + element + '/');
            if (child !== null)
                folder[element] = child;
        });
        return folder;

    } catch (e) {
        if (e.code === 'ENOTDIR') {                 // 'src' is a file rather than dir
            src = src.substring(0, src.length - 1)  // remove extra '/'
            if (!filterFileName(src))
                return null;
            return new File(formatFileName(src));
        }

        throw e;
    }
}


function searchFileTree(target, fileTree) {         // return 1 result or undefined
    let targetFileName = target instanceof File ? target.fileName : target.toString();
    let result;
    const MAX_TOLERANCE = 0;
    for (let tolerance = 0; result === undefined && tolerance <= MAX_TOLERANCE; tolerance++) {
        result = dfsIter(target, fileTree, tolerance);
    }
    return result;

    function dfsIter(target, node, tolerance = 0) {
        if (node instanceof File) {
            if (levenshteinDistance(node.fileName, targetFileName) <= tolerance) {
                return node;
            } else {
                return undefined;
            }
        }

        const keys = ls(node);
        keys.sort((a, b) => levenshteinDistance(a, target) - levenshteinDistance(b, target));

        for (let i = 0; i < keys.length; i++) {
            const result = dfsIter(target, node[keys[i]], tolerance);
            if (result !== undefined)
                return result;
        }

        return undefined;
    }
}

function searchFiles(files, target, left, right) {      // return all possible result, sort by levenshtein distance of file path
    let targetFileName = target instanceof File ? target.fileName : target.toString();
    if (files.length < 10) {
        const result = files.filter(e => e.fileName == targetFileName);
        if (target instanceof File) {
            result.sort((f1, f2) => levenshteinDistance(f1.path, target.path) - levenshteinDistance(f2.path, target.path));
        }
        return result;
    }
    if (left === undefined) left = 0;
    if (right === undefined) right = files.length;
    let half = Math.floor((left + right) / 2);
    if (files[half].fileName == targetFileName) {
        let left = half, right = half;
        while (left >= 0 && files[left].fileName == targetFileName) left--;
        while (right < files.length && files[right].fileName == targetFileName) right++;
        const result = files.splice(left + 1, right - left - 1);
        if (target instanceof File) {
            result.sort((f1, f2) => levenshteinDistance(f1.path, target.path) - levenshteinDistance(f2.path, target.path));
        }
        return result;
    } else if (files[half].fileName < targetFileName) {
        return searchFiles(files, target, half, right);
    } else {
        return searchFiles(files, target, left, half);
    }
}



export {File, Folder, ls, getFiles, getAllFiles, getSubFolders, buildFileTree, searchFileTree, searchFiles};
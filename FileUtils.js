import fs from 'fs';
import { levenshteinDistance } from './Utils.js';

class File {
    constructor(path) {
        this.path = path;
        this.fileName = path.split('/').splice(-1)[0];
    }

    toString() {
        return this.fileName;
    }
}


class Folder {
}


function ls(folder) {
    if (typeof folder === 'string') folder = getFileTree(folder);
    return Object.keys(folder);
}


function getFolders(folder) {
    if (typeof folder === 'string') folder = getFileTree(folder);
    return Object.values(folder).filter(e => e instanceof Folder);
}


function getFiles(folder) {
    if (typeof folder === 'string') folder = getFileTree(folder);
    return Object.values(folder).filter(e => e instanceof File);
}


function getAllFiles(folder) {                      // result is sorted by file name
    if (typeof folder === 'string') folder = getFileTree(folder);
    let result = [];
    result.push(...getFiles(folder));
    result.sort((file1, file2) => file1.fileName < file2.fileName ? -1 : 1);
    getFolders(folder).forEach(f => result = merge(result, getAllFiles(f)));
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


const fileTreeBuffer = {};
function getFileTree(root, src = '') {              // 结果仅保留（去后缀名的）代码文件
    if (fileTreeBuffer[root] != undefined)
        return fileTreeBuffer[root];
    try {
        const dir = fs.readdirSync(root + src);
        const folder = new Folder();
        dir.forEach(element => {
            const child = getFileTree(root, src + element + '/');
            if (child !== null)
                folder[element] = child;
        });
        fileTreeBuffer[root + src] = folder;
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


function searchInFolderFuzzy(target, folder, MAX_TOLERANCE = 5) {
    if (typeof folder === 'string') folder = getFileTree(folder);
    let targetFileName = target instanceof File ? target.fileName : target.toString();
    let minDist = targetFileName.length;
    let result = [];
    dfsIter(target, folder);
    if (minDist > MAX_TOLERANCE) return [];
    return result;

    function dfsIter(target, node) {
        if (node instanceof File) {
            const dist = levenshteinDistance(node.fileName, targetFileName);
            if (dist == minDist) {
                result.push(node);
            } else if (dist < minDist) {
                minDist = dist;
                result.length = 0;
                result.push(node);
            }
            return;
        }

        const keys = ls(node);
        for (let i = 0; i < keys.length; i++) {
            dfsIter(target, node[keys[i]]);
        }
    }
}

function searchInFolder(target, folder) {
    if (typeof folder === 'string') folder = getFileTree(folder);
    const files = getAllFiles(folder);
    return searchInFiles(target, files);
}

function searchInFiles(target, files, left = 0, right = files.length) {      // return all possible result, sort by levenshtein distance of file path
    let targetFileName = target.toString();
    if (right - left < 10) {
        const result = files.filter(e => e.fileName == targetFileName);
        if (target instanceof File) {
            result.sort((f1, f2) => levenshteinDistance(f1.path, target.path) - levenshteinDistance(f2.path, target.path));
        }
        return result;
    }
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
        return searchInFiles(target, files, half + 1, right);
    } else {
        return searchInFiles(target, files, left, half);
    }
}



export { File, Folder, ls, getFiles, getAllFiles, getFolders, getFileTree, searchInFolderFuzzy, searchInFolder, searchInFiles };
import fs from 'fs';
import { levenshteinDistance } from './Utils.js';

class File {
    constructor(path, root='') {
        this.path = path;
        this.root = root
        this.fileName = path.split('/').splice(-1)[0];
        this.formatedFileName = File.formatFileName(this.fileName);
    }

    toString() {
        return this.formatedFileName;
    }
    
    static filterFileName(fileName) {
        return fileName.endsWith('.cs') || fileName.endsWith('.java');
    }

    static formatFileName(fileName) {
        return fileName.replace(new RegExp(`\.(cs)?(java)?$`), '');
    }

    getText() {
        if (this.text) return this.text;
        return this.text = fs.readFileSync(this.root + this.path, 'utf-8');
    }
}


class Folder {
}


const bufferVisited = {};

function visit(root, path = '') {              // 结果仅保留（去后缀名的）代码文件
    if (bufferVisited[root + path] != undefined)
        return bufferVisited[root + path];
    try {
        const dir = fs.readdirSync(root + path);
        const folder = new Folder();
        dir.forEach(element => {
            const child = visit(root, path + element + '/');
            if (child !== null)
                folder[element] = child;
        });
        return bufferVisited[root + path] = folder;
    } catch (e) {
        if (e.code === 'ENOTDIR') {                 // 'src' is a file rather than dir
            path = path.substring(0, path.length - 1)  // remove extra '/'
            if (!File.filterFileName(path))
                return null;
            return bufferVisited[root + path] = new File(path, root);
        }
        throw e;
    }
}


function getFolders(folder) {
    if (typeof folder === 'string') folder = visit(folder);
    return Object.values(folder).filter(e => e instanceof Folder);
}


function getFiles(folder) {
    if (typeof folder === 'string') folder = visit(folder);
    return Object.values(folder).filter(e => e instanceof File);
}


function getAllFiles(folder) {                      // result is sorted by file name
    if (typeof folder === 'string') folder = visit(folder);
    let result = getFiles(folder)
        .sort((file1, file2) => file1.toString() < file2.toString() ? -1 : 1);
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
                if (a[ai].toString() < b[bi].toString()) {
                    result[i] = a[ai++];
                } else {
                    result[i] = b[bi++];
                }
            }
        }
        return result;
    }
}


function searchInFolderFuzzy(target, folder, MAX_TOLERANCE = 5) {
    if (typeof folder === 'string') folder = visit(folder);
    let targetFileName = target.toString();         // target can be a File or just string
    let minDist = targetFileName.length;
    let result = [];
    dfsIter(folder);
    if (minDist > MAX_TOLERANCE) return [];
    return result;

    function dfsIter(folder) {
        for (let file of getFiles(folder)) {
            handleFile(file);
        }
        for (let subfolder of getFolders(folder)) {
            dfsIter(subfolder);
        }
    }

    function handleFile(file) {
        const dist = levenshteinDistance(file.toString(), targetFileName);
        if (dist == minDist) {
            result.push(file);
        } else if (dist < minDist) {
            minDist = dist;
            result.length = 0;
            result.push(file);
        }
    }
}


function searchInFolder(target, folder) {
    if (typeof folder === 'string') folder = visit(folder);
    const files = getAllFiles(folder);
    return searchInFiles(target, files);
}


function searchInFiles(target, files, left = 0, right = files.length) {      // return all possible result, sort by levenshtein distance of file path
    let targetFileName = target.toString();         // target can be a File or just string
    if (right - left < 10) {
        const result = files.filter(e => e.toString() == targetFileName);
        if (target instanceof File) {
            result.sort((f1, f2) => levenshteinDistance(f1.path, target.path) - levenshteinDistance(f2.path, target.path));
        }
        return result;
    }
    let half = Math.floor((left + right) / 2);
    if (files[half].toString() == targetFileName) {
        let left = half, right = half;
        while (left >= 0 && files[left].toString() == targetFileName) left--;
        while (right < files.length && files[right].toString() == targetFileName) right++;
        const result = files.splice(left + 1, right - left - 1);
        if (target instanceof File) {
            result.sort((f1, f2) => levenshteinDistance(f1.path, target.path) - levenshteinDistance(f2.path, target.path));
        }
        return result;
    } else if (files[half].toString() < targetFileName) {
        return searchInFiles(target, files, half + 1, right);
    } else {
        return searchInFiles(target, files, left, half);
    }
}


export { File, Folder, getFiles, getFolders, visit as visit, getAllFiles, searchInFolderFuzzy, searchInFolder, searchInFiles };
import { File, getAllFiles, searchInFolderFuzzy, searchInFolder } from './FileUtils.js';
import fs from 'fs';

File.getTextByDefault = false;

File.filterFileName = function (fileName) {
    return fileName.endsWith('.cs') || fileName.endsWith('.java');
}

File.formatFileName = function (fileName) {
    return fileName.replace(new RegExp(`\.(cs)?(java)?$`), '');
}

const src1 = `D:/code/java-csharp-ast/src/lucene-main/`, src2 = `D:/code/java-csharp-ast/src/lucenenet-master/`;


// 全部文件
let files1 = getAllFiles(src1);
console.log(files1.length);

// 名称重复<5
function distinct(files1) {
    let count = {};
    files1.forEach(e => {
        count[e.toString()] = (count[e.toString()] ?? 0) + 1;
    });
    files1 = files1.filter(e => count[e.toString()] < 5);
    return files1;
}

files1 = distinct(files1)
console.log(files1.length);


// 有对应版本
let files2 = [];
const FILTER_MATCHED = false;
if (FILTER_MATCHED) {
    files1 = files1.filter(e => {
        const r = searchInFolder(e, src2);
        if (r.length === 0) return false;
        // e.getText()
        // r[0].getText()
        files2.push(r[0]);
        return true;
    });
} else {
    files2 = getAllFiles(src2);
    files2 = distinct(files2);
}



console.log(files1.length + '\n');
console.log(files2.length);


fs.writeFileSync('javaFiles.txt', JSON.stringify(files1));
fs.writeFileSync('csharpFiles.txt', JSON.stringify(files2));

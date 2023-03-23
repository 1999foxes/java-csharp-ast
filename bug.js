import { File, getAllFiles, searchInFolderFuzzy, searchInFolder } from './FileUtils.js';
import fs from 'fs';

File.getTextByDefault = false;

File.filterFileName = function (fileName) {
    return fileName.endsWith('.java');
}

File.formatFileName = function (fileName) {
    return fileName.split('_').pop().replace(/\.java$/, '');

    // return fileName.replaceAll('_', '/');   // path
}

const src = 'D:/code/java-csharp-ast/src/bugs/';
let files = getAllFiles(src);
files.forEach(f => {
    f.tags = [];
    f.tags.push(...f.path.split('/'));
    f.tags.push(f.fileName.replaceAll('_', '/'))
})

const filtered = [];

for (let i = 0; i < files.length; i++) {
    if (files[i].tags[1] === 'from') {
        const other = files.find(f => f.tags[0] === files[i].tags[0] && f.tags[1] === 'to' && f.tags[2] === files[i].tags[2]);
        if (other == null) {
            console.log(i + ', cannot find file ' + files[i].path.replace('/from/', '/to/'));
        } else {
            filtered.push(files[i], other);
        }
    }
}

files = filtered;


console.log(files[0], files[1], files[2], files[3])
console.log(files.length)

fs.writeFileSync('bugs.txt', JSON.stringify(files));

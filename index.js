import { File, getAllFiles, searchInFolderFuzzy, searchInFolder } from './FileUtils.js';


File.filterFileName = function (fileName) {
    return fileName.endsWith('.cs') || fileName.endsWith('.java');
}

File.formatFileName = function (fileName) {
    return fileName.replace(new RegExp(`\.(cs)?(java)?$`), '');
}

// const src1 = 'src/lucene-main/', src2 = 'src/lucenenet-master/';
const src2 = 'src/lucene-main/', src1 = 'src/lucenenet-master/';
let count = {};
getAllFiles(src1).forEach(e => {
    if (count[e.toString()] == undefined) {
        count[e.toString()] = 0;
    } else {
        count[e.toString()]++;
    }
});

let files = getAllFiles(src1).filter(e => count[e.toString()] < 5);
console.log(files.length);      // 4952     3731
let oddFiles = files.filter(e => searchInFolder(e, src2).length == 0);
console.log(oddFiles);
console.log(oddFiles.length);   // 2436     1242




// console.log(searchInFolderFuzzy('analyzer', src1, )[0]);
// console.log(searchInFolder('Analyzer', src1));
// console.log(searchInFolderFuzzy('analyzer', src1, )[0].getText().length);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);
// searchInFolder('adfasdfasdf', src1);

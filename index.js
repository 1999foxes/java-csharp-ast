import { File, getAllFiles, searchInFolderFuzzy, searchInFolder } from './FileUtils.js';


File.filterFileName = function(fileName) {
    return fileName.endsWith('.cs') || fileName.endsWith('.java');
}

File.formatFileName = function(fileName) {
    return fileName.replace(new RegExp(`\.(cs)?(java)?$`), '');
}

const src1 = 'src/lucene-main/', src2 = 'src/lucenenet-master/';
console.log(searchInFolderFuzzy('analyzer', src1, )[0]);
console.log(searchInFolder('Analyzer', src1));
console.log(searchInFolderFuzzy('analyzer', src1, )[0].getText().length);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);
searchInFolder('adfasdfasdf', src1);

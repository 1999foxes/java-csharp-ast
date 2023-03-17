import { File, ls, getAllFiles, getFileTree, searchInFolderFuzzy, searchInFiles, searchInFolder } from './FileUtils.js';
import { levenshteinDistance } from './Utils.js';




const src1 = 'src/lucene-main/', src2 = 'src/lucenenet-master/';
console.log(searchInFolderFuzzy('module-info', src1, ).length);
console.log(searchInFolderFuzzy('module-in', src1, ).length);
console.log(searchInFolder('module-info', src1, ).length);
console.log(searchInFolder('module-in', src1, ).length);


// const testData = [
//     'lucene/core/src/java/org/apache/lucene/analysis/standard/package-info.java',
//     'lucene/core/src/java/org/apache/lucene/analysis/standard/StandardAnalyzer.java',
//     'lucene/core/src/java/org/apache/lucene/analysis/standard/StandardTokenizer.java',
//     'lucene/core/src/java/org/apache/lucene/analysis/standard/StandardTokenizerFactory.java',
//     'lucene/core/src/java/org/apache/lucene/analysis/standard/StandardTokenizerImpl.java',
// ];

// function dfsIter(node) {
//     if (testData.length > 50) return;
//     if (node instanceof File) {
//         testData.push(node.path);
//     } else {
//         Object.values(node).forEach(child => dfsIter(child));
//     }
// }
// dfsIter(fileTree1);

// testData.forEach(
//     path => {
//         console.log(
//             path,
//             '\t\t\t\|\t',
//             searchFileTree(path, fileTree2)?.path
//         )
//     }
// );
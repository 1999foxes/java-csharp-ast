import { File, getAllFiles, searchInFolderFuzzy, searchInFolder } from './FileUtils.js';
import { levenshteinDistance } from './Utils.js';




const src1 = 'src/lucene-main/', src2 = 'src/lucenenet-master/';
console.log(searchInFolderFuzzy('analyzer', src1, )[0]);
console.log(searchInFolderFuzzy('analyzer', src1, )[0].getText().length);

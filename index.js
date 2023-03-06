const fs = require('fs');


class File {
    constructor(path) {
        this.isFile = true;
        this.path = path;
        this.fileName = path.split('/').splice(-1)[0];
    }
}

class Folder {
}

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
        if (e.code === 'ENOTDIR') {       // 'src' is a file not a dir
            if (!src.includes('.cs') && !src.includes('.java'))
                return null;
            return new File(src.substring(0, src.length - 1));
        }

        throw e;
    }
}


function fuzzySearch(target, fileTree) {
    const targetFileName = target.split('/').splice(-1)[0];
    let result;
    for (let tolerance = 0; result === undefined && tolerance <= Math.max(5, targetFileName.length * 0.5); tolerance++) {
        result = dfsIter(target, fileTree, tolerance);
    }
    return result;

    function dfsIter(target, node, tolerance = 0) {
        if (node.isFile) {
            if (levenshteinDistance(node.fileName, targetFileName) <= tolerance) {
                return node;
            } else {
                return undefined;
            }
        }

        const keys = Object.keys(node);
        keys.sort((a, b) => levenshteinDistance(a, target) - levenshteinDistance(b, target));

        for (let i = 0; i < keys.length; i++) {
            const result = dfsIter(target, node[keys[i]], tolerance);
            if (result !== undefined)
                return result;
        }

        return undefined;
    }

    function levenshteinDistance(s1, s2) {
        s1 = s1.replace('.java', '').replace('.cs', '');
        s2 = s2.replace('.java', '').replace('.cs', '');
        dis = [];
        for (let i = 0; i <= s1.length; i++)
            dis[i] = [];

        for (let i = 0; i <= s1.length; i++)
            dis[i][0] = i;
        for (let j = 0; j <= s2.length; j++)
            dis[0][j] = j;
        for (let j = 1; j <= s2.length; j++) {
            for (let i = 1; i <= s1.length; i++) {
                dis[i][j] = Math.min(
                    dis[i - 1][j] + 1,
                    dis[i][j - 1] + 1,
                    dis[i - 1][j - 1] + (s1.charAt(i - 1) !== s2.charAt(j - 1)),
                );
            }
        }
        return dis[s1.length][s2.length];
    }
}


const src1 = 'src/lucene-main/', src2 = 'src/lucenenet-master/';
const fileTree1 = buildFileTree(src1), fileTree2 = buildFileTree(src2);



const testData = [
    'lucene/core/src/java/org/apache/lucene/analysis/standard/package-info.java',
    'lucene/core/src/java/org/apache/lucene/analysis/standard/StandardAnalyzer.java',
    'lucene/core/src/java/org/apache/lucene/analysis/standard/StandardTokenizer.java',
    'lucene/core/src/java/org/apache/lucene/analysis/standard/StandardTokenizerFactory.java',
    'lucene/core/src/java/org/apache/lucene/analysis/standard/StandardTokenizerImpl.java',
];

function dfsIter(node) {
    if (testData.length > 50) return;
    if (node.isFile) {
        testData.push(node.path);
    } else {
        Object.values(node).forEach(child => dfsIter(child));
    }
}
dfsIter(fileTree1);

testData.forEach(
    path => {
        console.log(
            path,
            '\t\t\t\|\t',
            fuzzySearch(path, fileTree2)?.path
        )
    }
);
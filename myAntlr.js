import antlr4 from 'antlr4';
import JavaLexer from './java/JavaLexer.js';
import JavaParser from './java/JavaParser.js'
import JavaParserListener from './java/JavaParserListener.js'
import CSharpLexer from './csharp/CSharpLexer.js';
import CSharpParser from './csharp/CSharpParser.js';
import CSharpParserListener from './csharp/CSharpParserListener.js'
import { File, getAllFiles, searchInFolderFuzzy, searchInFolder } from './FileUtils.js';


File.filterFileName = function (fileName) {
    return fileName.endsWith('.cs') || fileName.endsWith('.java');
}
File.formatFileName = function (fileName) {
    return fileName.replace(new RegExp(`\.(cs)?(java)?$`), '');
}

// const src = 'src/lucene-main/';
// console.log(searchInFolder("JapaneseTokenizer", src)[0]);
// const text = searchInFolder("JapaneseTokenizer", src)[0].getText();


// class MyGrammarListener extends JavaParserListener {
//     methodNames = [];

//     enterMethodDeclaration(ctx) {
//         this.methodNames.push(ctx.identifier().getText());
//     }
// }

// const chars = new antlr4.InputStream(text);
// const lexer = new JavaLexer(chars);
// const tokens = new antlr4.CommonTokenStream(lexer);
// const parser = new JavaParser(tokens);
// parser.buildParseTrees = true;
// const tree = parser.compilationUnit();

// const listener = new MyGrammarListener();
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
// console.log(listener.methodNames);


const src2 = 'src/lucenenet-master';
console.log(searchInFolder("JapaneseTokenizer", src2)[0]);
const text2 = searchInFolder("JapaneseTokenizer", src2)[0].getText();


// class MyGrammarListener extends JavaParserListener {
//     methodNames = [];

//     enterMethodDeclaration(ctx) {
//         this.methodNames.push(ctx.identifier().getText());
//     }
// }

// const chars = new antlr4.InputStream(text);
// const lexer = new JavaLexer(chars);
// const tokens = new antlr4.CommonTokenStream(lexer);
// const parser = new JavaParser(tokens);
// parser.buildParseTrees = true;
// const tree = parser.compilationUnit();

// const listener = new MyGrammarListener();
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
// console.log(listener.methodNames);

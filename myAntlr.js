import antlr4 from 'antlr4';
// import MyGrammarLexer from './MyGrammarLexer.js';
// import MyGrammarParser from './MyGrammarParser.js';
// import MyGrammarListener from './MyGrammarListener.js';
import JavaLexer from './java/JavaLexer.js';
import JavaParser from './java/JavaParser.js'
import JavaParserListener from './java/JavaParserListener.js'

const input = 
`
class HelloChina{
	public static void main(String[] args){
		System.out.println("Hello World!");
	}
}
`;


class MyGrammarListener extends JavaParserListener {
    enterMethodDeclaration(ctx) {
        console.log(ctx.getText());
    }
}



const chars = new antlr4.InputStream(input);
const lexer = new JavaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new JavaParser(tokens);
parser.buildParseTrees = true;
const tree = parser.compilationUnit();

antlr4.tree.ParseTreeWalker.DEFAULT.walk(new MyGrammarListener(), tree);

// class Visitor {
//     visitChildren(ctx) {
//       if (!ctx) {
//         return;
//       }
  
//       if (ctx.children) {
//         return ctx.children.map(child => {
//           if (child.children && child.children.length != 0) {
//             return child.accept(this);
//           } else {
//             return child.getText();
//           }
//         });
//       }
//     }
//   }
  
//   tree.accept(new Visitor());
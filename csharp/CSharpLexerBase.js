import antlr4 from 'antlr4';

export default class CSharpLexerBase extends antlr.Lexer {
    constructor(input) {
        super(input);
    }

    interpolatedStringLevel = 0;
    interpolatedVerbatiums = [];
    curlyLevels = [];
    verbatium = false;

    OnInterpolatedRegularStringStart()
    {
        this.interpolatedStringLevel++;
        this.interpolatedVerbatiums.push(false);
        this.verbatium = false;
    }

    OnInterpolatedVerbatiumStringStart()
    {
        this.interpolatedStringLevel++;
        this.interpolatedVerbatiums.push(true);
        this.verbatium = true;
    }

    OnOpenBrace()
    {
        if (this.interpolatedStringLevel > 0)
        {
            this.curlyLevels.push(this.curlyLevels.pop() + 1);
        }
    }

    OnCloseBrace()
    {

        if (this.interpolatedStringLevel > 0)
        {
            this.curlyLevels.push(this.curlyLevels.pop() - 1);
            if (this.curlyLevels.peek() == 0)
            {
                this.curlyLevels.pop();
                this.skip();
                this.popMode();
            }
        }
    }

    OnColon()
    {

        if (this.interpolatedStringLevel > 0)
        {
            let ind = 1;
            let switchToFormatString = true;
            while (this._input.LA(ind) != '}')
            {
                if (this._input.LA(ind) == ':' || this._input.LA(ind) == ')')
                {
                    switchToFormatString = false;
                    break;
                }
                ind++;
            }
            if (switchToFormatString)
            {
                this.mode(CSharpLexer.INTERPOLATION_FORMAT);
            }
        }
    }

    OpenBraceInside()
    {
        this.curlyLevels.push(1);
    }

    OnDoubleQuoteInside()
    {
        this.interpolatedStringLevel--;
        this.interpolatedVerbatiums.pop();
        this.verbatium = (this.interpolatedVerbatiums.length() > 0 ? this.interpolatedVerbatiums.peek() : false);
    }

    OnCloseBraceInside()
    {
        this.curlyLevels.pop();
    }

    IsRegularCharInside()
    {
        return !this.verbatium;
    }

    IsVerbatiumDoubleQuoteInside()
    {
        return this.verbatium;
    }
}
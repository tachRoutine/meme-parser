import type { Lexer } from "./lexer";
import { TokenType, type Token } from "./tokens";

export class Parser{
    private tokens: Token[] = [];
    private pos: number = 0;

    constructor(private lexer: Lexer){
        this.tokenizeAll()
    }

    private tokenizeAll(): void{
        let token: Token | null;
        do{
            token = this.lexer.nextToken();
            this.tokens.push(token);
        }while (token.type !== TokenType.EOF)
    }

    private nextToken(): Token | null {}

    parseAndExecute(){

    }
}
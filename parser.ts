import type { Lexer } from "./lexer";
import type { Token } from "./tokens";

export class Parser{
    private tokens: Token[] = [];
    private pos: number = 0;

    constructor(lexer: Lexer){
        this.tokenizeAll()
    }

    private tokenizeAll(){}

    private nextToken(): Token | null {}

    parseAndExecute(){
        
    }
}
import type { Lexer } from "./lexer";
import { TokenType, type Token } from "./tokens";

export class Parser {
  private tokens: Token[] = [];
  private pos: number = 0;

  constructor(private lexer: Lexer) {
    this.tokenizeAll();
  }

  private tokenizeAll(): void {
    let token: Token | null;
    do {
      token = this.lexer.nextToken();
      this.tokens.push(token);
    } while (token.type !== TokenType.EOF);
  }

  private nextToken(): Token {
    if (this.pos < this.tokens.length) {
      return this.tokens[this.pos++] ?? { type: TokenType.EOF, value: "" }; //TODO: Will change this to a type error in the future
    }
    return { type: TokenType.EOF, value: "" };
  }

  parseAndExecute() {
    const messageParts: string[] = [];
    let token = this.nextToken();

    while(token.type !== TokenType.Word) {
        messageParts.push(token.value)
        token = this.nextToken();
    }

    if (token.type !== TokenType.String) {
        throw new Error("Expected string token");
    }
  }
}

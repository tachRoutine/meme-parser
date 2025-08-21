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

    const command =  token.value;

    if (this.nextToken().type !== TokenType.EOF) {
      throw new Error('Extra input after command');
    }

    if (command === 'print') {
      console.log(messageParts.join(' '));
    } else {
      throw new Error(`Unknown command: ${command}`);
    }
  }
}

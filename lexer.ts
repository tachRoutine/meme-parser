import { TokenType, type Token } from "./tokens";

export class Lexer {
  private pos: number = 0;
  private current: string | null = null;

  constructor(private input: string) {
    this.current = input[0] || null;
  }

  private advance() {
    this.pos++;
    this.current = this.pos < this.input.length ? this.input[this.pos] ?? null : null;
  }
  
  private skipWhitespace() {
    while (this.current && /\s/.test(this.current)) {
      this.advance();
    }
  }

  nextToken(): Token{
    this.skipWhitespace();

    if(!this.current){
        return {
            type: TokenType.EOF,
            value:''
        }
    }
  }
}

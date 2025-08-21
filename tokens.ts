export enum TokenType{
    Word,
    String,
    EOF
}

export interface Token{
    type: TokenType;
    value: string;
}
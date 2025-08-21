import { Lexer } from "./lexer";
import { Parser } from "./parser";

async function main() {
  let input = Bun.file('main.meme').text();
  console.log("INPUT ",input)

  try {
    const lexer = new Lexer((await input).trim());
    const parser = new Parser(lexer);
    parser.parseAndExecute();
  } catch (err: any) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
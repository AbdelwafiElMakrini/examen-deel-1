/**
 * Created by abdel on 20-1-2019.
 */
export class AskQuestion {

  constructor (public question: string, public answer: string) {}

  toForm(): string {
    return `question=${this.question}&answer=${this.answer}`;
  }
}

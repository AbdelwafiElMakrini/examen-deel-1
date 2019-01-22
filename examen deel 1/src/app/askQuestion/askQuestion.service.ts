import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';



import { AskQuestion } from './askQuestion';
let answer:string = '';

@Injectable()
export class AskQuestionService {

  private productsServiceURI: string = 'http://localhost:4000';
  private answers:string[] = new Array("diksmuide", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.",
    "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy", "try again", "Ask again later.", "Better not tell you now.",
    "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no",
    "Outlook not so good.", "Very doubtful.")

  constructor() {}


  // get a product based on the name
  searchAnswer(name: string, aantal: string, ingre: string,tijd: string): string {


    if (localStorage.getItem(name) != null) {
      // gaat de input negeren
    }
    else {

      localStorage.setItem(name, JSON.stringify({name, aantal, ingre, tijd}));
     answer += "\n" + localStorage.getItem(name) + "\n";
    }
    return answer;
  }
}




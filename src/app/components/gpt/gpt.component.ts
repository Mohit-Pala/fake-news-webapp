import { Component } from '@angular/core';
import { OpenAI } from 'openai';
import { openAiKey, openRouterKey } from '../../../../api_keys';


@Component({
  selector: 'app-gpt',
  imports: [],
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.css'
})
export class GptComponent {


  openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: openRouterKey,
    dangerouslyAllowBrowser: true
  });

  completion = this.openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: "Write a haiku about recursion in programming.",
      },
    ],
    store: true,
  });
}

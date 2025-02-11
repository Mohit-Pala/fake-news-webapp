import { Component } from '@angular/core';
import { OpenAI } from 'openai';
import { openAiKey } from '../../../../api_keys';


@Component({
  selector: 'app-gpt',
  imports: [],
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.css'
})
export class GptComponent {
  openAi = new OpenAI(
    { apiKey: openAiKey, dangerouslyAllowBrowser: true }
  )

  completion = this.openAi.chat.completions.create({
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

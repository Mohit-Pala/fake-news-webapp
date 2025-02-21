import { Component, OnInit } from '@angular/core';
import { OpenAI } from 'openai';
import { openAiKey, openRouterKey } from '../../../../api_keys';


@Component({
  selector: 'app-gpt',
  imports: [],
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.css'
})
export class GptComponent {


  systemIns = `
    You are a fake news awareness bot, you may get a real news article or a fake one
    Only provide 1 related url, remove the <> only provide url
    keep fact and word list to 3 items
    Reply in for gollowing format
    facts: [List of facts, Yes use the square braces, make it a array]
    URL: <RelatedURL> 
    words: {List of words, yes use the square braces, make it array}
  `

  openai = new OpenAI({
    apiKey: openAiKey,
    dangerouslyAllowBrowser: true
  });

  async generateContent(content: string) {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini-2024-07-18',
      messages: [
        {
          role: 'user',
          content: content,
        },
        {
          role: 'system',
          content: this.systemIns,
        },
      ],
    });
    return (completion.choices[0].message.content);
  }



  async testFunction() {
    console.log('button clicked')
    const prompt = "The sun will explode in 2026 after humans put a dyson sphere on the sun"
    const result = await this.generateContent(prompt)
    console.log(result)
  }

}

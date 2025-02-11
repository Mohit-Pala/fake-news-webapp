import { Component, inject } from '@angular/core';
import { getGenerativeModel, VertexAI, ModelParams } from '@angular/fire/vertexai';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-gemini',
  imports: [],
  templateUrl: './gemini.component.html',
  styleUrl: './gemini.component.css'
})
export class GeminiComponent {
  auth = inject(AuthService)
  gemini = inject(VertexAI)
  
  systemIns = `
    You are a fake news awareness bot, you may get a real news article or a fake one
    Only provide 1 related url
    keep list to 3 items
    Reply in the following format
    facts:{LIST OF FACTS, YES USE PARENTHESIS}
    URL:<RelatedURL>
    words:{LIST OF WORDS, YES USE PARENTHESIS}
  `
  modelParams: ModelParams = {
    model: 'gemini-1.5-flash',
    systemInstruction: this.systemIns
  }
  

  model = getGenerativeModel(this.gemini, this.modelParams)



  async testFunction() {
    console.log('button clicked')
    const prompt = "The sun will explode in 2026 after humans put a dyson sphere on the sun"
    const result = await this.model.generateContent(prompt)
    const response = result.response
    const text = response.text()
    console.log(text)
  }

  async testReal() {
    console.log('real clicked')
    const prompt = "Tariffs were announced against China, Canada, and Mexico, continuing a trade war with China and initiating a trade war with Canada and Mexico despite the United States–Mexico–Canada Agreement negotiated by Trump when he was previously president."
    const result = await this.model.generateContent(prompt)
    const response = result.response
    const text = response.text()
    console.log(text)
  }
}

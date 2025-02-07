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
  

  modelParams: ModelParams = {
    model: 'gemini-1.5-flash',
    systemInstruction: 'You are a coin flip simulator, only answer with heads or tails, only valid input is "Flip a coin", everything else answer "Invalid Input"',
  }

  model = getGenerativeModel(this.gemini, this.modelParams)



  async testFunction() {
    console.log('button clicked')
    const prompt = "roll a 20 sided dice"
    const result = await this.model.generateContent(prompt)
    const response = result.response
    const text = response.text()
    console.log(text)
  }
}

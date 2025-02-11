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
    systemInstruction: 'You are a fake news awareness bot. You have to provide the following (1 line for each): Related real articles (with url), Words which may make a news fake, facts. DO NOT SAY IF A NEWS SOURCE IS FAKE OR NOT. Only provide facts so that user can decide for themselves',
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
}

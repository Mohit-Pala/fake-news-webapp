import { Component, inject } from '@angular/core';
import { getGenerativeModel, getVertexAI, VertexAI } from '@angular/fire/vertexai';
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
  model = getGenerativeModel(this.gemini, { model: "gemini-1.5-flash" });
  async testFunction() {
    console.log('button clicked')
    const prompt = "Flip a coin, only answer with heads or tails"
    const result = await this.model.generateContent(prompt)
    const response = result.response;
    const text = response.text();
    console.log(text);
  }
}

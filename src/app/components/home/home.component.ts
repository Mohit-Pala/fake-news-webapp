import { Component } from '@angular/core';
import { GeminiComponent } from "../gemini/gemini.component";
import { GptComponent } from "../gpt/gpt.component";

@Component({
  selector: 'app-home',
  imports: [GeminiComponent, GptComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}

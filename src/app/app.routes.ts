import { Routes } from '@angular/router';
import { GeminiComponent } from './components/gemini/gemini.component';
import { GptComponent } from './components/gpt/gpt.component';

export const routes: Routes = [
    {path: '', component: GptComponent},
];

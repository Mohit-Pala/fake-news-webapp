import { Routes } from '@angular/router';
import { GeminiComponent } from './components/gemini/gemini.component';
import { GptComponent } from './components/gpt/gpt.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'gpt', component: GptComponent},
];

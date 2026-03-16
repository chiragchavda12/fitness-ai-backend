import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {

  title: string = "About Fitness AI";

  description: string = `
  Fitness AI is a smart web application designed to help users
  improve their fitness using AI based tools. It provides
  workout guidance, diet planning and progress tracking.
  `;

}
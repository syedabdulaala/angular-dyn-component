import { Component, OnInit } from '@angular/core';
import { Step } from './app.interface';
import { StepService } from './step.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private stepService: StepService
  ) {}

  steps: Step[];

  ngOnInit() {
    this.initialize();
  }

  async initialize() {
    this.steps = await this.stepService.getSteps();
  }
}

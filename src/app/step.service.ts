import { Injectable, ComponentFactoryResolver, ComponentRef, Injector } from '@angular/core';
import { Step, ElementType } from './app.interface';


@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor() { }

  getSteps(): Promise<Step[]> {
    return new Promise((resolve) => {
      const data: Step[] = [
        {
          id: '001',
          markup: '<p>Hello <span class="001"></span><br>Search for <span class="002"></span> please',
          elements: [
            {
              id: '001',
              type: ElementType.TEXT,
              name: 'Google'
            },
            {
              id: '002',
              type: ElementType.NUMERIC,
              name: 'Facebook'
            }
          ]
        },
        {
          id: '002',
          markup: '<p>Enter your <span class="003"></span> profile here',
          elements: [
            {
              id: '003',
              type: ElementType.TEXT,
              name: 'Linkedinn'
            }
          ]
        }
      ];
      resolve(data);
    });
  }


}

import { Component, OnInit, ViewChild, ElementRef, Input, EmbeddedViewRef, ComponentFactoryResolver, Injector, Output, EventEmitter, ComponentRef } from '@angular/core';
import { StepService } from '../step.service';
import { Step, ElementType } from '../app.interface';
import { TextComponent } from '../elements/text/text.component';
import { NumericComponent } from '../elements/numeric/numeric.component';
import { ElementBaseComponent } from '../elements/element-base.component';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() step: Step;

  @ViewChild('markupContainer', { static: true })
  markupContainer: ElementRef<HTMLDivElement>;

  componentRefs: { [id: string]: ComponentRef<any> } = {};

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }


  ngOnInit() {
    this.appendMarkupToContainer();
    this.createComponents();
  }

  private appendMarkupToContainer() {
    const domParser = new DOMParser();
    const document = domParser.parseFromString(this.step.markup, 'text/html');
    this.markupContainer.nativeElement.append(document.body);
  }

  private createComponents() {
    this.step.elements.forEach(element => {
      // Create component and push to dictionary
      const componentRef = this.componentRefs[this.step.id] = this.getComponentRef(element.type);

      // Attach component html to container
      const componentView = componentRef.hostView as EmbeddedViewRef<any>;
      const domElement = this.markupContainer.nativeElement.getElementsByClassName(element.id).item(0);
      domElement.replaceWith(componentView.rootNodes[0]);

      // Update component instance with data
      const instance = (componentRef.instance as ElementBaseComponent);
      instance.label = element.name;
      instance.click.subscribe((data) => alert(data));
      componentRef.changeDetectorRef.detectChanges();
    });
  }

  private getComponentRef(type: ElementType): ComponentRef<ElementBaseComponent> {
    switch (type) {
      case ElementType.TEXT:
        return this.componentFactoryResolver.resolveComponentFactory(TextComponent)
          .create(this.injector);
      case ElementType.NUMERIC:
        return this.componentFactoryResolver.resolveComponentFactory(NumericComponent)
          .create(this.injector);
    }
  }
}

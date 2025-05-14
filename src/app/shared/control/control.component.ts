import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ContentChild,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    // '(click)': 'onClick()'
  },
})
export class ControlComponent {
  private el = inject(ElementRef);
  // @HostBinding('class') className = 'control';
  @HostListener('click') onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control);

  }
  label = input.required<string>();

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // onClick = () => {
  //   console.log("clicked");
  // }
}



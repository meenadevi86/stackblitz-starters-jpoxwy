import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkMode]'
})
export class DarkModeDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') 
  toggleDarkMode() {
    // Toggle dark mode styling on host element by adding/removing class
    this.el.nativeElement.classList.toggle('dark-mode');
  }

}


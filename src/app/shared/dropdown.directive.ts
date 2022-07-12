import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen: boolean = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('click') mouseClick() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.elRef.nativeElement.childNodes.forEach(child => {
        child.classList.add('show');
      });
    } else {
      this.elRef.nativeElement.childNodes.forEach(child => {
        child.classList.remove('show');
      });
    }
  }
}
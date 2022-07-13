import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Use @HostBinding() if the toggle should be used on the Element with the Directive on it
  // @HostBinding('class.show') isOpen: boolean = false;
  isOpen: boolean = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;

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
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorHighlight]'
})
export class ColorHighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightRow(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightRow(false);
  }

  private highlightRow(isHovered: boolean) {
    if (isHovered) {
      this.renderer.addClass(this.elementRef.nativeElement, 'bg-success');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'bg-success');
    }
  }
}

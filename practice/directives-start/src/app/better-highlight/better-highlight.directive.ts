import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "green"
    );
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "padding",
      "5px 12px"
    );
  }
}

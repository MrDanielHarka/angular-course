import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "green"
    // );
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "padding",
    //   "5px 12px"
    // );
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "green"
    // );
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "padding",
      "5px 12px"
    );
    this.backgroundColor = "green";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "black");
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "padding",
      "5px 12px"
    );

    this.backgroundColor = "transparent";
  }
}

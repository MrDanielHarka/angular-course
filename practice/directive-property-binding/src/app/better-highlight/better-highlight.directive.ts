import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string =
    this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "green"
    // );
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "green"
    // );
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "black");

    this.backgroundColor = this.defaultColor;
  }
}

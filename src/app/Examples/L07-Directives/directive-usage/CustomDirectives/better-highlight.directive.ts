import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
 selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

 @Input() defaultColor = 'red';
 @Input() highlightColor = 'cyan';
 @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

 constructor(private elRef: ElementRef, private renderer: Renderer2) {
 }

 ngOnInit(): void {
  const element = this.elRef.nativeElement;
  this.renderer.setStyle(element, 'background-color', 'blue');
 }

 @HostListener('mouseenter') mouseover = (eventData: Event) => {

  // Get the dom
  const element = this.elRef.nativeElement;

  // Set Style with Renderer2
  this.renderer.setStyle(element, 'background-color', this.highlightColor);

  // Set Style With @HostBinding
  this.backgroundColor = this.highlightColor;
 }

 @HostListener('mouseleave') mouseleave = (eventData: Event) => {
  const element = this.elRef.nativeElement;
  this.renderer.setStyle(element, 'background-color', this.backgroundColor);
  this.backgroundColor = this.defaultColor;
 }
}

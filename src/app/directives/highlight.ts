import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'p[appHighlight]',
})
export class Highlight implements OnInit {
  ngOnInit(): void {
    this.bgc = this.out;
  }
  constructor() {
    console.log('in appHighliht');
  }

  @Input()
  in = 'yellow';
  @Input()
  out = 'red';
  // HostBinding tkhalini je défini l'apparence eli n7anb ngeriha
  // Rani je gére le backgroundColor
  // Wel value du backgrouncColor heya el bgc
  @HostBinding('style.backgroundColor')
  bgc = this.out;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = this.out;
  }
}

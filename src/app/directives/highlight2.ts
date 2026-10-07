import { Directive, HostBinding, HostListener, Input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight2]',
  host: {
    '[style.backgroundColor]': 'this.bgc()',
    '(mouseenter)':'this.onMouseEnter()',
    '(mouseleave)':'this.onMouseLeave()',
  }
})
export class Highlight2 implements OnInit{
  ngOnInit(): void {
    this.bgc.set(this.out);
  }
  constructor() {
    console.log('in appHighliht2');

  }
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';
  // HostBinding tkhalini je défini l'apparence eli n7anb ngeriha
  // Rani je gére le backgroundColor
  // Wel value du backgrouncColor heya el bgc
  // @HostBinding('style.backgroundColor')
  bgc = signal(this.out);
  // @HostListener('mouseenter')
  onMouseEnter()  {
    this.bgc.set(this.in);
  }
  // @HostListener('mouseleave')
  onMouseLeave()  {
    this.bgc.set(this.out);
  }
}

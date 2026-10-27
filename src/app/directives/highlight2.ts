import { computed, Directive, effect, input, Input, linkedSignal, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight2]',
  host: {
    '[style.backgroundColor]': 'this.bgc()',
    '(mouseenter)':'this.onMouseEnter()',
    '(mouseleave)':'this.onMouseLeave()',
  }
})
export class Highlight2 implements OnInit{
  constructor() {
    console.log('in appHighliht2');
  }
  ngOnInit(): void {
   // this.bgc.set(this.out());
  }
  // initBgcEffect = effect(() => {
  //   this.bgc.set(this.out())
  // });
  in = input('yellow');

  out = input('red');
  // HostBinding tkhalini je défini l'apparence eli n7anb ngeriha
  // Rani je gére le backgroundColor
  // Wel value du backgrouncColor heya el bgc
  // @HostBinding('style.backgroundColor')
  bgc = linkedSignal(() => this.out());
  // @HostListener('mouseenter')
  onMouseEnter()  {
    this.bgc.set(this.in());
  }
  // @HostListener('mouseleave')
  onMouseLeave()  {
    this.bgc.set(this.out());
  }
}

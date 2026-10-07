import { Component } from '@angular/core';
import { Fils } from '../fils/fils';
import { Highlight } from '../../directives/highlight';
import { Highlight2 } from '../../directives/highlight2';

@Component({
  imports: [Fils, Highlight, Highlight2],
  selector: 'app-pere',
  styleUrl: './pere.css',
  templateUrl: './pere.html',
})
export class Pere {
handleSonEvent(message: string) {
  confirm(message);
}
}

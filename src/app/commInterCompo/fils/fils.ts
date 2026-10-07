import { Component, EventEmitter, inject, input, output, Output, signal } from '@angular/core';
import { Logger } from '../../services/logger';

@Component({
  imports: [],
  selector: 'app-fils',
  styleUrl: './fils.css',
  templateUrl: './fils.html',
  providers: [Logger]
})
export class Fils {

  message = input.required()
  sendMessageToDad = output<string>();
  loggerService = inject(Logger);
  constructor() {
    this.loggerService.log('In FilsComponent')
  }
  sendMessage() {
    this.sendMessageToDad.emit('nkhali 3andi el ba9i');
    this.loggerService.log('nkhali 3andi el ba9i');
  }
}


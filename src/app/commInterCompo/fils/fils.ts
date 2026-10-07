import { Component, EventEmitter, input, output, Output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-fils',
  styleUrl: './fils.css',
  templateUrl: './fils.html',
})
export class Fils {

  message = input.required()
  sendMessageToDad = output<string>();

  sendMessage() {
    this.sendMessageToDad.emit('nkhali 3andi el ba9i')
  }
}


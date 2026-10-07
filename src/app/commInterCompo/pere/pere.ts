import { Component, inject, signal } from '@angular/core';
import { Fils } from '../fils/fils';
import { Highlight } from '../../directives/highlight';
import { Highlight2 } from '../../directives/highlight2';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { Logger } from '../../services/logger';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports: [Fils, Highlight, Highlight2, FormsModule, UpperCasePipe],
  selector: 'app-pere',
  styleUrl: './pere.css',
  templateUrl: './pere.html',
})
export class Pere {
  testPipe = signal('cc');
  loggerService = inject(Logger);
  toastr = inject(ToastrService);
  constructor() {
    this.loggerService.log('inPereComponent');
    this.toastr.info('cc GL4 :D')
  }
  handleSonEvent(message: string) {
    confirm(message);
  }
}

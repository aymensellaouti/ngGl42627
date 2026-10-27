import { Component, computed, inject, linkedSignal, signal, WritableSignal } from '@angular/core';
import { Fils } from '../fils/fils';
import { Highlight } from '../../directives/highlight';
import { Highlight2 } from '../../directives/highlight2';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { Logger } from '../../services/logger';
import { ToastrService } from 'ngx-toastr';
import { TestHttp } from '../../http/test-http/test-http';

@Component({
  imports: [Fils, Highlight, Highlight2, FormsModule, UpperCasePipe, TestHttp],
  selector: 'app-pere',
  styleUrl: './pere.css',
  templateUrl: './pere.html',
})
export class Pere {
  testPipe = signal('cc');
  loggerService = inject(Logger);
  toastr = inject(ToastrService);

  title = signal('');
  slug = linkedSignal(() => slugify(this.title()));
  slug2 =linkedSignal({
    source: () => ({
      // Les signaux dont dépend le linkedSignal
      title: this.title()
    }),
    computation:(source, previous) => {
      console.log({source, previous});
      return slugify(source.title)
    }
  })

  constructor() {
    this.loggerService.log('inPereComponent');
    this.toastr.info('cc GL4 :D');
  }
  handleSonEvent(message: string) {
    confirm(message);
  }

}
function slugify(value: string) {
  return value.toLowerCase().replaceAll(' ', '-');
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
})
export class TestPipePipe implements PipeTransform {
  transform(valueToPipe: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

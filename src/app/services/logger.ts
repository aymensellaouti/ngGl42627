import { Injectable, Service } from '@angular/core';

// Le service est disponible pour tout le monde
@Injectable({providedIn: 'root'})
export class Logger {
  dataToLog: unknown[] = [];

  log(message: unknown): void {
    this.dataToLog.unshift(message);
    console.log(message);
    console.log('ALL Logged Messages');
    this.showAllLogs();
  }

  showAllLogs() {
    console.log(this.dataToLog);
  }
}

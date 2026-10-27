import { HttpClient, httpResource } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { rxResource } from "@angular/core/rxjs-interop";

@Service()
export class HttpService {
  http = inject(HttpClient);
  getCvsResource() {
    return rxResource({
    stream: () => this.http.get<[]>('https://apilb.tridevs.net/api/personnes'),
  });
  }
  getCvsHttpResource() {
    return httpResource(() => 'https://apilb.tridevs.net/api/personnes');;
  }
}

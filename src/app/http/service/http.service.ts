import { HttpClient, httpResource } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { rxResource } from "@angular/core/rxjs-interop";

@Service()
export class HttpService {
  http = inject(HttpClient);
  cvsResource = rxResource({
    stream: () => this.http.get<[]>('https://apilb.tridevs.net/api/personnes'),
  });
  cvsHttpResource = httpResource(
    () => 'https://apilb.tridevs.net/api/personnes'
  );
}

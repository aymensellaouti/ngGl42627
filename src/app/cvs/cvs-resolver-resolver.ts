import { ResolveFn } from '@angular/router';
import { HttpService } from '../http/service/http.service';
import { inject } from '@angular/core';

export const cvsResolverResolver: ResolveFn<unknown> = (route, state) => {
  const httpService = inject(HttpService)
  return httpService.getCvs();
};

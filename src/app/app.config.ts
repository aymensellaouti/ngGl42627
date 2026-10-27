import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withDebugTracing, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideSignalFormsConfig } from '@angular/forms/signals';
import { NG_STATUS_CLASSES } from '@angular/forms/signals/compat';
import { CustomPreloadingStrategy } from './preloadingStrategy/custom.preloading-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // withDebugTracing(),
      withComponentInputBinding(),
      withPreloading(CustomPreloadingStrategy),
    ),
    provideToastr(),
    provideSignalFormsConfig({
      classes: NG_STATUS_CLASSES,
    }),
  ],
};

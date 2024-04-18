import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { routes } from './app.routes';


// @ts-ignore
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule), ] };



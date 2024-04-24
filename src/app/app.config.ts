import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";



// @ts-ignore
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule), ] };



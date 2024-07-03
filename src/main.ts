import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient, withInterceptors,
} from "@angular/common/http";
import {authInterceptor} from "./app/auth.interceptor";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideRouter(routeConfig),
    provideProtractorTestingSupport()
  ],
}).catch((err) => console.error(err));



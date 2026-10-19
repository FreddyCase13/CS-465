import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from './services/authentication';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthenticationService);

  // Don't attach a token to the login or register calls
  const isAuthAPI = req.url.endsWith('/login') || req.url.endsWith('/register');

  if (authService.isLoggedIn() && !isAuthAPI) {
    const token = authService.getToken();
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
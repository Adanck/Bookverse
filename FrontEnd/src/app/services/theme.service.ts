import { Injectable } from '@angular/core';

export type AppTheme = 'mint' | 'moss' | 'azure';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'bookverse-theme';
  private current: AppTheme = 'mint';

  constructor() {
    const saved = (localStorage.getItem(this.key) as AppTheme) || 'mint';
    this.setTheme(saved);
  }

  setTheme(theme: AppTheme) {
    this.current = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.key, theme);
  }

  getTheme(): AppTheme {
    return this.current;
  }

  cycle() {
    const order: AppTheme[] = ['mint', 'moss', 'azure'];
    const idx = order.indexOf(this.current);
    this.setTheme(order[(idx + 1) % order.length]);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'theme';
  savedTheme = '';

  ngOnInit(): void {
    this.savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', this.savedTheme);
  }
  changeTheme(theme: string) {
    this.savedTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

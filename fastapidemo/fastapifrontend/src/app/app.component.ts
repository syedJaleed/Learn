import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'fastapifrontend';
  products: any[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit(){
    this.getAllProducts();
  }

getAllProducts() {
    this.http
      .get<any[]>('http://localhost:8000/products/')
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log('Fetched products:', this.products);
        },
        error: (err) => console.error('Error fetching data:', err),
      });
  }

}

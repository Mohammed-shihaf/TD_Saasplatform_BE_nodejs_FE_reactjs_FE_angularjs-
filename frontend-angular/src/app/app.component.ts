import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  internalCost?: number;
  margin?: number;
}

// SaaS Platform: Angular only calls the /api/admin/* namespace.
// The React customer app only calls /api/customer/*.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'SaaS Platform — Admin App (Angular)';
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ products: Product[] }>('/api/admin/products').subscribe({
      next: (data) => (this.products = data.products),
      error: () => {},
    });
  }
}

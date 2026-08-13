import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Plan } from './plans';
import { PlanListComponent } from './components/plan-list.component';

interface Product {
  id: number;
  name: string;
  internalCost?: number;
  margin?: number;
}

// SaaS Platform: Angular only calls the /api/admin/* namespace.
// The React customer app only calls /api/customer/*. Both also share
// the non-namespaced /api/plans catalog.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PlanListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'SaaS Platform — Admin App (Angular)';
  products: Product[] = [];
  plans: Plan[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ products: Product[] }>('/api/admin/products').subscribe({
      next: (data) => (this.products = data.products),
      error: () => {},
    });
    this.http.get<{ plans: Plan[] }>('/api/plans').subscribe({
      next: (data) => (this.plans = data.plans),
      error: () => {},
    });
  }
}

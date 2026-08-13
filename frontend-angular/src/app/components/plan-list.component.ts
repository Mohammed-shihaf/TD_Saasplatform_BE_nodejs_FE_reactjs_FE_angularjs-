import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plan, formatDiscount } from '../plans';

@Component({
  selector: 'app-plan-list',
  standalone: true,
  imports: [CommonModule],
  template: `<ul><li *ngFor="let p of plans">{{ p.name }}: {{ discount(p) }}</li></ul>`,
})
export class PlanListComponent {
  @Input() plans: Plan[] = [];

  discount(plan: Plan): string {
    return formatDiscount(plan.discountPercent);
  }
}

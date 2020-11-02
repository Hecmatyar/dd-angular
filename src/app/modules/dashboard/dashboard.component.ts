import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isMenuOpen: boolean;

  constructor(private router: Router) {
    this.isMenuOpen = false;
    router.events.subscribe(() => {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      }
    });
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}

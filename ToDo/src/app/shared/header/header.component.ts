import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthServiceService } from '../../authentication/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(private authService: AuthServiceService, private router: Router, private cd: ChangeDetectorRef){
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

}

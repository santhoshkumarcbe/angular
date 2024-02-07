import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ContributorService } from 'src/app/services/contributor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService, private contributorService: ContributorService, private router: Router) {}

  userId!:number
  token = '';
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });



  onSubmit(): void{
    if (this.loginForm.valid) {
      this.auth.authenticate(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          console.log(result.token);
          console.log(result.userRole);
          console.log(result.userId);
          this.userId = result.userId;
          console.log("userid",this.userId);
          localStorage.setItem('userId', result.userId);
          localStorage.setItem('token', result.token);
          // this.contributorService.getUserId(result.userId);

          this.auth.setToken(result.token)
          if (result.userRole === 'contributor') {
            this.router.navigateByUrl('/contributor');
          }
          else if (result.userRole === 'admin') {
            this.router.navigateByUrl('/admin');
          }
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
    
  }

}

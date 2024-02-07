import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth: AuthService, private router: Router) {}

  registerForm = new FormGroup({
    emailId: new FormControl(''),
    fullName: new FormControl(''),
    mobileNumber : new FormControl(''),
    passwordHash: new FormControl(''),
    userName: new FormControl(''),
    userRole: new FormControl(''),
  });

  onSubmit(): void{
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe(
        (result) => {
          console.log(result.token);
          this.auth.setToken(result.token)
          alert("register successfull");
          this.router.navigateByUrl('/login');
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  UserName="";
  Password="";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSign() {
     this.router.navigateByUrl("register");  

  }

  onClick() {
    console.log(this.UserName, this.Password);
    this.router.navigate(['/b'], { queryParams:{ UserName:this.UserName , Password:this.Password} });
  }
}

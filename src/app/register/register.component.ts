import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  FirstName="";
  LastName="";
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
  }
  onRegister() {
    
      console.log(this.FirstName, this.LastName);
    
    this.router.navigate(['/b'], { queryParams:{ FirstName:this.FirstName , LastName:this.LastName} });
    
}
  }
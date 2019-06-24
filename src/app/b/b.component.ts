import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  UserName: string;
  Password: string;
  FirstName:string;
  LastName:string;

  email="";
  BookingDate="";
  BookedForm="";
  BookedTill="";
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
     console.log(params);
     
      this.UserName = params.UserName , this.Password = params.Password,this.FirstName = params.FirstName,this.LastName =params.LastName;
      console.log(this.UserName , this.Password,this.FirstName);      
});
  }
// onGal() {
//   this.router.navigateByUrl("login")
// }
}

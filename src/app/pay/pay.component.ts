import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  title:string;
  FirstName:string;
  LastName:string;
  Id:string;
  Age:string;
  dateIn:string;
  dateOut:string;
  roomtype:string;
  Adult:string;
  kids:string;
  email:string;
  tel:string;

  amt1=220;
  amt2=250;
  amt3=300;
  amt4=350;
  roomAmt;
 
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
     this.title = params.title,
      this.FirstName = params.FirstName, 
      this.LastName = params.LastName,
      this.Id = params.Id,
     this.Age = params.Age,
     this.dateIn = params.dateIn,
     this.dateOut = params.dateOut,
     this.roomtype = params.roomtype,
     this.Adult = params.Adult,
     this.kids = params.kids,
     this.email = params.email,
     this.tel = params.tel,
     this.roomAmt = params.roomAmt;
      console.log(this.title,this.FirstName , this.LastName,
         this.Id,this.Age,this.dateIn ,this.dateOut,this.roomtype,
         this.Adult,this.kids,this.email,this.tel,this.roomAmt);      
});
}

pay() {
this.router.navigateByUrl("/rrt")
}
}

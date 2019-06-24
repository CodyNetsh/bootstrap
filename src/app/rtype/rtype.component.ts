import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rtype',
  templateUrl: './rtype.component.html',
  styleUrls: ['./rtype.component.scss']
})
export class RtypeComponent implements OnInit {
  title="";
  FirstName="";
  LastName="";
  Id="";
  Age="";
  dateIn="";
  dateOut="";
  roomtype="";
  Adult="";
  kids="";
  email="";
  tel="";
  
  amt1=220;
  amt2=250;
  amt3=300;
  amt4=350;
  roomAmt;
  constructor(private router:Router) { }

  ngOnInit() {
  }
onPay(){
    console.log(this.title, this.FirstName,this.LastName, this.Id,this.Age,this.dateIn, this.dateOut,this.roomtype,
      this.Adult,this.kids,this.email,this.tel,this.roomAmt); 
  

      
        if(this.roomtype == "Single room"){
          this.roomAmt = this.amt1;
        }
       else if(this.roomtype == "Twin bed room"){
          this.roomAmt = this.amt2;
        }
       else if(this.roomtype == "Triple bed room"){
          this.roomAmt = this.amt3;
        }
       else if(this.roomtype == "Kids bed room"){
          this.roomAmt = this.amt4;
       }


  this.router.navigate(['/pay'], { queryParams:{ title:this.title , FirstName:this.FirstName,LastName:this.LastName,
    Id:this.Id,Age:this.Age,dateIn:this.dateIn ,dateOut:this.dateOut,roomtype:this.roomtype,
    Adult:this.Adult,kids:this.kids,email:this.email,tel:this.tel ,roomAmt:this.roomAmt 
  }});
  
}
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-bmi',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./bmi.html',
styleUrls:['./bmi.css']
})

export class BmiComponent{

/* ================= USER INPUT ================= */

height:number=0;
weight:number=0;


/* ================= RESULT ================= */

bmi:number=0;
category:string="";


/* ================= BMI CALCULATE ================= */

calculateBMI(){

if(this.height<=0 || this.weight<=0){

alert("Please enter valid height and weight");
return;

}

let heightMeter = this.height / 100;

this.bmi = this.weight / (heightMeter * heightMeter);

this.bmi = parseFloat(this.bmi.toFixed(2));


/* ================= CATEGORY ================= */

if(this.bmi < 18.5){

this.category = "Underweight";

}

else if(this.bmi >=18.5 && this.bmi <25){

this.category = "Normal Weight";

}

else if(this.bmi >=25 && this.bmi <30){

this.category = "Overweight";

}

else{

this.category = "Obese";

}

}

}
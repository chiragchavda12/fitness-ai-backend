import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
selector:'app-dashboard',
standalone:true,
imports:[CommonModule,RouterModule],
templateUrl:'./dashboard.html',
styleUrls:['./dashboard.css']
})

export class DashboardComponent implements OnInit{

constructor(
private http:HttpClient,
private sanitizer:DomSanitizer
){}

api="https://fitness-ai-backend-4ash.onrender.com/api"

/* ================= USER ================= */

user:any={}

/* ================= STATS ================= */

weight:number=0
bmi:number=0
workoutsDone:number=0
dietPlans:number=0

/* ================= WORKOUT HISTORY ================= */

recentWorkouts:any[]=[]

/* ================= INIT ================= */

ngOnInit(){

const userId = localStorage.getItem("userId")

if(!userId){
console.log("User not logged in")
return
}


/* ================= GET USER ================= */

this.http.get(this.api + "/auth/user/" + userId)
.subscribe({

next:(res:any)=>{

this.user=res

this.weight = res.weight || 0

/* BMI CALCULATION */

if(res.height && res.weight){

this.bmi = res.weight / ((res.height/100)*(res.height/100))
this.bmi = Number(this.bmi.toFixed(1))

}

},

error:(err)=>{
console.log("User fetch error",err)
}

})


/* ================= GET WORKOUTS ================= */

this.http.get(this.api + "/workout/user/" + userId)
.subscribe({

next:(res:any)=>{

this.recentWorkouts=res

this.workoutsDone=res.length

},

error:(err)=>{
console.log("Workout fetch error",err)
}

})

}


/* ================= SAFE VIDEO ================= */

getSafeUrl(url:string):SafeResourceUrl{
return this.sanitizer.bypassSecurityTrustResourceUrl(url)
}

}
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
selector:'app-workout-history',
standalone:true,
imports:[CommonModule],
templateUrl:'./workout-history.html',
styleUrls:['./workout-history.css']
})

export class WorkoutHistoryComponent implements OnInit{

workouts:any[]=[]

api="https://fitness-ai-backend-4ash.onrender.com/api"

constructor(
private http:HttpClient,
private sanitizer:DomSanitizer
){}

ngOnInit(){

const userId = localStorage.getItem("userId")

if(!userId){
return
}

this.http.get<any[]>(this.api + "/workout/user/" + userId)
.subscribe({

next:(data:any)=>{

this.workouts=data

},

error:(err)=>{

console.log("Workout fetch error",err)

}

})

}

/* ================= SAFE VIDEO ================= */

getSafeUrl(url:string):SafeResourceUrl{
return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

/* ================= DELETE ================= */

deleteWorkout(id:string){

this.http.delete(this.api + "/workout/" + id)
.subscribe(()=>{

this.workouts=this.workouts.filter(w=>w._id!==id)

})

}

}
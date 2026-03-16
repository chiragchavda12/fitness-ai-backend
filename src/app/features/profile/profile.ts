import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

@Component({
selector:'app-profile',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./profile.html',
styleUrls:['./profile.css']
})

export class ProfileComponent implements OnInit{

constructor(private http:HttpClient){}

/* ================= API ================= */

api="https://fitness-ai-backend-4ash.onrender.com/api"

/* ================= USER ================= */

user:any={}

/* ================= FORM DATA ================= */

name:string=""
email:string=""
age:number=0
height:number=0
weight:number=0
goal:string=""

/* ================= INIT ================= */

ngOnInit(){

this.loadProfile()

}

/* ================= LOAD PROFILE ================= */

loadProfile(){

const userId = localStorage.getItem("userId")

if(!userId){

console.log("User not logged in")
return

}

this.http.get(this.api + "/auth/user/" + userId)
.subscribe({

next:(res:any)=>{

this.user=res

this.name=res.name || ""
this.email=res.email || ""
this.age=res.age || 0
this.height=res.height || 0
this.weight=res.weight || 0
this.goal=res.goal || ""

},

error:(err)=>{

console.log("Profile load error",err)

}

})

}

/* ================= UPDATE PROFILE ================= */

updateProfile(){

const userId = localStorage.getItem("userId")

if(!userId){
return
}

const data={

name:this.name,
email:this.email,
age:this.age,
height:this.height,
weight:this.weight,
goal:this.goal

}

this.http.put(this.api + "/auth/update/" + userId,data)
.subscribe({

next:()=>{

alert("Profile updated successfully")

this.loadProfile()

},

error:(err)=>{

console.log("Update error",err)

}

})

}

}
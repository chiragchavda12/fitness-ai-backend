import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'

import { AuthService } from '../../../core/services/auth'

@Component({
selector:'app-login',
standalone:true,
imports:[CommonModule,FormsModule,RouterModule],
templateUrl:'./login.html',
styleUrls:['./login.css']
})

export class LoginComponent{

/* ================= FORM DATA ================= */

email:string=""
password:string=""

loading:boolean=false

constructor(
private authService:AuthService,
private router:Router
){}

/* ================= LOGIN FUNCTION ================= */

login(){

if(!this.email || !this.password){

alert("Please enter email and password")
return

}

const data={

email:this.email,
password:this.password

}

this.authService.login(data).subscribe({

next:(res:any)=>{

localStorage.setItem("token",res.token)
localStorage.setItem("userId",res.user._id)
localStorage.setItem("email",res.user.email)
localStorage.setItem("name",res.user.name)

localStorage.setItem("user", JSON.stringify(res.user))

alert("Login successful")

this.router.navigate(['/dashboard'])

},

error:(err)=>{

alert("Login failed")
console.log(err)

}

})

}

}
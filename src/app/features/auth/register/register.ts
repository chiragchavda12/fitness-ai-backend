import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'

import { AuthService } from '../../../core/services/auth'

@Component({
selector:'app-register',
standalone:true,
imports:[CommonModule,FormsModule,RouterModule],
templateUrl:'./register.html',
styleUrls:['./register.css']
})

export class RegisterComponent{

name:string=""
email:string=""
password:string=""

constructor(
private authService:AuthService,
private router:Router
){}

register(){

const data={

name:this.name,
email:this.email,
password:this.password

}

this.authService.register(data).subscribe({

next:(res:any)=>{

alert("Account created successfully")

this.router.navigate(['/login'])

},

error:(err)=>{

alert("Registration failed")

console.log(err)

}

})

}

}
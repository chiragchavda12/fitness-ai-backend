import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
providedIn:'root'
})

export class AuthService{

apiUrl = environment.apiUrl

constructor(private http:HttpClient){}

register(data:any){
return this.http.post(this.apiUrl + "/auth/register",data)
}

login(data:any){
return this.http.post(this.apiUrl + "/auth/login",data)
}

saveToken(token:string){
localStorage.setItem("token",token)
}

getToken(){
return localStorage.getItem("token")
}

saveUser(user:any){
localStorage.setItem("user",JSON.stringify(user))
}

getUser(){
const user=localStorage.getItem("user")
return user ? JSON.parse(user) : null
}

logout(){
localStorage.clear()
}

}
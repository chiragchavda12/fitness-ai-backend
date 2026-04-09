import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
providedIn:'root'
})

export class ContactService{

apiUrl="https://fitness-ai-backend-4ash.onrender.com/api"

constructor(private http:HttpClient){}


/* ================= CONTACT ================= */

sendMessage(data:any){

return this.http.post(this.apiUrl + "/contact",data)

}

}
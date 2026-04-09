import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
providedIn:'root'
})

export class ProgressService{

apiUrl = "https://fitness-ai-backend-4ash.onrender.com/api";

constructor(private http:HttpClient){}


/* ================= ADD PROGRESS ================= */

addProgress(data:any){
return this.http.post(this.apiUrl,data)
}


/* ================= GET USER PROGRESS ================= */

getProgress(userId:any){
return this.http.get(this.apiUrl + "/" + userId)
}

}
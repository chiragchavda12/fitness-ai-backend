import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
providedIn:'root'
})

export class DietService{

apiUrl = "https://fitness-ai-backend-4ash.onrender.com/api";

constructor(private http:HttpClient){}


/* ================= GENERATE DIET ================= */

generateDiet(data:any){
return this.http.post(this.apiUrl + "/generate",data)
}


/* ================= GET DIET PLAN ================= */

getDiet(){
return this.http.get(this.apiUrl)
}

}
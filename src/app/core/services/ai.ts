import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
providedIn:'root'
})

export class AiService{

apiUrl="http://localhost:8000"

constructor(private http:HttpClient){}


/* ================= WORKOUT AI ================= */

generateWorkout(data:any){
return this.http.post(this.apiUrl + "/generate-workout",data)
}


/* ================= DIET AI ================= */

generateDiet(data:any){
return this.http.post(this.apiUrl + "/generate-diet",data)
}

}
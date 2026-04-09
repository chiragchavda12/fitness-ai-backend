import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
providedIn:'root'
})

export class WorkoutService{


/* ================= API URL ================= */

apiUrl = "https://fitness-ai-backend-4ash.onrender.com/api";


constructor(private http:HttpClient){}


/* ================= GET WORKOUTS ================= */

getWorkouts(){

return this.http.get(this.apiUrl + "/workouts")

}


/* ================= ADD WORKOUT ================= */

addWorkout(data:any){

return this.http.post(this.apiUrl + "/workout",data)

}


/* ================= DELETE WORKOUT ================= */

deleteWorkout(id:any){

return this.http.delete(this.apiUrl + "/workout/" + id)

}


/* ================= UPDATE WORKOUT ================= */

updateWorkout(id:any,data:any){

return this.http.put(this.apiUrl + "/workout/" + id,data)

}

}
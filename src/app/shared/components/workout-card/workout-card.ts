import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
selector:'app-workout-card',
standalone:true,
imports:[CommonModule],
templateUrl:'./workout-card.html',
styleUrls:['./workout-card.css']
})

export class WorkoutCardComponent{

@Input() workout:any

}
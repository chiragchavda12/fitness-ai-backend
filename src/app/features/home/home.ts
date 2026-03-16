import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
selector:'app-home',
standalone:true,
imports:[CommonModule,RouterModule],
templateUrl:'./home.html',
styleUrls:['./home.css']
})

export class HomeComponent{

/* ================= PAGE INFO ================= */

appName:string="Fitness AI Trainer";

description:string="Smart fitness platform that generates AI workout plans, diet plans and tracks progress.";


/* ================= NAVIGATION BUTTONS ================= */

startAI(){

console.log("Navigate to AI Trainer");

}

}
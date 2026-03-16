import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
selector:'app-diet',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./diet.html',
styleUrls:['./diet.css']
})

export class DietComponent{

/* ================= USER INPUT ================= */

height:number=0
weight:number=0
age:number=0
budget:number=0
calories:number=0
goal:string=""

/* ================= DIET DATA ================= */

dietPlan:any[]=[]

breakfast:string[]=[]
midmeal:string[]=[]
lunch:string[]=[]
evening:string[]=[]
dinner:string[]=[]


/* ================= GENERATE DIET ================= */

generateDiet(){

/* RESET */

this.breakfast=[]
this.midmeal=[]
this.lunch=[]
this.evening=[]
this.dinner=[]


/* ================= WEIGHT LOSS ================= */

if(this.goal==="weight_loss"){

this.breakfast=[
"Oats with Milk",
"1 Apple",
"Green Tea"
]

this.midmeal=[
"Handful Almonds",
"1 Orange"
]

this.lunch=[
"2 Chapati",
"Mixed Vegetable",
"Low Fat Curd",
"Salad"
]

this.evening=[
"Green Tea",
"Roasted Chana"
]

this.dinner=[
"Vegetable Soup",
"1 Chapati",
"Grilled Paneer"
]

}


/* ================= MUSCLE GAIN ================= */

else if(this.goal==="muscle_gain"){

this.breakfast=[
"4 Egg Omelette / Paneer",
"Oats",
"Banana",
"Milk"
]

this.midmeal=[
"Peanut Butter Sandwich",
"Protein Shake"
]

this.lunch=[
"Brown Rice",
"Chicken Breast / Paneer",
"Vegetables",
"Curd"
]

this.evening=[
"Banana Shake",
"Handful Nuts"
]

this.dinner=[
"2 Chapati",
"Paneer / Fish",
"Vegetables"
]

}


/* ================= MAINTAIN ================= */

else{

this.breakfast=[
"Poha / Upma",
"1 Fruit",
"Milk"
]

this.midmeal=[
"Dry Fruits",
"Fruit Juice"
]

this.lunch=[
"2 Chapati",
"Dal",
"Vegetables",
"Salad"
]

this.evening=[
"Tea",
"Roasted Peanuts"
]

this.dinner=[
"1 Chapati",
"Paneer / Dal",
"Vegetables"
]

}


/* RESULT SHOW */

this.dietPlan=[...this.breakfast]

}

}
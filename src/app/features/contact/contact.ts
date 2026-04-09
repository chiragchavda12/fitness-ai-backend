import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
selector:'app-contact',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./contact.html',
styleUrls:['./contact.css']
})

export class ContactComponent {

name:string="";
email:string="";
subject:string="";
message:string="";

loading:boolean=false;

sendMessage(){

if(!this.name || !this.email || !this.message){

alert("Please fill all fields");
return;

}

this.loading=true;

const templateParams={

name:this.name,
email:this.email,
subject:this.subject,
message:this.message

};

emailjs.send(
'service_okpqf7a',
'template_zghqumc',
templateParams,
'csOVQrhodGw0gLW1a'
)

.then(()=>{

alert("Message sent successfully ✅");

this.name="";
this.email="";
this.subject="";
this.message="";

this.loading=false;

})

.catch((error)=>{

console.log(error);

alert("Error sending message ❌");

this.loading=false;

});

}

}
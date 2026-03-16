import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
selector: 'app-navbar',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './navbar.html',
styleUrls: ['./navbar.css']
})

export class NavbarComponent implements OnInit {

isLoggedIn:boolean=false
menuOpen:boolean=false
mobileMenuOpen:boolean=false

constructor(private router:Router){}

ngOnInit(){

this.checkLogin()

/* ROUTE CHANGE DETECT */

this.router.events
.pipe(filter(event => event instanceof NavigationEnd))
.subscribe(()=>{

this.checkLogin()

/* close dropdown on route change */

this.menuOpen=false
this.mobileMenuOpen=false

})

}


/* ================= LOGIN CHECK ================= */

checkLogin(){

const token=localStorage.getItem("token")

this.isLoggedIn=!!token

}


/* ================= ACCOUNT DROPDOWN ================= */

toggleMenu(){

this.menuOpen=!this.menuOpen

}


/* ================= MOBILE MENU ================= */

toggleMobileMenu(){

this.mobileMenuOpen=!this.mobileMenuOpen

}


/* ================= CLOSE MOBILE MENU ================= */

closeMenu(){

this.mobileMenuOpen=false

}


/* ================= LOGOUT ================= */

logout(){

localStorage.clear()

this.isLoggedIn=false
this.menuOpen=false
this.mobileMenuOpen=false

this.router.navigate(['/login'])

}

}
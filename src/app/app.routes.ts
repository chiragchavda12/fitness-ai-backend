import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

/* ================= PUBLIC ROUTES ================= */

{
path: '',
loadComponent: () =>
import('./features/home/home').then(m => m.HomeComponent)
},

{
path: 'about',
loadComponent: () =>
import('./features/about/about').then(m => m.AboutComponent)
},

{
path: 'contact',
loadComponent: () =>
import('./features/contact/contact').then(m => m.ContactComponent)
},

{
path: 'diet',
loadComponent: () =>
import('./features/diet/diet').then(m => m.DietComponent)
},

{
path: 'bmi',
loadComponent: () =>
import('./features/bmi/bmi').then(m => m.BmiComponent)
},

{
path: 'login',
loadComponent: () =>
import('./features/auth/login/login').then(m => m.LoginComponent)
},

{
path: 'register',
loadComponent: () =>
import('./features/auth/register/register').then(m => m.RegisterComponent)
},

/* ================= LOGIN REQUIRED ================= */

{
path: 'workout',
canActivate: [authGuard],
loadComponent: () =>
import('./features/workout/workout').then(m => m.WorkoutComponent)
},

{
path: 'ai-trainer',
canActivate: [authGuard],
loadComponent: () =>
import('./features/ai-trainer/ai-trainer').then(m => m.AiTrainerComponent)
},

{
path: 'profile',
canActivate: [authGuard],
loadComponent: () =>
import('./features/profile/profile').then(m => m.ProfileComponent)
},

{
path: 'workout-history',
canActivate: [authGuard],
loadComponent: () =>
import('./features/workout-history/workout-history').then(m => m.WorkoutHistoryComponent)
},

{
path: 'dashboard',
canActivate: [authGuard],
loadComponent: () =>
import('./features/dashboard/dashboard').then(m => m.DashboardComponent)
},

/* ================= 404 ================= */

{
path: '**',
redirectTo: ''
}

];
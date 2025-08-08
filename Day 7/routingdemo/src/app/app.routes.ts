import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Careers } from './components/careers/careers';
import { News } from './components/news/news';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'home', component:Home},
    {path:'about', component:About},    
    {path:'contact', component:Contact},
    {path:'careers', component:Careers},    
    {path:'news', component:News},     
    {path:'login', component:Login},
    {path:'register', component:Register}
];

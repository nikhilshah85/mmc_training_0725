import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { News } from './components/news/news';
import { Login } from './components/login/login';
import { South } from './components/contact/locations/south/south';
import { West } from './components/contact/locations/west/west';
import { North } from './components/contact/locations/north/north';
import { East } from './components/contact/locations/east/east';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact,children:[
        {path:'south',component:South},
        {path:'west',component:West},    
        {path:'north',component:North},
        {path:'east',component:East}
    ]},
    {path:'news',component:News},
    {path:'login',component:Login}
];

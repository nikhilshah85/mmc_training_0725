import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Transfer } from './components/transfer/transfer';
import { Viewaccountdetails } from './components/viewaccountdetails/viewaccountdetails';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Notfound } from './components/notfound/notfound';
import { Whoisthisuser } from './services/whoisthisuser';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'transfer',component:Transfer, canActivate:[Whoisthisuser]},
    {path:'accountdetails',component:Viewaccountdetails,canActivate:[Whoisthisuser]},
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path:'**',component:Notfound}
];

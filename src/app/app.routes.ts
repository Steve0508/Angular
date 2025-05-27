import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { SignalsComponent } from './signals/signals.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
    {path:'',component:UsersComponent},
    {path:'users',component:UsersComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'structural-directive',component:StructuralDirectiveNgifVsIfComponent},
    {path:'attribute-directive',component:AttributeDirectiveComponent},
    {path:'signal',component:SignalsComponent},
    {path:'**',component:PageNotFoundComponent}
];

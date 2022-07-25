import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';





const routes: Routes = [
  // {path:'',redirectTo:'products',pathMatch:'full'},
  // {path:'admin',component:AdminHomeComponent,canActivate:[AdminGuardGuard]}

  {path:'loans',component:LoansComponent},
  {path:'add',component:AddLoansComponent},
  {path:'loantype',component:LoantypesComponent,outlet:'addlone',
  },
  {path:'loans/add-loans',component:AddLoansComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

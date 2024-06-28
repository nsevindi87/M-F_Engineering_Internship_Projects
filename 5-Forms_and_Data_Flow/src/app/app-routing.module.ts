import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupformcontolComponent } from './groupformcontol/groupformcontol.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormBuilderComponent} from "./form-builder/form-builder.component"


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"reactiveform", component:ReactiveFormComponent},
  {path:"groupformcontol", component:GroupformcontolComponent},
  {path:"formbuilder", component:FormBuilderComponent},
  {path:"**", redirectTo:"", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

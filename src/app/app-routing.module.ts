import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { AddOrganizationComponent } from './portal/addorganization/addorganization.component';
import { DeleteOrganizationComponent } from './portal/deleteorganization/deleteorganization.component';
import { GetOrganizationComponent } from './portal/getorganizations/getorganization.component';
import { PortalComponent } from './portal/portal.component';
import { UpdateOrganizationComponent } from './portal/updateorganization/updateorganization.component';
import { ProjectComponent } from './project/project.component';
import { SignupFormsComponent } from './signup/signup-forms/signup-forms.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portal', component: PortalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/forms', component: SignupFormsComponent },
  { path: 'organization/add', component: AddOrganizationComponent },
  { path: 'organization/delete', component: DeleteOrganizationComponent },
  { path: 'organization/get', component: GetOrganizationComponent },
  { path: 'organization/update', component: UpdateOrganizationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { AddOrganizationComponent } from './portal/addorganization/addorganization.component';
import { ConfirmuUserComponent } from './portal/confirm-user/confirm-user.component';
import { InviteUserComponent } from './portal/invite-user/invite-user.component';
import { PortalComponent } from './portal/portal.component';
import { ViewUsersComponent } from './portal/view-users/view-users.component';
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
  { path: 'organization/invite-user', component: InviteUserComponent },
  { path: 'user/confirm', component: ConfirmuUserComponent },
  { path: 'users/view', component: ViewUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

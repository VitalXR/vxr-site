import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { PortalComponent } from './portal/portal.component';
import { SignupComponent } from './signup/signup.component';
import { SignupFormsComponent } from './signup/signup-forms/signup-forms.component';
import { AddOrganizationComponent } from './portal/addorganization/addorganization.component';
import { DeleteOrganizationComponent } from './portal/deleteorganization/deleteorganization.component';
import { GetOrganizationComponent } from './portal/getorganizations/getorganization.component';
import { UpdateOrganizationComponent } from './portal/updateorganization/updateorganization.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    NewsComponent,
    ContactComponent,
    PortalComponent,
    LoginComponent,
    SignupComponent,
    SignupFormsComponent,
    AddOrganizationComponent,
    DeleteOrganizationComponent,
    GetOrganizationComponent,
    UpdateOrganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

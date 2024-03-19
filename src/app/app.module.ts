import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router'; 
import { PostComponent } from './post/post.component';

const appRoutes:Routes =[
  { path:'', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'contact-us', component: ContactUsComponent},
  { path:'post/:idh', component: PostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FormComponent,
    ListComponent,
    HeaderComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    UserListComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

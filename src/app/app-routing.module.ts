import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
const routes: Routes = [
  { path: '',
component: HomeComponent,
data: {animation: 'Home'}},
{ path: 'resume',
component: ResumeComponent,
data: {animation: 'Resume'}},
{ path: 'projects',
component: ProjectsComponent,
data: {animation: 'Projects'}},
{ path: 'aboutme',
component: AboutmeComponent,
data: {animation: 'About'}},
{ path: '**',
component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

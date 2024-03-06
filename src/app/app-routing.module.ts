import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './public_components/home-page/home-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},


  {
    path: 'admin', loadChildren: () => import('./admin_components/admin/admin.module').then(admin =>  admin.AdminModule)
  },

  {
    path: 'employer', loadChildren: () => import('./employer_components/employer/employer.module').then(employer =>  employer.EmployerModule)
  },

  {
    path: 'jobseeker', loadChildren: () => import('./job_seeker_components/jobseeker/jobseeker.module').then(jobSeeker =>  jobSeeker.JobseekerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

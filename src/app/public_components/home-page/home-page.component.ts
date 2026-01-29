import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  recentJobs: any;

  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getJobsData();
  }


  getJobsData() {
    const url = this.projectService.baseUrl + 'jobs';
    this.projectService.getData(url).subscribe((res: any) => {
      this.recentJobs = res.data;
      console.log(this.recentJobs);
    })
  }
}

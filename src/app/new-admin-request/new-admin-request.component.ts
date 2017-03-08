import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-admin-request',
  templateUrl: './new-admin-request.component.html',
  styleUrls: ['./new-admin-request.component.css']
})
export class NewAdminRequestComponent implements OnInit {

  id: number;
  private sub: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
	  this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
  });
  }

}

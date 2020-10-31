import { Component, OnInit } from '@angular/core';
import {Books} from '../Book';
import {ActivatedRoute, Router} from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  _booklist: Books[];
  constructor(private _route: Router, private _service: BookserviceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchBookByIDFromRemote(id).subscribe(
      data=>{
        console.log('response received');
        this._booklist = data;
      },
      error=>console.log('exception occured')
    )
  }

 

  goTolist(){
    console.log('go back');
    this._route.navigate(['booklist'])
  }
  

}

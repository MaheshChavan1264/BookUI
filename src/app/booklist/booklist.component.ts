import { Component, OnInit } from '@angular/core';
import {Books} from '../Book';
import {Router} from '@angular/router';
import { BookserviceService } from '../bookservice.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  _booklist: Books[];
  constructor(private _route: Router, private _service: BookserviceService) { }

  ngOnInit() {
    this._service.fetchBookListFromRemote().subscribe(
      data=>{
        console.log('response received');
        this._booklist = data;
      },
      error=>console.log('exception occured')
    )
  }

  goToAddBook(){
    this._route.navigate(['/addbook'])
  }

  goToEditBook(id: number){
    console.log("id: "+id);
    this._route.navigate(["/editbook",id])
  }
 
  goToViewBook(id: number){
    console.log("id: "+id);
    this._route.navigate(["/viewbook",id])
  }
}

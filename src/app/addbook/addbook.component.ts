import { Component, OnInit } from '@angular/core';
import {Books} from '../Book';
import {Router} from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book = new Books();
  constructor(private _route: Router, private _service: BookserviceService) { }

  ngOnInit() {
  }

  addbookformsubmit(){
    console.log(this.book);
    this._service.addBookToRemote(this.book).subscribe(
    
        data=>{
          console.log('data added successfully');
          this._route.navigate(['booklist'])
        },
        error=>console.log('details not added')
    )
  }

  gotolist(){
    console.log('go back');
    this._route.navigate(['booklist'])
  }
}

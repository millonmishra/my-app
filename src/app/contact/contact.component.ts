import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  showMessage: boolean;
  showContactForm: boolean;

  constructor() { 
    this.showMessage = false;
    this.showContactForm = true;
  }

  ngOnInit() {
    this.showMessage = false;
    this.showContactForm = true;
  }

  showMessagefn(){
    this.showMessage = true;
    this.showContactForm = false;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMail() {
    var mail = document.createElement("a");
    console.log("22222");
    mail.href = "mailto:infos@jd-btp.caraibes.com?subject=Demande d'informations&body=Bonjour, \n Je me permet de vous contacter au sujet de ...";
    mail.click();
  }

}

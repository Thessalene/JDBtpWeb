import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  fname : string;
  fmail : string;
  ftype : string;
  fsubject : string;


templateParams = {
  from_name: "james",//Client name
  message: "Mon devis est le suivant HEHE", //message
  from_mail: "thessalene.jeanlouis@reseau.eseo.fr",//Client who ask the devis email
  from_phone: "06 12 34 56 78",
};

  constructor() { }

  files: File[] = [];
 
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    console.log("FILES : " + 
    this.files.forEach(element => {
      console.log(element.name)
    }));
  }
   
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);

    console.log("FILES : " + 
    this.files.forEach(element => {
      console.log(element.name)
    }));
  }

  onSubmit() {
    console.log("Name : " + this.fname);
    console.log("fmail : " + this.fmail);
    console.log("ftype : " + this.ftype);
    console.log("fsubject : " + this.fsubject);
    console.log("-------------------------------------");

    document.getElementById("openModalButton").click();
  }

  ngOnInit(): void {
    console.log("FILES : " + 
    this.files.forEach(element => {
      console.log(element.name)
    }));
   /* emailjs.init("user_h3uqvSYKuvN8cpxhUqPUM");
    console.log("envoi de mail");

    emailjs.send("contact_service","template_001",this.templateParams, 'user_h3uqvSYKuvN8cpxhUqPUM').then((response) => {
        console.log('SUCCESS!', response.status, response.text);
     }, (err) => {
        console.log('FAILED...', err);
     }); */

  }

}

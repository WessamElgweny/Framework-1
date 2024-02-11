import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nameFlag:boolean = false;

  showNameLable(input:any){
    if(input.target.value.length> 0){
      this.nameFlag=true;
    }
    else {
      this.nameFlag = false;
    };
  };

  ageFlag:boolean = false;

  showAgeLable(input:any){
    if(input.target.value.length> 0){
      this.ageFlag=true;
    }
    else {
      this.ageFlag = false;
    };
  };
  emailFlag:boolean = false;

  showEmailLable(input:any){
    if(input.target.value.length> 0){
      this.emailFlag=true;
    }
    else {
      this.emailFlag = false;
    };
  };
  passwordFlag:boolean = false;

  showPasswordLable(input:any){
    if(input.target.value.length> 0){
      this.passwordFlag=true;
    }
    else {
      this.passwordFlag = false;
    };
  };
}



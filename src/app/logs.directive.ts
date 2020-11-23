import { Directive } from '@angular/core';
import { AppService } from './app.service';

@Directive({
  selector: '[logs]',
  host: {
    "(focus)" : 'onFocusValue($event)',
    "(change)" : 'onInputChange($event)',
    "(blur)" : 'onBlurChange($event)'
  }
})
export class LogsDirective {
  url_log: string = "addressticket/saveLogs";
  inputObj: HTMLInputElement;
  inputId: HTMLInputElement;
  holdValue: string;
  constructor(public app:AppService) {
      this.inputId = document.getElementById("inTicketId") as HTMLInputElement
      this.inputObj = document.getElementById("inTicketObj") as HTMLInputElement

   }

  onFocusValue(e){
     var target = e.target || e.srcElement;
     this.holdValue = target.value;
  }

  onInputChange(e){
    console.log(this.holdValue);
    if(!this.inputId || !this.inputObj){
      this.inputId = document.getElementById("inTicketId") as HTMLInputElement
      this.inputObj = document.getElementById("inTicketObj") as HTMLInputElement
    }
    var inputEle = e.target || e.srcElement;
    if(inputEle.type == "checkbox"){
      console.log(inputEle);
    }
    var attr = inputEle.dataset['checked'] || false;
     if(attr){
        if(attr == 0){
          inputEle.dataset['checked'] = 1;
        }
     }
  }
  handleCheckBox(ele) {
    if(ele.type == "checkbox"){
      return (ele.checked) ? 1 : 0;
    }else {
      return ele.value;
    }

  }

  generateTimeStamp():Array<any> {
    let today = new Date();
    var min   = (today.getMinutes() < 10) ? `0${today.getMinutes()}` : today.getMinutes();
    var secnd = (today.getSeconds() < 10) ? `0${today.getSeconds()}` : today.getSeconds();
    var hours = (today.getHours() < 10) ? `0${today.getHours()}` : today.getHours();
    return [today.getTime(), hours, min, secnd];
  }

  onBlurChange(e){
   
    var refresh = document.getElementById("contLog") || null;
    var event = new Event("logged");
    var previous = false;
    var form = new FormData();
    var inputEle = e.target || e.srcElement;
    var attr = inputEle.id || false;
    var check = inputEle.dataset['checked'] || false;
    var inbox = inputEle.dataset['inbox'] || false;
    var inValue =  this.handleCheckBox(inputEle);
    var tab = inputEle.dataset['tab'] || 'none';

    inputEle.dataset['checked'] = 0;
    if(inbox){
      var _self = this;
      var att = inputEle.dataset['attribute'];
     
      this.app.inbox.forEach(obj => {
        if(obj['objectid'] == _self.inputObj.value) {
          obj[att] = inputEle.value;
          return; //Kill Loop..
        }
      });
     
    }

    if(attr && check == 1 && inValue){

       if(this.app.logs.length > 0){
          this.app.logs.forEach(log => {
              if(log.input_attribute == attr){
                previous = false;
                return;
              }else{
                previous = true;
              }
          });
       }else{
         previous = true;
       }
       let stamp = this.generateTimeStamp();
       form.append("id_ticket", this.inputId.value);
       form.append("objectid", this.inputObj.value);
       form.append("userId", `${this.app.account_info.user_id}`);
       form.append("type", inputEle.type)
       form.append('tab', tab);
       form.append('attr', attr);
       form.append("value", inValue);
       form.append("fname",
        `${this.app.account_info.first_name} ${this.app.account_info.last_name}`);
       form.append("tmJS",`${stamp[0]}`);
       form.append("tmTXT", `${stamp[1]}:${stamp[2]}:${stamp[3]}`)


       if(previous)
       {
          form.append('value', this.holdValue);
          fetch(this.app.url + this.url_log, {method: 'post',body: form}).then((respopnse) =>{
            console.log("log something out");
            stamp = this.generateTimeStamp();
            form.delete('tmJS');
            form.delete('tmTXT');
            form.delete('value');
            form.append("tmJS",`${stamp[0]}`);
            form.append("tmTXT", `${stamp[1]}:${stamp[2]}:${stamp[3]}`)
            form.append('value', inValue);
            fetch(this.app.url + this.url_log, {method: 'post',body: form}).then((respopnse) =>{
              console.log("log something out");
              refresh.dispatchEvent(event);
            });

          });
       }else{

          form.append('value', inValue);
          fetch(this.app.url + this.url_log, {method: 'post',body: form}).then((respopnse) =>{
            console.log("log something out");
            refresh.dispatchEvent(event);
          });
       }





    }
  }
}

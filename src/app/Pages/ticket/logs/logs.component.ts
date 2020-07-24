import { Component,Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../app.service';


@Component({
  selector: 'ticket-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent  {
  logs: Array<any> = [];
  logs_url: String = "addressticket/fetchLogs/?id=";
  selected: any = null;
  btnSelect: any = null;
  @Input() ticketId: number = 0;
  @Output() logTotal = new EventEmitter<number>();

  constructor(public app: AppService) { }



  downloadLogs(id: number) {

    fetch(this.app.url + this.logs_url + id.toString()).then((response) => response.json())
    .then(data => {
      this.app.logs = this.logs = data
      this.logTotal.emit(this.logs.length);

    })
    .catch(error => console.log(error))
  }


  reDownload(){
    this.downloadLogs(this.ticketId);
  }

  resetDefault(btn: any): Boolean {
    let Action:boolean = false;
    if(this.selected){
      var select:any = document.getElementById(this.selected)
      if(select.classList.contains("flashit")) select.classList.remove("flashit")

      if(select.type == "checkbox"){
        if(select.classList.contains("checkbox")) select.classList.remove("checkbox")

      }

    }

    if(this.btnSelect){

      let msg: string = this.btnSelect.innerText;
      if(msg.includes("UNPREVIEW")){
        this.btnSelect.innerHTML = "PREVIEW";

      }

      if(this.btnSelect.id == btn.id){
        Action = true;
      }

      if(this.btnSelect.classList.contains("flashit")) this.btnSelect.classList.remove("flashit")
    }

    return Action;
  }

  previewElement(btn,  input, link){
    let btnEl = btn.tartget || btn.srcElement;
    let action:Boolean = this.resetDefault(btnEl);

    if(this.btnSelect) this.btnSelect = (btnEl.id == this.btnSelect.id) ? null : btnEl;
    else
    {
      this.btnSelect = btnEl;
    }


    if(action) return;



    btnEl.innerHTML = "UNPREVIEW";
    if(btnEl.classList.contains("flashit")) btnEl.classList.remove("flashit")
    btnEl.classList.add("flashit")



    this.selected = input;

    let inEle:any = document.getElementById(input);

    if(inEle.type  == "checkbox"){
      if(inEle.classList.contains("checkbox")) inEle.classList.remove("checkbox")
      inEle.classList.add("checkbox")
    }

    if(inEle.classList.contains("flashit")) inEle.classList.remove("flashit")

    inEle.classList.add("flashit")

    //Get all a links...
    let links: any = document.querySelectorAll("a") || null;
    if(links){
        links.forEach(a => {
          if(a.href.includes(link)){
            a.click();
          }
        });
    }

  }

  replaceValue(elem, val){
     let target:any = document.getElementById(elem);
     target.value = val;
  }

}

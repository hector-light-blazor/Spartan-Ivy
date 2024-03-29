import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../app.service';
import {Ticket} from '../ticket.component';

declare var jQuery:any;
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() attributes: Ticket = null;
  @Input() ESIGN: boolean = false;

  @Output() close = new EventEmitter();
  @Output() send = new EventEmitter();
  @Output() esignPDF = new EventEmitter<any>();
  loading: boolean = false;
  loadingEnglish: boolean = false;
  loadingSpanish: boolean = false;
  showSignature: boolean = false;
  choosen: string = "";
  print_name: string = "";
  pdfFile: string = "";
  names: Array<string> = [];
  public ENGLISH: number = 1;
  public SPANISH: number = 2;
  pageSelection: number = 0;

  notification: any = {"email": [], "phone" : []}

  listServers: Array<String> = ["911gisweb1", "911appsvr" ];
  listPorts: Array<number> = [5000, 8080];

  constructor(private app: AppService) { }

  ngOnInit() {

    if(this.attributes) {



      if(this.attributes.clast_name && this.attributes.cfirst_name) this.names.push(this.attributes.clast_name + " " + this.attributes.cfirst_name);
      
      if(this.attributes.plast_name && this.attributes.pfirst_name) this.names.push(this.attributes.plast_name + " " + this.attributes.pfirst_name);
      if(this.attributes.letter_name) this.names.push(this.attributes.letter_name);
      
      if(this.attributes.cemail) this.notification.email.push(this.attributes.cemail);
      if(this.attributes.alt_cemail) this.notification.email.push(this.attributes.alt_cemail);

      
    }

  }

  formatNumber(){

  }

  closeDialog() {
    this.close.emit(true);
  }

  sendLetterRequest() {
    //this.send.emit(this.choosen);
    let form = new FormData();
    if(!this.choosen) {
      jQuery.Notify({
        caption: 'Error',
        content: 'Please provide name!',
        timeout: 5000,
        type: this.app.msg_codes.alert

      });
      return; //Exit FUNCTION
    }

   else if(!this.attributes.objectid) {
      jQuery.Notify({
        caption: 'Error',
        content: 'No ticket number!',
        timeout: 5000,
        type: this.app.msg_codes.alert

      });
      return; //Exit FUNCTION
    }
    else if(!this.attributes.full_address) {
      jQuery.Notify({
        caption: 'Error',
        content: 'No address available!',
        timeout: 5000,
        type: this.app.msg_codes.alert

      });
      return;
    }
    else if(!this.attributes.msag_comm) {
      jQuery.Notify({
        caption: 'Error',
        content: 'No msag community!',
        timeout: 5000,
        type: this.app.msg_codes.alert

      });
      return;
    }
    else if(!this.attributes.property_id) { // No Property id then use subdivision name..

       let name = "";


      for(var x = 0; x < 29; x++) {
            name +=  '\xa0';
       }
      form.append("name", this.choosen);
       form.append("ticket", this.attributes.objectid.toString());
       form.append("pr_name", name);
       var lot = "";
       if(this.attributes.lot_num) lot = (this.attributes.lot_num.includes("LOT") ? this.attributes.lot_num : "LOT " + this.attributes.lot_num)
       form.append("propid", this.attributes.subdivision + " " + lot)
       form.append("addr1", this.attributes.full_address);
       form.append("addr2", this.attributes.msag_comm);


    }else {
      let name = "";


      for(var x = 0; x < 29; x++) {
            name +=  '\xa0';
       }
      form.append("name", this.choosen);
      form.append("ticket", this.attributes.objectid.toString());
      form.append("pr_name", name);
      form.append("propid", "PID # " +  this.attributes.property_id);
      form.append("addr1", this.attributes.full_address);
      form.append("addr2", this.attributes.msag_comm);

    }
    this.loading= true;
    let found = false;
    let index = Math.floor(Math.random() * 2)
    console.log(index);
    let selectServer: String = this.listServers[index];
    form.append("srv", selectServer.toString());
    form.append("port", this.listPorts[index].toString());
    var firstRoute = null;
    var secondRoute = null;
    firstRoute = this.app.POST_METHOD(this.app.route.api.gLetterAny, form).subscribe((response) => {
        this.loading = false;

      if(response.hasOwnProperty("pdf")) {



          this.pdfFile = response['pdf'];
          var name = this.pdfFile.replace(".pdf", ".docx");
          window.open("https://gis.lrgvdc911.org/LETTER_TEMPLATES/" + this.pdfFile, "_blank");

          window.open("https://gis.lrgvdc911.org/LETTER_TEMPLATES/" + name, "_blank");
        }

    }, (error) => { //If Any Error Dispatch Second Server...

       let reindex = Math.floor(Math.random() * 2)
       let reServer: String = this.listServers[reindex];
       form.delete('srv');
       form.delete('port');
       form.append("srv", reServer.toString());
       form.append("port", this.listPorts[reindex].toString());

       secondRoute = this.app.POST_METHOD(this.app.route.api.gLetterAny, form).subscribe((response) => {
            this.loading = false;

            if(response.hasOwnProperty("pdf")) {



                firstRoute.unsubscribe();


                this.pdfFile = response['pdf'];
                var name = this.pdfFile.replace(".pdf", ".docx");
                window.open("https://gis.lrgvdc911.org/LETTER_TEMPLATES/" + this.pdfFile, "_blank");

                window.open("https://gis.lrgvdc911.org/LETTER_TEMPLATES/" + name, "_blank");
              }
        });

    });
  }

  sendLetterEsign(selection) {


    this.pageSelection = selection;
    //console.log(this.attributes);
    let form = new FormData();

    if(!this.choosen) {
      jQuery.Notify({
        caption: 'Error',
        content: 'Please provide name!',
        timeout: 5000,
        type: this.app.msg_codes.alert

      });
      return; //Exit FUNCTION
    }
    else if(!this.print_name) {
      jQuery.Notify({
        caption: 'Error',
        content: 'Enter Print Name!',
        timeout: 5000,
        type: this.app.msg_codes.alert

      });
      return; //Exit FUNCTION
    }
   else if(!this.attributes.objectid) {
      jQuery.Notify({
        caption: 'Error',
        content: 'No ticket number!',
        timeout: 5000,
        type: this.app.msg_codes.alert

      });
      return; //Exit FUNCTION
    }
    else if(!this.attributes.full_address) {
      jQuery.Notify({
        caption: 'Error',
        content: 'No address available!',
        timeout: 5000,
        type: this.app.msg_codes.alert

      });
      return;
    }
    else if(!this.attributes.msag_comm) {
      jQuery.Notify({
        caption: 'Error',
        content: 'No msag community!',
        timeout: 5000,
        type: this.app.msg_codes.alert

      });
      return;
    }
    else if(!this.attributes.property_id) { // No Property id then use subdivision name..
       var lng = this.print_name.length;
       if(lng < 29) {
          var subLng = 29 - lng;
          for(var x = 0; x < subLng; x++) {
            this.print_name +=  '\xa0';
          }
       }



       form.append("name", this.choosen);
       form.append("ticket", this.attributes.objectid.toString());
       form.append("pr_name", this.print_name);

       var lot = (this.attributes.lot_num.includes("LOT") ? this.attributes.lot_num : "LOT " + this.attributes.lot_num)

       form.append("propid", this.attributes.subdivision + " " + lot)
       form.append("addr1", this.attributes.full_address);
       form.append("addr2", this.attributes.msag_comm);


    }else {
      var lng = this.print_name.length;
       if(lng < 29) {
          var subLng = 29 - lng;
          for(var x = 0; x < subLng; x++) {
            this.print_name +=  '\xa0';
          }
       }
      form.append("name", this.choosen);
      form.append("ticket", this.attributes.objectid.toString());
      form.append("pr_name", this.print_name);
      form.append("propid","PID # " +  this.attributes.property_id);
      form.append("addr1", this.attributes.full_address);
      form.append("addr2", this.attributes.msag_comm);

    }

    if(selection == this.ENGLISH) {
      this.loadingEnglish = true;
    }
    else if(selection == this.SPANISH) {
      this.loadingSpanish = true;
    }


    //this.esignPDF.emit({"pdf" : this.pdfFile, "page" : this.pageSelection});
    this.app.POST_METHOD(this.app.route.api.gEsignLetter, form).subscribe((response) => {

      if(response.hasOwnProperty("pdf")) {
          this.pdfFile = response['pdf'];
          console.log(`Hello response = ${response}`)
          this.esignPDF.emit({"pdf" : this.pdfFile, "page" : this.pageSelection});
        }
        if(this.loadingEnglish) {
          this.loadingEnglish = false;
        }else if(this.loadingSpanish) {
          this.loadingSpanish = false;
        }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ChatRouting } from "./chat-routing.module";
import { Observable } from "rxjs";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Chat } from "./chat";
import { ChatService } from "./chat.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private ChatService: ChatService) { }
  selectedProduct;

  ngOnInit() {
    var user = localStorage.getItem('matrikel_number');
    // console.log("data",user);

    this.ChatService.getProductsUser().subscribe(
      data => {
        // console.log(data);
      this.selectedProduct= data;
    });
  }

  getAllMessages(receiverid, senderid) {
    console.log("ReceiverID:",receiverid);
    console.log("senderID", senderid);
    const postdata = {
      receiver_id: receiverid,
      sender_id: senderid
    }
    // console.log("Get All Chat Messages!",postdata);
    this.getallMessages(postdata);
  }

 

  getallMessages(postData) {
    const jsonData = JSON.stringify(postData);
    console.log("All Messages:",jsonData);
    // location.reload();
    this.ChatService.getallMessages(jsonData).map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();
          return body || {};
      }


}
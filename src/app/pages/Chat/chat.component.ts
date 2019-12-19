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

  constructor(private ChatService: ChatService, private formbulider: FormBuilder) { }
  selectedProduct;
  public chat: any = [];
  chatform: FormGroup;

  ngOnInit() {
    var user = localStorage.getItem('matrikel_number');
    // console.log("data",user);

    this.ChatService.getProductsUser().subscribe(
      data => {
        // console.log(data);
      this.selectedProduct= data;
    });

    this.chatform = this.formbulider.group({
      message: ["", [Validators.required]],
      product_id: ["", [Validators.required]],
      sender_id: ["", [Validators.required]],
      receiver_id: ["", [Validators.required]]
    })

  }

  ChatMsg(prod, receiver) {
    const userdata = this.chatform.value;
    console.log("Result:", prod);
        const DBForm = { userdata };
        this.chatform.reset();

        const pdata = {
          message: DBForm.userdata.message,
          product_id: prod,
          sender_id: localStorage.getItem("matrikel_number"),
          receiver_id: receiver,
        };
        console.log("Post Data:",pdata);

        this.SendMsg(pdata);
      }

      SendMsg(userData) {
        const jsonData = JSON.stringify(userData);
        console.log("Send Message:",jsonData);
        this.ChatService.SendMsg(jsonData).subscribe(data => {});
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
    this.ChatService.getallMessages(jsonData).subscribe(data => {
      this.chat=data;
      console.log("in service",this.chat);
    });
  }

  readLocalStorage(key) {
    return localStorage.getItem(key);
  }
}

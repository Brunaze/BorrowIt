import { Component, OnInit } from '@angular/core';
/*
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';*/
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  /*
    stompClient: any;
    appComponent!: AppComponent;
  */
  constructor(appComponent: AppComponent) { }

  ngOnInit(): void {

  }
  /*
    connect() {
      let socket = new SockJS('http://localhost:8283/testchat');
      this.stompClient = Stomp.over(socket);
      const _this = this;
      this.stompClient.connect({}, function (frame: any) {
        console.log('Connected: ' + frame);
        _this.stompClient.subscribe('/start/initial', function (hello: any) {
          console.log(JSON.parse(hello.body));
          _this.onMessageReceived(JSON.parse(hello.body));
        });
  
      });
    }
  
    disconnect() {
      if (this.stompClient !== null) {
        this.stompClient.disconnect();
      }
      console.log("Disconnected");
    }
  
  
    send(message: any) {
      console.log("calling logout api via web socket");
      this.stompClient.send("/app/hello", {}, JSON.stringify(message));
    }
  
    onMessageReceived(message: any) {
      console.log("Message Recieved from Server :: " + message);
      this.appComponent.handleMessage(JSON.stringify(message.body));
    }
  */
}

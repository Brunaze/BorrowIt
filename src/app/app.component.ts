import { Component } from '@angular/core';
/*import { WebSocketAPI } from './WebSocketAPI';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BorrowIt';

  /*
  webSocketAPI!: WebSocketAPI;
  greeting: any;
  name!: string;
  content!: string;
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent());
  }

  connect() {
    this.webSocketAPI._connect();
  }

  disconnect() {
    this.webSocketAPI._disconnect();
  }

  sendMessage() {
    this.webSocketAPI._send(this.content);
  }

  handleMessage(message: any) {
    this.greeting = message;
  }
  */
}

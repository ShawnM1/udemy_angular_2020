import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server was created.";
  serverName = 'testServer';
  serverCreated = false;
  servers = ['TesrServer', 'TestServer 2'];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "server was created. server name" + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}

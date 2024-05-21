import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverName="";
  serverCreated=false;
  serverCreationStatus = 'No server was created';
  servers = ['Testserver','Testserver2'];

  toggleFlag=false;
  log=[];
  username="";
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }
  onServerCreate(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created';
  }
  onToggle(){
    this.toggleFlag=!this.toggleFlag;
    this.log.push(new Date);
  }

}

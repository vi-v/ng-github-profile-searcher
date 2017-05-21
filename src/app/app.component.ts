import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  providers: [ GithubService ]
})
export class AppComponent  {
  
}

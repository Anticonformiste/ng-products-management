import { Component } from '@angular/core';
// The metadata Decorator that tells Angular that this is a component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'APM Product Management';
}

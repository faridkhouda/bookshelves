import { Component } from '@angular/core';
import * as firebase from 'firebase' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var config = {
    apiKey: "AIzaSyBsAevOgfqfnZ00T5wjLz9qUU3S2d2pavo",
    authDomain: "bookshelves-b546f.firebaseapp.com",
    databaseURL: "https://bookshelves-b546f.firebaseio.com",
    projectId: "bookshelves-b546f",
    storageBucket: "bookshelves-b546f.appspot.com",
    messagingSenderId: "473930698903"
  };
  firebase.initializeApp(config);
  }
}

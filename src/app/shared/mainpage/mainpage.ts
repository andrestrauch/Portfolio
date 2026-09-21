import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Header } from '../header/header';
import { Content } from '../content/content';

@Component({
  imports: [Hero,Header,Content],
  selector: 'app-mainpage',
  styleUrl: './mainpage.scss',
  templateUrl: './mainpage.html',
})
export class Mainpage {

  
}

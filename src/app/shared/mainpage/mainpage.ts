import { Component } from '@angular/core';
import { Hero } from '../Hero/hero';
import { Header } from '../Header/header';
import { Content } from '../Content/content';

@Component({
  imports: [Hero,Header,Content],
  selector: 'app-mainpage',
  styleUrl: './mainpage.scss',
  templateUrl: './mainpage.html',
})
export class Mainpage {

  
}

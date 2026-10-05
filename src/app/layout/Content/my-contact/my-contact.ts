import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe,RouterLink],
  selector: 'app-my-contact',
  styleUrl: './my-contact.scss',
  templateUrl: './my-contact.html',
})
export class MyContact {}

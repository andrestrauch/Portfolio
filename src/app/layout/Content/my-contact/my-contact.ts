import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-my-contact',
  styleUrl: './my-contact.scss',
  templateUrl: './my-contact.html',
})
export class MyContact {}

import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-my-comments',
  styleUrl: './my-comments.scss',
  templateUrl: './my-comments.html',
})
export class MyComments {}

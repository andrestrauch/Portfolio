import { Component, inject } from '@angular/core';
import { Header } from '../../shared/Header/header';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [Header,TranslatePipe],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {

  private route = inject(ActivatedRoute);
}

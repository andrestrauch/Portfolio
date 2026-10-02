import { Component, inject } from '@angular/core';
import { Header } from '../../shared/Header/header';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [Header],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {

  private route = inject(ActivatedRoute);
}

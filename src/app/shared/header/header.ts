import { Component, inject, signal } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe,TranslateDirective],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})

export class Header {
  private translate = inject(TranslateService);

  ngOnInit(){
    document.getElementById("enBtn")?.classList.add(`active`);
  }

  changeLanguage(language: string): void {

    this.translate.use(language);
    if(language=="de")
    {
      document.getElementById("enBtn")?.classList.remove(`active`);
      document.getElementById("deBtn")?.classList.add(`active`);
    }

    if(language=="en")
    {
      document.getElementById("deBtn")?.classList.remove(`active`);
      document.getElementById("enBtn")?.classList.add(`active`);
    }

  }
}



  





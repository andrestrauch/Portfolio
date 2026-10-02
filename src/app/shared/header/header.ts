import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})

export class Header {
  static lang:string = "en";

  // setLang(){
  //   if(Header.lang == "en"){
  //     document.getElementById("langToggle")?.classList.remove(`lang-de`);
  //     document.getElementById("langToggle")?.classList.add(`lang-en`);
  //   }

  //   if(Header.lang == "de"){
  //     document.getElementById("langToggle")?.classList.remove(`lang-en`);
  //     document.getElementById("langToggle")?.classList.add(`lang-de`);
  //   }

  //   console.log(Header.lang);
  // }

}

      document.getElementById('langToggle')?.addEventListener('click', function () {
        const body = document.body;
        const currentMode = body.getAttribute('lang');
        body.setAttribute('lang', currentMode === 'en' ? 'de' : 'en');
    });


  





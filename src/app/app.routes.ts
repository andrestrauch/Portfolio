import { Routes } from '@angular/router';
import { Mainpage } from './shared/Mainpage/mainpage';
import { Imprint } from './shared/Imprint/imprint';


export const routes: Routes = [
    {path:"",
        component:Mainpage
    },
    {path:"imprint",
        component:Imprint
    },
    {path: '**', redirectTo: ""}
];

import { Routes } from '@angular/router';
import { Mainpage } from './layout/Mainpage/mainpage';
import { Imprint } from './layout/Imprint/imprint';


export const routes: Routes = [
    {path:"",
        component:Mainpage
    },
    {path:"imprint",
        component:Imprint
    },
    {path: '**', redirectTo: ""}
];

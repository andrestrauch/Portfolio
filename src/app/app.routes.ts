import { Routes } from '@angular/router';
import { Mainpage } from './shared/Mainpage/mainpage';
import { Inprint } from './shared/Inprint/inprint';

export const routes: Routes = [
    {path:"",
        component:Mainpage
    },
    {path:"inprint",
        component:Inprint
    },
];

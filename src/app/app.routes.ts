import { Routes } from '@angular/router';
import { Mainpage } from './shared/mainpage/mainpage';
import { Inprint } from './shared/inprint/inprint';

export const routes: Routes = [
    {path:"",
        component:Mainpage
    },
    {path:"inprint",
        component:Inprint
    },
];

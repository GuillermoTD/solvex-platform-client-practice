import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./screens/home-page/home-page').then(m => m.HomePage)
    }
];

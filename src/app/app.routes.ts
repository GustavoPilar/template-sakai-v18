import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { MyPageComponent } from './components/my-page/my-page.component';

export const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            {path: '', component: MyPageComponent}
        ]
    }
];

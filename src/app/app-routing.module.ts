import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';


const routes: Routes = [
  {path: '', redirectTo: 'start-framework',pathMatch:'full' },
  {path:'start-framework',component:StartFrameworkComponent,title:'StartFramework'},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'portfolio',component:PortfolioComponent,title:'Portfolio'},
  {path:'contact',component:ContactComponent,title:'Contact'},
  {path:'**',component:NotfoundpageComponent,title:'not found'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

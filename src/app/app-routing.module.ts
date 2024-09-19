import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForBlocksComponent } from './for-blocks/for-blocks.component';
import { IfBlocksComponent } from './if-blocks/if-blocks.component';
import { SwitchBlocksComponent } from './switch-blocks/switch-blocks.component';
import { DeferBlocksComponent } from './defer-blocks/defer-blocks.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'defer', component: DeferBlocksComponent },
  { path: 'for', component: ForBlocksComponent },
  { path: 'if', component: IfBlocksComponent },
  { path: 'switch', component: SwitchBlocksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeferBlocksComponent } from './defer-blocks/defer-blocks.component';
import { ForBlocksComponent } from './for-blocks/for-blocks.component';
import { IfBlocksComponent } from './if-blocks/if-blocks.component';
import { SwitchBlocksComponent } from './switch-blocks/switch-blocks.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListComponent } from './defer-blocks/character-list/character-list.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DeferBlocksComponent,
    ForBlocksComponent,
    IfBlocksComponent,
    SwitchBlocksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CharacterListComponent,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

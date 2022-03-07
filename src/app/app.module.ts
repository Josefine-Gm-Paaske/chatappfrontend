import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { UserComponent } from './user/user.component';
import { BoardComponent } from './tic-tac-toe/board/board.component';
import { SquareComponent } from './tic-tac-toe/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UserComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

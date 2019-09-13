import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataserverService } from './dataserver.service';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CrudComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataserverService]
})
export class AppModule { }

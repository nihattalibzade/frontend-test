import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ItemsService } from './services/items.service';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from './components/tree/tree.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, BodyComponent, SidebarComponent, TreeComponent, ItemDetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { IntegrationComponent } from './views/integration/integration.component';
import { WeiComponent } from './views/wei/wei.component';
import { AssosClubComponent } from './views/assos-club/assos-club.component';
import { CampusComponent } from './views/campus/campus.component';
import { DateTitleComponent } from './components/date-title/date-title.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EventDialogComponent } from './components/event-dialog/event-dialog.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntegrationComponent,
    WeiComponent,
    AssosClubComponent,
    CampusComponent,
    DateTitleComponent,
    EventCardComponent,
    EventDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

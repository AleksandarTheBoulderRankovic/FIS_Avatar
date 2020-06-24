import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AvatarWorldComponent } from './avatar-world/avatar-world.component';
import { DestinationComponent } from './destination/destination.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { DirBtnDirective } from './directives/dir-btn.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SignupParentComponent } from './signup-parent/signup-parent.component';
import { GoldPipePipe } from './pipes/gold-pipe.pipe';
import { CabbagePatchPipe } from './pipes/cabbage-patch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AvatarWorldComponent,
    DestinationComponent,
    NavigationComponent,
    DirBtnDirective,
    SignUpComponent,
    LoginComponent,
    SignupParentComponent,
    GoldPipePipe,
    CabbagePatchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    IvyCarouselModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

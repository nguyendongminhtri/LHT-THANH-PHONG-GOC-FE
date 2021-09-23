import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/gettingstarted/gettingstarted.component';

import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {RegisterComponent} from './form-login/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './form-login/login/login.component';
import {UserAccountComponent} from './form-login/user-account/user-account.component';
import {ChangePasswordComponent} from './form-login/manage-profile/change-password/change-password.component';
import {httpInterceptorProviders} from './service/auth.interceptor';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ChangeAvatarComponent } from './form-login/manage-profile/change-avatar/change-avatar.component';
import { ChangeProfileComponent } from './form-login/manage-profile/change-profile/change-profile.component';
import { PageUserComponent } from './admin-manage/page-user/page-user.component';
import {MatPaginatorModule} from '@angular/material/paginator';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'user-account', component: UserAccountComponent, data: {title: 'User-Account'}},
  {path: 'change-password', component: ChangePasswordComponent, data: {title: 'Change-Password'}},
  {path: 'change-avatar', component: ChangeAvatarComponent, data: {title: 'Change-Avatar'}},
  {path: 'change-profile', component: ChangeProfileComponent, data: {title: 'Change-Profile'}},
  // {path: 'page-user', component: PageUserComponent, data: {title: 'Page-User'}},
  {path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: {title: 'Getting Started'}
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, UserAccountComponent, ChangePasswordComponent, UploadAvatarComponent, ChangeAvatarComponent, ChangeProfileComponent, PageUserComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, ReactiveFormsModule, MatProgressSpinnerModule, MatPaginatorModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}

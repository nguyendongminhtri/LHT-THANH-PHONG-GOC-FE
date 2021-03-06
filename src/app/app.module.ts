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
import { ChangeRoleComponent } from './admin-manage/change-role/change-role.component';
import {AuthGuard} from './service/auth.guard';
import {AdminGuard} from './service/admin.guard';
import { DialogContentExampleDialogComponent } from './admin-manage/dialog-content-example-dialog/dialog-content-example-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateCategoryComponent } from './content/categoryManage/create-category/create-category.component';
import { PageCategoryComponent } from './content/categoryManage/page-category/page-category.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { UpdateCategoryComponent } from './content/categoryManage/update-category/update-category.component';
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CreateSongComponent } from './content/songManage/create-song/create-song.component';
import {MatSelectModule} from '@angular/material/select';
import { CreateSingerComponent } from './content/singerManage/create-singer/create-singer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CreateBandComponent } from './content/bandManage/create-band/create-band.component';
import { PageSongComponent } from './content/songManage/page-song/page-song.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'user-account', component: UserAccountComponent,canActivate: [AuthGuard], data: {title: 'User-Account'}},
  {path: 'change-password', component: ChangePasswordComponent, data: {title: 'Change-Password'}},
  {path: 'change-avatar', component: ChangeAvatarComponent, data: {title: 'Change-Avatar'}},
  {path: 'change-profile', component: ChangeProfileComponent, canActivate: [AuthGuard], data: {title: 'Change-Profile'}},
  {path: 'page-user', component: PageUserComponent, canActivate: [AdminGuard],data: {title: 'Page-User'}},
  {path: 'change-role/:id', component: ChangeRoleComponent, data: {title: 'Change-Role'}},
  { path: 'create-category', component: CreateCategoryComponent,canActivate: [AuthGuard],data: {title: 'Create-Category'}},
  { path: 'page-category', component: PageCategoryComponent, data: {title: 'Page-Category'}},
  { path: 'update-category/:id', component: UpdateCategoryComponent, data: {title: 'Update-Category'}},
  { path: 'create-song', component: CreateSongComponent, data: {title: 'Create-Song'}},
  { path: 'create-singer', component: CreateSingerComponent, data: {title: 'Create-Singer'}},
  { path:'create-band', component: CreateBandComponent},
  { path: 'page-song', component: PageSongComponent},
  {path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: {title: 'Getting Started'}
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, UserAccountComponent, ChangePasswordComponent, UploadAvatarComponent, ChangeAvatarComponent, ChangeProfileComponent, PageUserComponent, ChangeRoleComponent, DialogContentExampleDialogComponent, CreateCategoryComponent, PageCategoryComponent, UpdateCategoryComponent, UploadFileComponent, CreateSongComponent, CreateSingerComponent, CreateBandComponent, PageSongComponent],
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
    MatNativeDateModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, ReactiveFormsModule, MatProgressSpinnerModule, MatPaginatorModule, MatDialogModule, Ng2SearchPipeModule, MatProgressBarModule, MatSelectModule, MatDatepickerModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}

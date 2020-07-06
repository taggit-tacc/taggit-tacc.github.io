import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// CommonModule for dynamic field
import {APP_BASE_HREF, CommonModule} from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import {ModalModule, BsDropdownModule, AccordionModule} from 'ngx-foundation';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { NgxMasonryModule } from 'ngx-masonry';


import { FileSizeModule } from 'ngx-filesize';
import { ApiModule} from 'ng-tapis';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent} from './components/map/map.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { AuthService } from './services/authentication.service';
import { CallbackComponent } from './components/callback/callback.component';
import {AuthInterceptor, TokenInterceptor} from './app.interceptors';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ModalFileBrowserComponent } from './components/modal-file-browser/modal-file-browser.component';
import {environment} from '../environments/environment';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
// import { TaggerComponent } from './components/tagger/tagger.component';
// import { PresetGeneratorComponent } from './components/preset-generator/preset-generator.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { FormGeneratorComponent } from './components/side-bar/tag-images/form-generator/form-generator.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
// import { ImageListComponent } from './components/image-list/image-list.component';
import { SelectGroupComponent } from './components/side-bar/select-group/select-group.component';
import { SelectImageComponent } from './components/side-bar/select-image/select-image.component';
import { TagGeneratorComponent } from './components/side-bar/tag-generator/tag-generator.component';
import { TagImagesComponent } from './components/side-bar/tag-images/tag-images.component';

@NgModule({
  declarations: [
	AppComponent, MapComponent, NotFoundComponent, MainComponent,
	ControlBarComponent,
	CallbackComponent,
	ModalFileBrowserComponent,
	ImageGalleryComponent,
	// TaggerComponent,
	// PresetGeneratorComponent,
	ImageBoxComponent,
	FormGeneratorComponent,
	SideBarComponent,
	// ImageListComponent,
	SelectGroupComponent,
	SelectImageComponent,
	TagGeneratorComponent,
	TagImagesComponent,
  ],
  imports: [
	// this is for the ng-tapis library
	ApiModule.forRoot({rootUrl: 'https://agave.designsafe-ci.org/'}),
	BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	BrowserAnimationsModule,
	InfiniteScrollModule,
	NgxSpinnerModule,
	NgxMasonryModule,
	ModalModule.forRoot(),
	MatMenuModule,
	MatToolbarModule,
	MatButtonModule,
	MatDialogModule,
	MatTooltipModule,
	MatInputModule,
	MatCheckboxModule,
	MatSelectModule,
	MatRadioModule,
	MatIconModule,
	AccordionModule.forRoot(),
	ReactiveFormsModule,
	FormsModule,
	FileSizeModule,
	BsDropdownModule.forRoot(),
	CommonModule,
  ],
  providers: [
	AuthService,
	{
	  provide: HTTP_INTERCEPTORS,
	  multi: true,
	  useClass: AuthInterceptor
	},
	{
	  provide: HTTP_INTERCEPTORS,
	  multi: true,
	  useClass: TokenInterceptor
	},
	{
	  provide: APP_BASE_HREF,
	  useValue: environment.baseHref
	}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalFileBrowserComponent]
})
export class AppModule { }

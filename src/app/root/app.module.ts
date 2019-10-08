
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDialogModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { LeftComponent } from '../animations/left/left.component'
import { MainComponent } from '../animations/main/main.component'
import { RightComponent } from '../animations/right/right.component'
import { ArraysComponent } from '../arrays/arrays.component'
import { TokenInterceptorService } from '../auth/services/token-interceptor.service'
import { ChildToParentComponent } from '../child-parent/child.component'
import { ProfileComponent } from '../child-routes/profile.component'
import { SettingsComponent } from '../child-routes/settings.component'
import { UtilsComponent } from '../child-routes/utils.component'
import { DataBindingComponent } from '../data-binding/data-binging.component'
import { FormReactiveComponent } from '../form-reactive/form-reactive.component'
import { InputsComponent } from '../input-controls/input-controls.component'
import { ParentToChildComponent } from '../parent-child/parent.component'
import { SemanticComponent } from '../semantic-ui/semantic-ui.component'
import { SnackbarComponent } from '../snackbar/snackbar.component'
import { UserListComponent } from '../tests/04-forms/user-list.component'
import { AuthModule } from './../auth/auth.module'
import { ButtonsComponent } from './../buttons/buttons.component'
import { ParentFromChildComponent } from './../child-parent/parent.component'
import { CssGridComponent } from './../css-grid/css-grid.component'
import { FormTemplateComponent } from './../form-template/form-template.component'
import { ChildFromParentComponent } from './../parent-child/child.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AlertModule } from 'ngx-bootstrap/alert'
import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { ModalModule } from 'ngx-bootstrap/modal'
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component'

// Recipes
import { HeaderComponent } from './../header/header.component';

import { RecipesComponent } from '../recipes/recipes.component'
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component'
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component'

@NgModule({
  declarations: [
    AppComponent,
    FormReactiveComponent,
    FormTemplateComponent,
    UserListComponent,
    ButtonsComponent,
    InputsComponent,
    CssGridComponent,
    DataBindingComponent,
    ArraysComponent,
    ParentToChildComponent,
    ChildFromParentComponent,
    ParentFromChildComponent,
    ChildToParentComponent,
    SemanticComponent,
    SnackbarComponent,
    MainComponent,
    LeftComponent,
    RightComponent,
    SettingsComponent,
    ProfileComponent,
    UtilsComponent,
    // ConfirmModalComponent,
    ModalDialogComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
  ],
  entryComponents: [
    // ConfirmModalComponent,
    ModalDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AuthModule,
    // SuiModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [{ provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }

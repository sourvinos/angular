// Base
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
// Material design
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule, MatListModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CdkTableModule } from '@angular/cdk/table';
// Directives
import { MatRowKeyboardSelectionModule } from "mat-row-keyboard-selection"
// Pipes
import { CustomPipe } from '../pipes/custom.pipe'
// Bootstrap
import { AlertModule } from 'ngx-bootstrap/alert'
import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { ModalModule } from 'ngx-bootstrap/modal'
// Components
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ArraysComponent } from '../arrays/arrays.component'
import { AuthModule } from './../auth/auth.module'
import { ChildFromParentComponent } from './../parent-child/child.component'
import { ChildToParentComponent } from '../child-parent/child.component'
import { CockpitComponent } from './../data-binding/cockpit/cockpit.component'
import { CreateEmployeeComponent } from './../employees/create-employee.component'
import { CssGridComponent } from './../css-grid/css-grid.component'
import { DataBindingComponent } from '../data-binding/data-binging.component'
import { EmployeeItemComponent } from './../employees/employee-item.component'
import { FormReactiveComponent } from '../form-reactive/form-reactive.component'
import { FormTemplateComponent } from './../form-template/form-template.component'
import { HeaderComponent } from './../header/header.component'
import { InputsComponent } from '../input-controls/input-controls.component'
import { LeftComponent } from '../animations/left/left.component'
import { ListEmployeesComponent } from './../employees/list-employees.component'
import { MainComponent } from '../animations/main/main.component'
import { MaterialComponent } from '../material/material.component'
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component'
import { MaterialTableComponent } from '../material-table/material-table.component'
import { MaxDataBindingComponent } from '../data-binding/max-data-binding.component'
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component'
import { ModalIndexComponent } from './../modal-index/modal-index.component'
import { PageNotFoundComponent } from './../page-not-found.component'
import { ParentFromChildComponent } from './../child-parent/parent.component'
import { ParentToChildComponent } from '../parent-child/parent.component'
import { ProfileComponent } from '../child-routes/profile.component'
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component'
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component'
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component'
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component'
import { RecipesComponent } from '../recipes/recipes.component'
import { RightComponent } from '../animations/right/right.component'
import { SemanticComponent } from '../semantic-ui/semantic-ui.component'
import { ServerElementComponent } from './../data-binding/server-element/server-element.component'
import { SettingsComponent } from '../child-routes/settings.component'
import { SnackbarComponent } from '../snackbar/snackbar.component'
import { TokenInterceptorService } from '../auth/services/token-interceptor.service'
import { UserListComponent } from '../tests/04-forms/user-list.component'
import { UtilsComponent } from '../child-routes/utils.component'

@NgModule({
    declarations: [
        AppComponent,
        ArraysComponent,
        ChildFromParentComponent,
        ChildToParentComponent,
        CockpitComponent,
        CreateEmployeeComponent,
        CssGridComponent,
        DataBindingComponent,
        EmployeeItemComponent,
        FormReactiveComponent,
        FormTemplateComponent,
        HeaderComponent,
        InputsComponent,
        LeftComponent,
        ListEmployeesComponent,
        MainComponent,
        MaterialComponent,
        MaterialDialogComponent,
        MaxDataBindingComponent,
        ModalDialogComponent,
        ModalIndexComponent,
        MaterialTableComponent,
        PageNotFoundComponent,
        ParentFromChildComponent,
        ParentToChildComponent,
        ProfileComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipesComponent,
        RightComponent,
        SemanticComponent,
        ServerElementComponent,
        SettingsComponent,
        SnackbarComponent,
        UserListComponent,
        UtilsComponent,
        CustomPipe
    ],
    entryComponents: [
        ModalDialogComponent,
        ModalIndexComponent,
        MaterialDialogComponent
    ],
    imports: [
        CdkTableModule,
        AppRoutingModule,
        AuthModule,
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSnackBarModule,
        MatTableModule,
        ReactiveFormsModule,
        MatRowKeyboardSelectionModule,
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

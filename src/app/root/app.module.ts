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
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { CdkTableModule } from '@angular/cdk/table'
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
import { FormReactiveComponent } from '../form-reactive/form-reactive.component'
import { FormTemplateComponent } from './../form-template/form-template.component'
import { InputsComponent } from '../input-controls/input-controls.component'
import { LeftComponent } from '../animations/left/left.component'
import { MainComponent } from '../animations/main/main.component'
import { MaterialComponent } from '../material/material.component'
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component'
import { MaterialTableComponent } from '../material-table/material-table.component'
import { PageNotFoundComponent } from './../page-not-found.component'
import { ParentFromChildComponent } from './../child-parent/parent.component'
import { ParentToChildComponent } from '../parent-child/parent.component'
import { RightComponent } from '../animations/right/right.component'
import { TokenInterceptorService } from '../auth/services/token-interceptor.service'
import { UserListComponent } from '../tests/04-forms/user-list.component'
import { HeaderComponent } from '../parent-child/header.component'
import { FooterComponent } from './../parent-child/footer.component'
import { TablesComponent } from './../tables/tables.component'
// Posts
import { PostWrapperComponent } from '../posts/user-interface/wrapper-post'
import { PostListComponent } from '../posts/user-interface/list-post'
import { PostFormComponent } from '../posts/user-interface/form-post'
// Employees
import { EmployeeWrapperComponent } from '../employees/user-interface/wrapper-employee'
import { EmployeeListComponent } from '../employees/user-interface/list-employee'
import { EmployeeItemComponent } from '../employees/user-interface/item-employee'
import { EmployeeFormComponent } from '../employees/user-interface/form-employee'
import { PostModalForm } from '../posts/user-interface/modal-form'

@NgModule({
    declarations: [
        AppComponent,
        ArraysComponent,
        ChildFromParentComponent,
        ChildToParentComponent,
        EmployeeFormComponent,
        EmployeeItemComponent,
        FormReactiveComponent,
        FormTemplateComponent,
        HeaderComponent,
        InputsComponent,
        LeftComponent,
        EmployeeListComponent,
        MainComponent,
        MaterialComponent,
        MaterialDialogComponent,
        MaterialTableComponent,
        PageNotFoundComponent,
        ParentFromChildComponent,
        ParentToChildComponent,
        RightComponent,
        UserListComponent,
        CustomPipe,
        FooterComponent,
        TablesComponent,
        // Posts
        PostWrapperComponent,
        PostListComponent,
        PostFormComponent,
        PostModalForm,
        // Employees
        EmployeeWrapperComponent,
        EmployeeListComponent,
        EmployeeItemComponent,
        EmployeeFormComponent,
    ],
    entryComponents: [
        MaterialDialogComponent,
        PostModalForm
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

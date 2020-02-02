// Base
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
// Material design
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule, MatListModule, MAT_LABEL_GLOBAL_OPTIONS, MatCheckboxModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { CdkTableModule } from '@angular/cdk/table'
import { MatExpansionModule } from '@angular/material/expansion'
// Directives
import { InputDirective } from '../directives/input'
// Pipes
import { CustomPipe } from '../pipes/custom.pipe'
// Components
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ArraysComponent } from '../arrays/arrays.component'
import { AuthModule } from './../auth/auth.module'

import { MaterialComponent } from '../material/material.component'
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component'
import { PageNotFoundComponent } from './../page-not-found.component'
import { TokenInterceptorService } from '../auth/services/token-interceptor.service'
// Tables
import { TablesHostComponent } from '../tables/tables-host.component'
import { TablesComponent } from '../tables/tables.component'
// Posts
import { PostWrapperComponent } from '../posts/user-interface/wrapper-post'
import { PostListComponent } from '../posts/user-interface/list-post'
import { PostFormComponent } from '../posts/user-interface/form-post'
import { PostModalForm } from '../posts/user-interface/modal-form'
// Component interactions
import { ChildComponent } from '../component-interactions/child.component'
import { FooterComponent } from '../component-interactions/footer.component'
import { HeaderComponent } from '../component-interactions/header.component'
import { ParentComponent } from '../component-interactions/parent.component'
// Shared
import { TableComponent } from '../shared-components/table/table.component'
import { IndexDialogComponent } from '../shared-components/index-dialog/index-dialog.component'

@NgModule({
    declarations: [
        AppComponent,
        ArraysComponent,
        MaterialComponent,
        MaterialDialogComponent,
        PageNotFoundComponent,
        CustomPipe,
        // Posts
        PostWrapperComponent,
        PostListComponent,
        PostFormComponent,
        PostModalForm,
        // Component interactions
        ChildComponent,
        FooterComponent,
        HeaderComponent,
        IndexDialogComponent,
        ParentComponent,
        TableComponent,
        // Tables
        TablesHostComponent,
        TablesComponent,
        // Directives
        InputDirective
    ],
    entryComponents: [
        MaterialDialogComponent,
        IndexDialogComponent,
        // PostModalForm
    ],
    imports: [
        AppRoutingModule,
        CdkTableModule,
        AuthModule,
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSnackBarModule,
        MatTableModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
    ],
    providers: [{ provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }, {
        provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
    }],
    bootstrap: [AppComponent]
})

export class AppModule { }

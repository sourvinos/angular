import { CdkTableModule } from '@angular/cdk/table'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TokenInterceptorService } from '../auth/services/token-interceptor.service'
import { InteractionsModule } from '../interactions/classes/interactions.module'
import { MaterialModule } from '../material/classes/material.module'
import { CustomPipe } from '../pipes/custom.pipe'
import { PostsModule } from '../posts/classes/posts.module'
import { TablesModule } from '../tables/classes/tables.module'
import { AuthModule } from './../auth/auth.module'
import { PageNotFoundComponent } from './../page-not-found.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ArraysModule } from '../arrays/classes/arrays.module'

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        CustomPipe,
    ],
    imports: [
        AppRoutingModule,
        AuthModule,
        BrowserAnimationsModule,
        BrowserModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        InteractionsModule,
        PostsModule,
        ReactiveFormsModule,
        MaterialModule,
        TablesModule,
        ArraysModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

import { MatmoduleModule } from './matmodule/matmodule.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCreateComponent } from './post-create/post-create.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PostlistComponent } from './postlist/postlist.component';
import { HttpClientModule} from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { CalculatorComponent } from './calculator/calculator.component';




@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostlistComponent,
    IndexComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatmoduleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

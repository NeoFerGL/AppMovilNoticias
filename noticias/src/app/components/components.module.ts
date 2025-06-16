import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    IonicModule,
    ArticleComponent, // Importar en lugar de declarar
    ArticlesComponent // Importar en lugar de declarar
  ],
  exports: [
    ArticleComponent,  // Exportarlo correctamente
    ArticlesComponent // Exportarlo correctamente
  ]
})
export class ComponentsModule { }

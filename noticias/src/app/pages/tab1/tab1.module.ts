import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ArticleComponent } from 'src/app/components/article/article.component';  // Importar componente standalone
import { ArticlesComponent } from 'src/app/components/articles/articles.component';  // Importar componente standalone

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ComponentsModule,
    ArticleComponent,  // Importar directamente
    ArticlesComponent  // Importar directamente
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }

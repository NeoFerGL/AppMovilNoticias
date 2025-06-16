import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-articles',
  standalone: true,  // Indica que este componente es autónomo
  imports: [CommonModule, IonicModule, ArticleComponent],  // Importa los módulos necesarios
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {
  @Input() articles: Article[] = [];

  constructor() { }

}

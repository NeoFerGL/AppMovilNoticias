import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/interfaces';
import { IonicModule, Platform, ActionSheetController, ActionSheetButton } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

// Importamos los plugins de Capacitor
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article!: Article;
  @Input() index!: number;

  constructor(
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private storageService: StorageService
  ) { }

  async openArticle() {
    await Browser.open({ url: this.article.url });
  }

  async onOpenMenu() {
    const articleInFavorites = this.storageService.articleInFavorites(this.article);

    const normalBtns: ActionSheetButton[] = [
      {
        text: articleInFavorites ? 'Remover favorito' : 'Favorito',
        icon: articleInFavorites ? 'heart' : 'heart-outline',
        handler: () => this.onToggleFavorite(),
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel',
      },
    ];

    // Agregar opción de compartir solo si la app está corriendo en Capacitor
    if (this.platform.is('capacitor')) {
      normalBtns.unshift({
        text: 'Compartir',
        icon: 'share-outline',
        handler: () => this.onShareArticle(),
      });
    }

    const actionsheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: normalBtns,
    });

    await actionsheet.present();
  }

  async onShareArticle() {
    try {
      await Share.share({
        title: this.article.title,
        text: this.article.source.name,
        url: this.article.url,
        dialogTitle: 'Compartir artículo',
      });
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  }

  onToggleFavorite() {
    this.storageService.saveRemoveArticle(this.article);
  }

  onClick() {
    console.log('El botón fue presionado');
  }
}

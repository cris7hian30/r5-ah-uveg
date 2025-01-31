import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class NoticiasPage implements OnInit {
  noticias$!: Observable<any[]>;

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    const noticiasCollection = collection(this.firestore, 'noticias');
    this.noticias$ = collectionData(noticiasCollection, { idField: 'id' });
  }

  async eliminarNoticia(id: string) {
    try {
      const noticiaDoc = doc(this.firestore, `noticias/${id}`);
      await deleteDoc(noticiaDoc);
      console.log('Noticia eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar la noticia:', error);
    }
  }
}

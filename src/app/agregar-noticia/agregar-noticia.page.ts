import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.page.html',
  styleUrls: ['./agregar-noticia.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class AgregarNoticiaPage {
  newNoticia = {
    titulo: '',
    fecha: '',
    descripcion: '',
  };

  constructor(private firestore: Firestore) {}

  async agregarNoticia() {
    if (this.newNoticia.titulo && this.newNoticia.fecha && this.newNoticia.descripcion) {
      try {
        const noticiasCollection = collection(this.firestore, 'noticias');
        await addDoc(noticiasCollection, this.newNoticia);
        console.log('Noticia agregada:', this.newNoticia);
        alert('Noticia agregada exitosamente');
        this.newNoticia = { titulo: '', fecha: '', descripcion: '' };
      } catch (error) {
        console.error('Error al agregar la noticia:', error);
        alert('Ocurrió un error al agregar la noticia');
      }
    } else {
      alert('Por favor, completa todos los campos antes de agregar la noticia.');
    }
  }
}

// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Importar RouterModule

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { InventarioComponent } from './inventario/inventario.component';

const routes: Routes = [
  // Aquí puedes definir tus rutas
  { path: 'inventario', component: InventarioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', redirectTo: '/inventario', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Configurar rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

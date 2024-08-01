// src/app/services/erp.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErpService {
  private apiUrl = 'https://api.tuempresa.com/erp'; // Cambia esto a tu URL real

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos`);
  }

  agregarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}/productos`, producto);
  }

  eliminarProducto(nombre: string, categoria: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/productos/${categoria}/${nombre}`);
  }
}

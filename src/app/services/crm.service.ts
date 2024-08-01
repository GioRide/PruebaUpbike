// src/app/services/crm.service.ts
import { Injectable } from '@angular/core';
import { Producto } from './erp.service';

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  private inventario: Map<string, Producto[]> = new Map();

  constructor() {}

  agregarProducto(producto: Producto): void {
    if (!this.inventario.has(producto.categoria)) {
      this.inventario.set(producto.categoria, []);
    }
    this.inventario.get(producto.categoria)!.push(producto);
  }

  eliminarProducto(nombre: string, categoria: string): void {
    if (this.inventario.has(categoria)) {
      const productos = this.inventario.get(categoria)!;
      this.inventario.set(
        categoria,
        productos.filter(producto => producto.nombre !== nombre)
      );
    }
  }

  listarProductosPorCategoria(categoria: string): Producto[] {
    return this.inventario.get(categoria) || [];
  }

  calcularValorTotalInventario(): number {
    let total = 0;
    this.inventario.forEach((productos, categoria) => {
      productos.forEach(producto => {
        total += producto.precio;
      });
    });
    return total;
  }
}

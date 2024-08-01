// src/app/inventario/inventario.component.ts
import { Component } from '@angular/core';

export class Producto {
  constructor(public nombre: string, public precio: number, public categoria: string) {}
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  categorias: string[] = [];
  productos: Producto[] = [];

  constructor() {
    this.categorias = ['Categoría1', 'Categoría2'];
  }

  agregarProducto(nombre: string, precio: number, categoria: string): void {
    const producto = new Producto(nombre, precio, categoria);
    if (!this.categorias.includes(categoria)) {
      this.categorias.push(categoria);
    }
    this.productos.push(producto);
  }

  eliminarProducto(nombre: string, categoria: string): void {
    this.productos = this.productos.filter(p => p.nombre !== nombre || p.categoria !== categoria);
  }

  calcularValorTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  listarProductos(categoria: string): Producto[] {
    return this.productos.filter(p => p.categoria === categoria);
  }
}

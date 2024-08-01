// src/app/components/productos/productos.component.ts
import { Component, OnInit } from '@angular/core';
import { CrmService } from './../services/crm.service';
import { ErpService, Producto } from './../services/erp.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  nuevoProducto: Producto = { nombre: '', precio: 0, categoria: '' }; // Definir nuevoProducto

  constructor(private crmService: CrmService, private erpService: ErpService) {}

  ngOnInit(): void {
    this.erpService.obtenerProductos().subscribe(productos => {
      this.productos = productos;
      productos.forEach(producto => this.crmService.agregarProducto(producto));
    });
  }

  agregarProducto(producto: Producto): void {
    this.erpService.agregarProducto(producto).subscribe(() => {
      this.crmService.agregarProducto(producto);
    });
  }

  eliminarProducto(producto: Producto): void {
    this.erpService.eliminarProducto(producto.nombre, producto.categoria).subscribe(() => {
      this.crmService.eliminarProducto(producto.nombre, producto.categoria);
    });
  }

  listarProductos(categoria: string): Producto[] {
    return this.crmService.listarProductosPorCategoria(categoria);
  }

  calcularValorTotal(): number {
    return this.crmService.calcularValorTotalInventario();
  }
}

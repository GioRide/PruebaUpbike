// src/app/classes/inventario.ts
export class Inventario {
    private productos: Map<string, Producto[]> = new Map();
  
    agregarProducto(nombre: string, precio: number, categoria: string): void {
      const producto = new Producto(nombre, precio, categoria);
      if (!this.productos.has(categoria)) {
        this.productos.set(categoria, []);
      }
      this.productos.get(categoria)!.push(producto);
    }
  
    eliminarProducto(nombre: string, categoria: string): void {
      if (this.productos.has(categoria)) {
        const productos = this.productos.get(categoria)!;
        this.productos.set(
          categoria,
          productos.filter(producto => producto.nombre !== nombre)
        );
      }
    }
  
    listarProductosPorCategoria(categoria: string): Producto[] {
      return this.productos.get(categoria) || [];
    }
  
    calcularValorTotalInventario(): number {
      let total = 0;
      this.productos.forEach((productos, categoria) => {
        productos.forEach(producto => {
          total += producto.precio;
        });
      });
      return total;
    }
  
    static Producto = class Producto {
      constructor(
        public nombre: string,
        public precio: number,
        public categoria: string
      ) {}
    };
  }
  
  // Definimos Producto fuera de Inventario para evitar confusión
  export class Producto {
    constructor(
      public nombre: string,
      public precio: number,
      public categoria: string
    ) {}
  }
  
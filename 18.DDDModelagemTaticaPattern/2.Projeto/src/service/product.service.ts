import Product from "../entity/product";

export default class ProductService {
  static increasePrice(products: Product[], percentage: number): Product[] {
    products.forEach((product) => {
        console.log(product.price);
      product.changePrice((product.price * percentage) / 100 + product.price);
    });
    return products;
  }
}

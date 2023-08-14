import Product from "../entity/product";
import RepositoryInterface from "../../@shared/repository/repository-interface";
import ProductB from "../entity/product-b";
import ProductInterface from "../entity/product.interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<ProductInterface> {}

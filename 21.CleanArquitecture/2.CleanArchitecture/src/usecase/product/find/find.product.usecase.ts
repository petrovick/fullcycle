import Product from "../../../domain/product/entity/product";
import ProductInterface from "../../../domain/product/entity/product.interface";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { InputFindProductDto, OutputFindProductDto } from "./find.product.dto";

export default class FindProductUseCase {
  private productRepository: ProductRepositoryInterface;
  constructor(ProductRepository: ProductRepositoryInterface) {
    this.productRepository = ProductRepository;
  }

  async execute(input: InputFindProductDto): Promise<OutputFindProductDto> {
    input;
    const product = await this.productRepository.find(input.id);
    return OutputMapper.toOutput(product);
  }
}

class OutputMapper {
  static toOutput(product: ProductInterface): OutputFindProductDto {
    return {
      product: {
        id: product.id,
        name: product.name,
        price: product.price
      }
    };
  }
}

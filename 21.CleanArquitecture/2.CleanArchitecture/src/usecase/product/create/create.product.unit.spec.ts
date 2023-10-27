import Product from "../../../domain/product/entity/product";
import ProductB from "../../../domain/product/entity/product-b";
import CreateProductUseCase from "./create.product.usecase";

const input = {
  name: "Arroz",
  type: 'a',
  price: 29
};

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit test create product use case", () => {
    it("should create a product of type a", async () => {
      const productRepository = MockRepository();
      const productCreateUseCase = new CreateProductUseCase(productRepository);
  
      const output = await productCreateUseCase.execute(input);
  
      expect(productRepository.create.mock.calls[0][0]).toBeInstanceOf(Product);
      expect(output).toEqual({
        id: expect.any(String),
        name: input.name,
        price: input.price
      });
    });

    it("should create a product of type b", async () => {
      const productRepository = MockRepository();
      const productCreateUseCase = new CreateProductUseCase(productRepository);
  
      input.type = 'b';
      const output = await productCreateUseCase.execute(input);
  
      expect(productRepository.create.mock.calls[0][0]).toBeInstanceOf(ProductB);

      expect(output).toEqual({
        id: expect.any(String),
        name: input.name,
        price: input.price * 2
      });
    });

    it("should thrown an error when name is missing", async () => {
        const productRepository = MockRepository();
        const productCreateUseCase = new CreateProductUseCase(productRepository);

        input.name = "";

        await expect(productCreateUseCase.execute(input)).rejects.toThrow(
        "Name is required"
        );
    });
});

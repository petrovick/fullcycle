import Product from "../../../domain/product/entity/product";
import ProductB from "../../../domain/product/entity/product-b";
import ProductFactory from "../../../domain/product/factory/product.factory";
import UpdateProductUseCase from "./update.product.usecase";


const productTypeA = ProductFactory.create('a', 'Arroz', 29);
const productTypeB = ProductFactory.create('b', 'Bicicleta', 5929);

const input = {
  id: '123',
  name: "Arroz",
  price: 29
};

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(productTypeA)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit test update product use case", () => {
    it("should update a product of type a", async () => {
      const productRepository = MockRepository();
      const updateProductUseCase = new UpdateProductUseCase(productRepository);
  
      const output = await updateProductUseCase.execute(input);
  
      expect(productRepository.update.mock.calls[0][0]).toBeInstanceOf(Product);
      expect(output).toEqual({
        id: expect.any(String),
        name: input.name,
        price: input.price
      });
    });

    it("should update a product of type b", async () => {
      const productRepository = MockRepository();
      const updateProductUseCase = new UpdateProductUseCase(productRepository);
      productRepository.find.mockReturnValue(Promise.resolve(productTypeB));
  
      const output = await updateProductUseCase.execute(input);
  
      expect(productRepository.update.mock.calls[0][0]).toBeInstanceOf(ProductB);
      expect(output).toEqual({
        id: expect.any(String),
        name: input.name,
        price: input.price * 2
      });
    });

    it("should thrown an error when name is missing", async () => {
        const productRepository = MockRepository();
        const updateProductUseCase = new UpdateProductUseCase(productRepository);

        input.name = "";

        await expect(updateProductUseCase.execute(input)).rejects.toThrow(
        "Name is required"
        );
    });
});

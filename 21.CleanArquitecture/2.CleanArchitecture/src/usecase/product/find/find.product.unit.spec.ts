import ProductB from "../../../domain/product/entity/product-b";
import ProductFactory from "../../../domain/product/factory/product.factory";
import FindProductUseCase from "./find.product.usecase";

const productTypeA = ProductFactory.create('a', 'Arroz', 29);
const productTypeB = ProductFactory.create('b', 'Bicicleta', 5929);

const input = {
  id: '123'
}

const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(productTypeA)),
    update: jest.fn(),
    findAll: jest.fn()
  };
};

describe("Unit test for finding product use case", () => {
  it("should find a product", async () => {
    const repository = MockRepository();
    const useCase = new FindProductUseCase(repository);

    const output = await useCase.execute(input);

    expect(output.product.id).toBe(productTypeA.id);
    expect(output.product.name).toBe(productTypeA.name);
    expect(output.product.price).toBe(productTypeA.price);
  });
  
  it("should find a product of type b", async () => {
    const repository = MockRepository();
    repository.find.mockReturnValue(Promise.resolve(productTypeB));
    const useCase = new FindProductUseCase(repository);

    const output = await useCase.execute(input);

    expect(output.product.id).toBe(productTypeB.id);
    expect(output.product.name).toBe(productTypeB.name);
    expect(output.product.price).toBe(productTypeB.price);
    expect(await repository.find.mock.results[0].value).toBeInstanceOf(ProductB);
  });
});

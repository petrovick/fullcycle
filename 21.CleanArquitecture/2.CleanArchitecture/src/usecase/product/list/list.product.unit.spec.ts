import ProductFactory from "../../../domain/product/factory/product.factory";
import ListProductUseCase from "./list.product.usecase";

const productTypeA = ProductFactory.create('a', 'Arroz', 29);
const productTypeB = ProductFactory.create('b', 'Bicicleta', 5929);

const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([productTypeA, productTypeB])),
  };
};

describe("Unit test for listing product use case", () => {
  it("should list a product", async () => {
    const repository = MockRepository();
    const useCase = new ListProductUseCase(repository);

    const output = await useCase.execute({});

    expect(output.products.length).toBe(2);
    expect(output.products[0].id).toBe(productTypeA.id);
    expect(output.products[0].name).toBe(productTypeA.name);
    expect(output.products[0].price).toBe(productTypeA.price);
    expect(output.products[1].id).toBe(productTypeB.id);
    expect(output.products[1].name).toBe(productTypeB.name);
    expect(output.products[1].price).toBe(productTypeB.price);
  });
});

import { Sequelize } from "sequelize-typescript";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import UpdateProductUseCase from "./update.product.usecase";
import Product from "../../../domain/product/entity/product";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";

describe("Test update product use case", () => {
    let sequelize: Sequelize;
  
    beforeEach(async () => {
      sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
        logging: false,
        sync: { force: true },
      });
  
      await sequelize.addModels([ProductModel]);
      await sequelize.sync();
    });
  
    afterEach(async () => {
      await sequelize.close();
    });
  
    it("should update a product", async () => {
      const productRepository = new ProductRepository();
      const usecase = new UpdateProductUseCase(productRepository);
  
      const product = new Product('123', 'Arroz', 29);
  
      await productRepository.create(product);
  
      const input = {
        id: "123",
        name: "Arroz Vasconcelos",
        price: 30
      };
  
      const output = {
        id: "123",
        name: "Arroz Vasconcelos",
        price: 30
      };
  
      const result = await usecase.execute(input);
  
      expect(result).toEqual(output);
    });
  });
  
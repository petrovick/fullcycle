import { Sequelize } from "sequelize-typescript";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import ListProductUseCase from "./list.product.usecase";
import Product from "../../../domain/product/entity/product";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";

describe("Test list product use case", () => {
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
  
    it("should list all products", async () => {
      const productRepository = new ProductRepository();
      const usecase = new ListProductUseCase(productRepository);
  
      const product = new Product('123', 'Arroz', 29);
      const product2 = new Product('1234', 'Bicicleta', 5929);
  
      await productRepository.create(product);
      await productRepository.create(product2);
  
      const input = {};
  
      const output = {
        products: [{
          id: "123",
          name: "Arroz",
          price: 29
        }, {
          id: "1234",
          name: "Bicicleta",
          price: 5929
        }]
      };
  
      const result = await usecase.execute(input);
  
      expect(result).toEqual(output);
    });
  });
  
export interface InputFindProductDto {
  id: string;
}

type Product = {
  id: string;
  name: string;
  price: number;
};

export interface OutputFindProductDto {
  product: Product;
}

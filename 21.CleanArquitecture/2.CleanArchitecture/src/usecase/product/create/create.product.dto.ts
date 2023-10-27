
/**
 * SPR - Single Responsability Principle
 * Mesmo que o Input e Output são muito parecidos, 
 *  eles existem por motivos diferentes, 
 *  então faz sentido duplicar o código.
 * 
*/
export interface InputCreateProductDto {
    name: string;
    type: string;
    price: number;
  }
  
  export interface OutputCreateProductDto {
    id: string;
    name: string;
    price: number;
  }
  
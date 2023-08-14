
/**
 * SPR - Single Responsability Principle
 * Mesmo que o Input e Output são muito parecidos, 
 *  eles existem por motivos diferentes, 
 *  então faz sentido duplicar o código.
 * 
*/
export interface InputUpdateProductDto {
    id: string;
    name: string;
    price: number;
  }
  
  export interface OutputUpdateProductDto {
    id: string;
    name: string;
    price: number;
  }
  
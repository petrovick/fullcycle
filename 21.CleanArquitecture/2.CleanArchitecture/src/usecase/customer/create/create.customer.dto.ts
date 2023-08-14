
/**
 * SPR - Single Responsability Principle
 * Mesmo que o Input e Output são muito parecidos, 
 *  eles existem por motivos diferentes, 
 *  então faz sentido duplicar o código.
 * 
*/
export interface InputCreateCustomerDto {
  name: string;
  address: {
    street: string;
    number: number;
    zip: string;
    city: string;
  };
}

export interface OutputCreateCustomerDto {
  id: string;
  name: string;
  address: {
    street: string;
    number: number;
    zip: string;
    city: string;
  };
}

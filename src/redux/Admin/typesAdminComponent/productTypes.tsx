export interface Product {
    _id: string;
    title: string;
    description: string;
    status: "available" | "not available";
    price: number;
    stock: number;
    category: "perfume" | "accesories";
    productImage: string;
  }
  
  export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
  }
  
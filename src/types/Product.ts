export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: Category;
  rating: {
    rate: number;
    count: number;
  };
  isShow: boolean;
};

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type ProductForm = {
  title: string;
  price: number;
  images: string;
  description: string;
  category: string;
  isShow: boolean;
};

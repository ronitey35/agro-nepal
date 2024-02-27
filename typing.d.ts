type Product = {
  id: string;
  title: string;
  category: string;
  description: Description | Description2 | Description3 | Description4;
  stock: number;
  ownerId: string;
  price: number;
  discount: number;
  listedAt: string;
  owner: User;
};

type User = {
  id: string;
  title: string;
  category: string;
  description: Description | Description2 | Description3 | Description4;
  stock: number;
  ownerId: string;
  price: number;
  discount: number;
  listedAt: string;
  owner: Owner;
};

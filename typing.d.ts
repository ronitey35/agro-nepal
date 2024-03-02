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
  image: string | null;
};

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  isGoogleUser: boolean;
  role: string;
  createdAt: string;
  isVerified: boolean;
  hasOptedNotification: boolean;
  state: string;
  district: string;
  area: string;
};

type cartProps = {
  addToCart: () => void;
  removeFromCart: (id: string) => void;
};

interface CartItem {
  id: string;
  quantity: number;
  title: string;
  name: string;
  price: number;
  image: string;
}

export interface Icardprops {
  title: string;
  image?: string;
  desc?: string;
  price?: number;
}

export interface Iproducts {
  data: [];
  isLoading: boolean;
  isPending: boolean;
}

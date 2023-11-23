export interface FilteredCafe {
  id: string;
  createdAt: string;
  name: string;
  img: string;
  email: string;
  password: string;
  phoneNo: string;
  locId: string;
  operatingHour: string;
}

export interface CafeResponse {
  status: string;
  data: {
    cafe: FilteredCafe;
  };
}

export interface CafeLoginResponse {
  status: string;
  token: string;
}

export interface Location {
  id: string;
  location: string;
}

export type Product = {
  id: string;
  createdAt: string;
  name: string;
  img: string;
  productCategory: string;
  desc: string;
  price: number;
  availability: boolean;
};

export interface ProductResponse{
  status:string;
  data:{
      product:Product;
  };
}


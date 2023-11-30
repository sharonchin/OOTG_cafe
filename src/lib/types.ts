import DELIVERY_OPTION from "@/constants/DELIVERY_OPTION";
import STATUS from "@/constants/STATUS";

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
  loc: Location
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

export interface ProductResponse {
  status: string;
  data: {
    product: Product;
  };
}

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  img: string;
  amount: number;
  quantity: number;
  noteToCafe: string;
  cafeId: string;
}

export interface FilteredStudent {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNo: string;
}

export type Order = {
  id: string;
  createdAt: string;
  totalPrice: number;
  intendId?: string;
  studentId: string;
  paymentType: string;
  products: CartItemType[];
  status: STATUS;
  cafeId: string;
  deliveryOption: DELIVERY_OPTION;
  cafe: FilteredCafe;
  student: FilteredStudent;
};

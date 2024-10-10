

export interface IProduct {
    id: string;
    image: string;
    title: string;
    description: string;
    category: string;
    price: number;
}

export interface IProductData {
    products: IProduct[];
    preview: string | null;
    getProduct(productId: string): IProduct;
    addProductBasket(product: IProduct): void;
    deleteProductBasket(productId: string): void;
    getPriceBasket(): void;
    checkValidationOrderInfo(data: Record<keyof TOrderInfo, string>): boolean;
    checkValidationClientInfo(data: Record<keyof TClientInfo, string>): boolean;
}

export interface IBasket {
    items: IProduct[];
    total: number;
}

export interface IOrder {
    address: string;
    payment: string;
    email: string;
    phone: string;
}

export type TOrderInfo = Pick<IOrder, 'address' | 'payment'>; 

export type TClientinfo = Pick<IOrder, 'email'|'phone'>; 
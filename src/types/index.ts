interface IProduct {
    title: string;
    description: string;
    category: string;
    image: string;
    price: number;
    id: string;
}

interface IOrder {
    email: string;
    address: string;
    phone: string;
    payment: string;
    items: string[];
    total: number;
}

interface IModel {
    totalProducts: number;
    gallery: IProduct[];
    basket: Map<string, number>;
    order: IOrder;
    setGallelry(value: IProduct[]): void;
    getGallery(): IProduct[];
    setTotal(value: number): void;
    getTotal(): number;
    getProduct(productId: string): IProduct;
    addProductBasket(productId: string): void;
    removeProductBasket(productId: string): void;
    setOrder(value: IOrder): void;
    getOrder(): IOrder;

}

type TCardGallery = Omit<IProduct, 'description'>;

type TCardBasket = Pick<IProduct, 'title' | 'price' | 'id'>

type TOrderDelivery = Pick<IOrder, 'payment' | 'address'>;

export type TOrderClient = Pick<IOrder, 'email' | 'phone'>;
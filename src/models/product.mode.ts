export interface IProduct {
    id: string;
    name: string;
    description?: string;
    price: number;
    currency: string;
    stock: number;
    category?: string;
    brand?: string;
    images?: string[];
    rating?: number;
    createdAt: Date;
    updatedAt: Date;
}
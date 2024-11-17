import { CategoryDTO } from "./category";

export type ProductDTO = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    description: string;
    categories: CategoryDTO[];
}
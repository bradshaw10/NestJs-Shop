import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{
    products: Product[] = []; 

    insertProduct(title: string, description: string, price: number){
        
        const prodID = Math.random().toString();
        const newProduct = new Product(prodID, title, description, price)   
        this.products.push(newProduct);
        return prodID;
    }

    getProducts(){
        
        return [...this.products]
    }

    getSingleProduct(productId: string){
        const product = this.products.find((prod) => prod.id === productId)

        if(!product){
            throw new NotFoundException('Could not find product');
        }

        return {...product};
    }
}
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
        const product = this.findProduct(productId)[0];

        return {...product};
    }

    updateProduct(productId: string, title: string, desc: string, price: number){
        const product = this.findProduct(productId);

        const [product, index] = this.findProduct(productId);

    }


    private findProduct(id: string): [Product, number]{
        const productIndex = this.products.findIndex(prod => prod.id === id)
        const product = this.products[productIndex];

        if(!product){
            throw new NotFoundException('Could not find product');
        }

        return [product, productIndex];

    }
}
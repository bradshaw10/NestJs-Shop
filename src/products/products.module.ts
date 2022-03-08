import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { MongooseModule } from "@nestjs/mongoose"

@Module({
    imports: [MongooseModule]
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule{}
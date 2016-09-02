import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductFilterPipe }  from './product-filter.pipe';
import { StarComponent }  from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[];
    constructor(private _productService: ProductService) {

    }
    toogleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("ngOnInit from product-list.component.ts ", this);
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void{
        console.log(this, message);
        this.pageTitle = 'Product List: ' + message;
    }
}
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product.ts';

@Injectable()
export class ProductService {
    private _productUrl = '';
    constructor(private _http: Http) { }
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl).map(
            (response: Response) => <IProduct[]>response.json());
        );
    }
}
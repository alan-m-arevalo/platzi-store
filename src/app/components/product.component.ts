import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import {Product} from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy
{
    @Input() product: Product;

    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    addCart(): void
    {
        console.log('Add to cart');
        this.productClicked.emit(this.product.id);
    }

    constructor()
    {
        console.log('1.constructor');
    }

    /*ngOnChanges(changes: SimpleChanges)
    {
        console.log("2. onchanges");
        //console.log(changes);
    }*/

    ngOnInit(): void
    {
        console.log('3. OnInit');
    }

    ngDoCheck(): void
    {
        console.log('4. Do CHECK');
    }

    ngOnDestroy(): void
    {
        console.log('5. on destroy');
    }

}

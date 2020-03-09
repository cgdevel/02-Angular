import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

// export class ProductComponent implements OnChanges, OnInit {
export class ProductComponent implements DoCheck, OnInit, OnDestroy {

    @Input() product: Product;
    @Output() producClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('Constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('ngChanges');
    //     console.log(changes);
    // }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngDoCheck() {
        console.log('doCheck');
    }

    ngOnDestroy() {
        console.log('OnDestroy');
    }

    addCart() {
        console.log('agregado');
        this.producClicked.emit(this.product.id);
    }
}

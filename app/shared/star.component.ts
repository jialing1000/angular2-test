import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(): void {
        console.log('ngOnChanges...', this );
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        console.log('on click...', this );
        this.ratingClicked.emit(`The rating ${this.rating} was clicked! Which is ${this.starWidth}...`);
    }

    ngOnInit(){
        console.log('ngOnInit...', this );
    }

    ngOnDestroy() {
        console.log('OnDestroy...', this );
    }
    ngDoCheck(){
        console.log('ngDoCheck...', this );
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit...', this );
    }
    ngAfterContentChecked(){
        console.log('ngAfterContentChecked...', this );
    }
    ngAfterViewInit(){
        console.log('ngAfterViewInit...', this );
    }
    ngAfterViewChecked(){
        console.log('ngAfterViewChecked...', this );
    }
}
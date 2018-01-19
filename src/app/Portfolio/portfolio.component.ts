import { PageService } from './../page.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
    constructor(private _pageservice: PageService) { }

    ngOnInit() {
        this._pageservice.setpage('portfolio');
     }
}


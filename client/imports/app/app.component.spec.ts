import '../polyfills.spec.ts';

import { APP_BASE_HREF } from '@angular/common';
import { getTestBed, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';
import { spy } from 'sinon';

describe(`AppComponent`, () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent], //declare test component
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: '/'
                }
            ]
        })
            .compileComponents(); //compile html and css
    }));

    afterEach(() => {
        getTestBed().resetTestingModule();
    });


});

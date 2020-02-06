import '../../polyfills.spec.ts';

import { getTestBed, TestBed, async } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';
import { spy } from 'sinon';

describe(`RegisterComponent`, () => {

    function setup() {
        const fixture = TestBed.createComponent(RegisterComponent);
        const app = fixture.debugElement.componentInstance;
        return { fixture, app };
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent], //declare test component
        })
            .compileComponents(); //compile html and css
    }));

    afterEach(() => {
        getTestBed().resetTestingModule();
    });

    it('should have span tag as \'Login\'', async(() => {
        const { app, fixture } = setup();
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        const spantag = compile.querySelector('span');
        expect(spantag.textContent).to.equal('Login');
    }));

});

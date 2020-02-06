import '../../polyfills.spec.ts';

import { getTestBed, TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';
import { spy } from 'sinon';

describe(`LoginComponent`, () => {

    function setup() {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        return { fixture, app };
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent], //declare test component
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

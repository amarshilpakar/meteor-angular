import '../../polyfills.spec.ts';

import { getTestBed, TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';
import { spy } from 'sinon';

describe(`HomeComponent`, () => {

    function setup() {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        return { fixture, app };
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent], //declare test component
        })
            .compileComponents(); //compile html and css
    }));

    afterEach(() => {
        getTestBed().resetTestingModule();
    });

    it('should have span tag as \'Home\'', async(() => {
        const { app, fixture } = setup();
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        const spantag = compile.querySelector('span');
        expect(spantag.textContent).to.equal('Home');
    }));

    it('should have h3 tag as \'Welcome to Dashboard\'', async(() => {
        const { app, fixture } = setup();
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        const spantag = compile.querySelector('span');
        expect(spantag.textContent).to.equal('Welcome to Dashboard');
    }));

    it('should have a tag as \'Logout\'', async(() => {
        const { app, fixture } = setup();
        fixture.detectChanges();
        const compile = fixture.debugElement.nativeElement;
        const atag = compile.querySelector('a');
        expect(atag.textContent).to.equal('Logout');
    }));

});

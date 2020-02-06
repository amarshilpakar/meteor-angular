import '../../polyfills.spec.ts';

import { getTestBed, TestBed, async } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';
import { spy } from 'sinon';

describe(`RegisterComponent`, () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent], //declare test component
        })
            .compileComponents(); //compile html and css
    }));

    afterEach(() => {
        getTestBed().resetTestingModule();
    });

    it('should display `a` element', () => {
        const fixture = TestBed.createComponent(RegisterComponent);

        fixture.detectChanges();

        const a = fixture.debugElement.query(By.css('a'));

        expect(a.nativeElement.textContent).to.equal('Add');
    });

    it('should render styles correctly', () => {
        const fixture = TestBed.createComponent(RegisterComponent);

        fixture.detectChanges();

        const addBtn = fixture.debugElement.query(By.css('.addBtn'));

        const {
            color
        } = getComputedStyle(addBtn.nativeElement);

        expect(color).to.equal('rgb(0, 255, 0)');
    })

});

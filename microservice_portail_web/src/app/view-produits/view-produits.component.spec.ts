import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProduitsComponent } from './view-produits.component';

describe('ViewProduitsComponent', () => {
  let component: ViewProduitsComponent;
  let fixture: ComponentFixture<ViewProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

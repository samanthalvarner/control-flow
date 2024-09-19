import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForBlocksComponent } from './for-blocks.component';

describe('ForBlocksComponent', () => {
  let component: ForBlocksComponent;
  let fixture: ComponentFixture<ForBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

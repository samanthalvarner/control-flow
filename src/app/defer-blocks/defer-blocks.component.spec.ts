import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferBlocksComponent } from './defer-blocks.component';

describe('DeferBlocksComponent', () => {
  let component: DeferBlocksComponent;
  let fixture: ComponentFixture<DeferBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

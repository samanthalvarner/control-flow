import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfBlocksComponent } from './if-blocks.component';

describe('IfBlocksComponent', () => {
  let component: IfBlocksComponent;
  let fixture: ComponentFixture<IfBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchBlocksComponent } from './switch-blocks.component';

describe('SwitchBlocksComponent', () => {
  let component: SwitchBlocksComponent;
  let fixture: ComponentFixture<SwitchBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

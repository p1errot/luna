import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaDesignSystemComponent } from './luna-design-system.component';

describe('LunaDesignSystemComponent', () => {
  let component: LunaDesignSystemComponent;
  let fixture: ComponentFixture<LunaDesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunaDesignSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunaDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

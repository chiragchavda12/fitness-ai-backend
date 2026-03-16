import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTrainer } from './ai-trainer';

describe('AiTrainer', () => {
  let component: AiTrainer;
  let fixture: ComponentFixture<AiTrainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTrainer],
    }).compileComponents();

    fixture = TestBed.createComponent(AiTrainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

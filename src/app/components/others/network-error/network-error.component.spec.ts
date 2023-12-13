import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkErrorComponent } from './network-error.component';

describe('NetworkErrorComponent', () => {
  let component: NetworkErrorComponent;
  let fixture: ComponentFixture<NetworkErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkErrorComponent]
    });
    fixture = TestBed.createComponent(NetworkErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

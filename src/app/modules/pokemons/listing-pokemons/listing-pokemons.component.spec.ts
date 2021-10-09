import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPokemonsComponent } from './listing-pokemons.component';

describe('ListingPokemonsComponent', () => {
  let component: ListingPokemonsComponent;
  let fixture: ComponentFixture<ListingPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

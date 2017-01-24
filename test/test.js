import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { nextIdToCard } from '../src/reducers/current';

describe('<App />', function() {
  it('allows us to set props', () => {
    const initialState = 0;
    const action = {
      type: 'ADD_CARD',
      id: 1
    };
    const nextState = nextIdToCard(initialState, action);

    expect(nextState).to.equal(1);
  });
})

import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import Study from '../src/containers/study';
import Categories from '../src/containers/categories';
import CardInput from '../src/components/card-input';
import mockstore from '../src/mockstore';



describe('<Study />', () => {
  const wrapper = mount(<Provider store={mockstore}><Study /></Provider>);
  it('should toggle answer', () => {

      expect(wrapper.find('.card__question')).to.have.length(0);
      wrapper.find('.categories__list__item').first().simulate('click');
      expect(wrapper.find('.card__question')).to.have.length(1);
      wrapper.find('.card__question').simulate('click');
      expect(wrapper.find('.card__answer')).to.have.length(1);
  });

  it('should show next question', () => {
    expect(mockstore.getState().studyView.id).to.equal(0);
    wrapper.find('.card__question__nav').first().simulate('click');
    expect(mockstore.getState().studyView.id).to.not.equal(1);
  });
});


describe('<Categories />', () => {
  const wrapper = mount(<Provider store={mockstore}><Categories /></Provider>);
  it('should show list of questions', () => {
    expect(wrapper.find('.categories__list__item'));
    wrapper.find('.categories__list__item').first().simulate('click');
    expect(wrapper.find('.questions__list__item')).to.have.length(3);
    wrapper.find('.categories__list__item--active').simulate('click');
    expect(wrapper.find('.questions__list__item')).to.have.length(0);
  });
});

describe('<CardInput />', () => {
  it('shouldnt upload question when fields are empty', () => {
    const wrapper = mount(<Provider store={mockstore}><CardInput /></Provider>);
    expect(mockstore.getState().cards.nextIdToCard).to.equal(0);
    expect(mockstore.getState().cards.cards).to.have.length(3);
    wrapper.find('.card-form__button').simulate('submit');
    expect(mockstore.getState().cards.nextIdToCard).to.equal(0);
    expect(mockstore.getState().cards.cards).to.have.length(3);
  });
});

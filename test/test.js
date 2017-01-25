import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import Study from '../src/containers/study';
import Categories from '../src/containers/categories';
import CardInput from '../src/components/card-input';
import store from '../src/store';



describe('<Study />', () => {
  const wrapper = mount(<Provider store={store}><Study /></Provider>);
  it('should toggle answer', () => {

      expect(wrapper.find('.card__answer')).to.have.length(0);
      wrapper.find('.card').simulate('click');
      expect(wrapper.find('.card__answer')).to.have.length(1);
      wrapper.find('.card').simulate('click');
      expect(wrapper.find('.card__answer')).to.have.length(0);
  });

  it('should show next question', () => {
    console.log(store.getState().currentId);
    expect(store.getState().currentId).to.equal(0);
    wrapper.find('.fontawesome-arrow-right').simulate('click');
    expect(store.getState().currentId).to.equal(1);
    wrapper.find('.fontawesome-arrow-right').simulate('click');
    expect(store.getState().currentId).to.equal(0);
  });
});


describe('<Categories />', () => {
  const wrapper = mount(<Provider store={store}><Categories /></Provider>);
  it('should show list of questions', () => {
    wrapper.find('.categories__list__item').simulate('click');
    expect(wrapper.find('.questions__list__item')).to.have.length(1);
    wrapper.find('.categories__list__item').simulate('click');
    expect(wrapper.find('.questions__list__item')).to.have.length(0);
  });
});

describe('<CardInput />', () => {
  it('should upload question', () => {
    const wrapper = mount(<Provider store={store}><CardInput /></Provider>);
    expect(store.getState().nextIdToCard).to.equal(0);
    expect(store.getState().cards).to.have.length(2);
    wrapper.find('form').simulate('submit');
    expect(store.getState().nextIdToCard).to.equal(1);
    expect(store.getState().cards).to.have.length(3);

  });
});

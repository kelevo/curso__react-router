import React, { useState, useEffect } from 'react';
// Necesario para react-redux
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
      <React.Fragment>
        <Header />
        <Search isHome />
          {myList.length > 0 &&
            <Categories title="Mi Lista">
              <Carousel>
                {myList.map(item =>
                  <CarouselItem
                    key={item.id}
                    {...item}
                    isList
                  />
                )}
              </Carousel>
            </Categories>
          }
          <Categories title="Tendencias">
            <Carousel>
              {trends.map(item =>
                <CarouselItem key={item.id} {...item} />
              )}
            </Carousel>
          </Categories>
          <Categories title="Originales de Platzi Video">
            <Carousel>
              {originals.map(item =>
                <CarouselItem key={item.id} {...item} />
              )}
            </Carousel>
          </Categories>
      </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    // Solo elementos que necesito
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// connect() requiere dos parametros (props, actions)
export default connect(mapStateToProps, null)(Home);
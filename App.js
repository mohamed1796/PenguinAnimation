import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Slide from './src/components/Slide';
import Slider from './src/components/Slider';

const slides = [
  {
    color: '#F2A1AD',
    title: 'Dessert Recipes',
    description:
      'Hot or cold, our dessert recipes can turn an average meal into a memorable event',
    picture: require('./src/assets/1.png'),
  },
  {
    color: '#0090D6',
    title: 'Healthy Foods',
    description:
      'Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs',
    picture: require('./src/assets/5.png'),
  },
  {
    color: '#69C743',
    title: 'Easy Meal Ideas',
    description:
      'explore recipes by food type, preparation method, cuisine, country and more',
    picture: require('./src/assets/4.png'),
  },
  {
    color: '#FB3A4D',
    title: '10000+ Recipes',
    description:
      'Browse thousands of curated recipes from top chefs, each with detailled cooking instructions',
    picture: require('./src/assets/2.png'),
  },
  {
    color: '#F2AD62',
    title: 'Video Tutorials',
    description:
      'Browse our best themed recipes, cooking tips, and how-to food video & photos',
    picture: require('./src/assets/3.png'),
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];

  console.log('App index:  ', index);
  return (
    <Slider
      key={index}
      index={index}
      length={slides.length}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}>
      <Slide slide={slides[index]}></Slide>
    </Slider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import PropTypes from 'prop-types';

import Color from 'color';
import Svg, {RadialGradient, Defs, Rect, Stop} from 'react-native-svg';

const {width, height} = Dimensions.get('screen');
const SIZE = width - 75;

const Slide = ({slide: {picture, color, title, description}}) => {
  const lighterColor = Color(color).lighten(0.8).toString();
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        {picture && <Image source={picture} style={styles.image} />}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 75,
    paddingTop: 150,
    alignItems: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    // fontFamily: "SFProDisplay-Bold",
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    // fontFamily: "SFProDisplay-Regular",
  },
});

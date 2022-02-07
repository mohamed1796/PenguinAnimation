import React, {ReactElement, ReactNode} from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import MaskedView from '@react-native-community/masked-view';
import {clamp, vec, Vector} from 'react-native-redash';

import {SlideProps} from './Slide';
import propTypes from 'prop-types';

export const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
export const MIN_LEDGE = 50;
export const MARGIN_HIGHT = MIN_LEDGE + 50;

const AnimatedPath = Animated.createAnimatedComponent(Path);

const vec2 = (x, y) => {
  'worklet';
  return {x: x, y: y};
};

const curve = (c1, c2, to) => {
  'worklet';
  return `C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y}`;
};

export var Side;
(Side => {
  Side[(Side['UP'] = 0)] = 'UP';
  Side[(Side['DOWN'] = 1)] = 'DOWN';
  Side[(Side['NONE'] = 2)] = 'NONE';
})(Side || (Side = {}));

const Wave = ({side, position, children, isTransitioning}) => {
  const animatedProps = useAnimatedProps(() => {
    const R = clamp(position.y.value, MARGIN_HIGHT - MIN_LEDGE, WIDTH / 4); // Radius
    const WIDE = 0;
    const stepY = R / 2;
    const stepX = Math.max(position.y.value, MARGIN_HIGHT - MIN_LEDGE);

    const C = R * 0.55228474983079; // source: https://spencermortensen.com/articles/bezier-circle/

    // vector points
    const p1 = vec2(position.x.value - 2 * stepX, position.y.value);
    const p2 = vec2(p1.x + WIDE + stepX, p1.y + stepY);
    const p3 = vec2(p2.x + WIDE + stepX, p2.y + stepY);
    const p4 = vec2(p3.x + WIDE + stepX, p3.y - stepY);
    const p5 = vec2(p4.x + WIDE + stepX, p4.y - stepY);

    /** control points */
    // point 2
    const c11 = vec2(p1.x + C, p1.y);
    const c12 = vec2(p2.x, p2.y);

    // point 3
    const c22 = vec2(p2.x, p2.y);
    const c23 = vec2(p3.x - C, p3.y);

    // point 4
    const c33 = vec2(p3.x + C, p3.y);
    const c34 = vec2(p4.x, p4.y);

    // point 5
    const c44 = vec2(p4.x, p4.y);
    const c45 = vec2(p5.x - C, p5.y);

    return {
      d: [
        `M 0 0`,
        `V ${p1.y}`,
        `H ${p1.x}`,
        curve(c11, c12, p2),
        curve(c22, c23, p3),
        curve(c33, c34, p4),
        curve(c44, c45, p5),
        `H ${WIDTH}`,
        `V 0`,
        `Z`,
      ].join(' '),
    };
  });

  // d: [
  //   `M 0 0`,
  //   `V ${p1.y}`,
  //   `H ${p1.x}`,
  //   `L ${p2.x} ${p2.y}`,
  //   `L ${p3.x} ${p3.y}`,
  //   `L ${p4.x} ${p4.y}`,
  //   `L ${p5.x} ${p5.y}`,
  //   `H ${WIDTH}`,
  //   `V 0`,
  //   `Z`,
  // ].join(' '),

  //   d: [`M 0 0`, `H ${WIDTH}`, `V ${position.y.value}`, `H 0`, `Z`].join(' '),

  // d: [`M 0 0`, `H ${HEIGHT}`, `V ${position.y.value}`, `H 0`, `Z`].join(
  //   ' ',
  // ),

  // d: [
  //   `M 0 0`,
  //   `H ${p1.x}`,
  //   `V ${p1.y}`,
  //   `L ${p2.x} ${p2.y}`,
  //   `L ${p3.x} ${p3.y}`,
  //   `L ${p4.x} ${p4.y}`,
  //   `L ${p5.x} ${p5.y}`,
  //   `H ${WIDTH}`,
  //   `Z`,
  // ].join(' '),

  const maskElement = (
    <Svg
      style={[
        StyleSheet.absoluteFill,
        {
          transform: [{rotateX: side === Side.DOWN ? '180deg' : '0deg'}],
        },
      ]}>
      <AnimatedPath
        fill={Platform.OS === 'android' ? children.props.slide.color : 'black'}
        animatedProps={animatedProps}
      />
    </Svg>
  );
  return (
    <MaskedView style={StyleSheet.absoluteFill} maskElement={maskElement}>
      {children}
    </MaskedView>
  );
};

Wave.propType = {
  side: Side,
  position: propTypes.arrayOf(propTypes.number), // Vector [number]
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  // isTransitioning: Animated.SharedValue
};

export default Wave;

import React, {ReactElement, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  gestureHandlerRootHOC,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {snapPoint, useVector} from 'react-native-redash';

import Wave, {HEIGHT, MARGIN_HIGHT, MIN_LEDGE, Side, WIDTH} from './Wave';
import Button from './Button';
import {SlideProps} from './Slide';

const Slider = gestureHandlerRootHOC(
  ({index, children: current, prev, next, setIndex, length}) => {
    // const zIndex = useSharedValue(0);
    const bottom = useVector();
    const isBelow = useSharedValue(true);

    const hasPerv = !!prev;
    const hasNext = !!next;
    const isTransitioningUp = useSharedValue(false);
    const isTransitioningDown = useSharedValue(false);
    const activeSide = useSharedValue(Side.NON);

    // initial position of the up curve
    const up = useVector(WIDTH / 2, 0);

    // initial position of the down curve
    const down = useVector(WIDTH / 2, 0);

    const updateIndex = index => {
      console.log('index', index);
      if (index > 0 && index < length) {
        setIndex(index);
      }
    };

    const onGestureEvent = useAnimatedGestureHandler({
      onStart: ({y}) => {
        if (y < WIDTH - MARGIN_HIGHT) {
          activeSide.value = Side.UP;
        } else if (y > MARGIN_HIGHT) {
          activeSide.value = Side.DOWN;
        } else {
          activeSide.value = Side.NON;
        }
      },
      onActive: ({x, y}) => {
        if (activeSide.value === Side.UP) {
          up.x.value = x;
          up.y.value = y;
        } else if (activeSide.value === Side.DOWN) {
          down.y.value = HEIGHT - y;
          down.x.value = x;
        }
      },
      onEnd: ({y, velocityX, velocityY}) => {
        if (activeSide.value === Side.UP) {
          const snapPoints = [MIN_LEDGE, HEIGHT];
          const dest = snapPoint(y, velocityY, snapPoints);
          isTransitioningUp.value = dest === HEIGHT;
          // up.x.value = withSpring(WIDTH / 2);
          up.y.value = withSpring(
            dest,
            {
              velocity: velocityY,
              overshootClamping: isTransitioningUp.value,
              restSpeedThreshold: isTransitioningUp.value ? 100 : 0.01,
              restDisplacementThreshold: isTransitioningUp.value ? 100 : 0.01,
            },
            () => {
              if (isTransitioningUp.value) {
                runOnJS(updateIndex)(index - 1);
              }
            },
          );
        } else if (activeSide.value === Side.DOWN) {
          const snapPoints = [HEIGHT - MIN_LEDGE, 0];
          const dest = snapPoint(y, velocityY, snapPoints);
          isTransitioningDown.value = dest === 0;
          // down.x.value = withSpring(WIDTH / 2);
          down.y.value = withSpring(
            HEIGHT - dest,
            {
              velocity: velocityY,
              overshootClamping: isTransitioningDown.value,
              restSpeedThreshold: isTransitioningUp.value ? 100 : 0.01,
              restDisplacementThreshold: isTransitioningUp.value ? 100 : 0.01,
            },
            () => {
              if (isTransitioningDown.value) {
                runOnJS(updateIndex)(index + 1);
              }
            },
          );
        }
      },
    });

    //   const onGestureEvent = useAnimatedGestureHandler({
    //     onStart: ({x, y}) => {
    //       console.log(x);
    //       console.log(y);
    //       zIndex.value = 100;
    //     },
    //     onActive: ({x, y}) => {
    //       bottom.x.value = x;
    //       bottom.y.value = y;
    //     },
    //     onEnd: ({velocityX, velocityY, y}) => {
    //       let snapPoints;

    //       if (isBelow.value) snapPoints = [HEIGHT - MARGIN_WIDTH];
    //       else snapPoints = [MARGIN_WIDTH];

    //       const dest = snapPoint(y, velocityY, snapPoints);

    //       bottom.y.value = withSpring(HEIGHT - dest, {velocity: velocityY}, () => {
    //         console.log(bottom);

    //         if (isBelow.value) isBelow.value = false;
    //         else isBelow.value = true;
    //       });
    //     },
    //   });

    useEffect(() => {
      // bottom.y.value = withSpring(HEIGHT - MARGIN_WIDTH);
      up.y.value = withSpring(MARGIN_HIGHT - MIN_LEDGE);
      down.y.value = withSpring(MARGIN_HIGHT - MIN_LEDGE);
    }, []);

    const upStyle = useAnimatedStyle(() => ({
      zIndex: activeSide.value === Side.UP ? 100 : 0,
    }));
    return (
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={StyleSheet.absoluteFill}>
          {current}
          {prev && (
            <Animated.View style={[StyleSheet.absoluteFill, upStyle]}>
              <Wave side={Side.UP} position={up}>
                {prev}
              </Wave>
            </Animated.View>
          )}
          {next && (
            <Animated.View style={[StyleSheet.absoluteFill]}>
              <Wave side={Side.DOWN} position={down}>
                {next}
              </Wave>
            </Animated.View>
          )}
        </Animated.View>
      </PanGestureHandler>
    );
  },
);

export default Slider;

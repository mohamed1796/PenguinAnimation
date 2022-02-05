// import React from 'react';
// import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

// import Carousel from 'react-native-snap-carousel';

// const {height, width} = Dimensions.get('window');

// const CarouselItem = props => {
//   const {FileName, GalleryType} = props.details;

//   return (
//     <View style={{width: '100%'}}>
//       {
//         <Image
//           source={{uri: FileName}}
//           style={[
//             {
//               width: '100%',
//               minHeight: 120,
//               maxHeight: 160,
//               resizeMode: 'contain',
//             },
//           ]}
//         />
//       }
//     </View>
//   );
// };

// export default function Shops() {
//   const products = [
//     {
//       id: 1,
//       name: 'Apple iPhone 12 Pro Max',
//       FileName: 'https://uwave.me/tendv2/images/products/iphone12promax.jpg',
//       stock: 5,
//       price: 4399.99,
//       ratings: 3.5,
//     },
//     {
//       id: 2,
//       name: 'Apple IMac',
//       FileName: 'https://uwave.me/tendv2/images/products/imac.jpg',
//       stock: 6,
//       ratings: 5,
//     },
//     {
//       id: 3,
//       name: 'Apple Watch',
//       FileName: 'https://uwave.me/tendv2/images/products/watch.jpg',
//       stock: 6,
//       price: '600.99 - 782.99',
//       ratings: 5,
//     },
//     {
//       id: 4,
//       name: 'Apple iPad Pro',
//       FileName: 'https://uwave.me/tendv2/images/products/ipad.jpg',
//       stock: 6,
//       price: '1650.75',
//       ratings: 5,
//     },
//   ];

//   return (
//     <View>
//       <Carousel
//         ref={ref => {
//           this.carousel = ref;
//         }}
//         data={products}
//         renderItem={({item}) => <CarouselItem details={item} />}
//         sliderWidth={width}
//         itemWidth={Math.round((75 * width) / 100)}
//         enableMomentum={true}
//         activeSlideAlignment={'start'}
//         containerCustomStyle={{marginTop: 15, overflow: 'visible'}}
//         contentContainerCustomStyle={{paddingVertical: 10}}
//         activeAnimationType={'spring'}
//         activeAnimationOptions={{
//           friction: 4,
//           tension: 40,
//         }}
//         // style={{ minHeight: 220, maxHeight: 260 }}
//       />
//     </View>
//   );
// }

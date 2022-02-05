// import React from 'react';
// import {
//   Dimensions,
//   FlatList,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import Carousel from 'react-native-snap-carousel';
// import Penguin from '../assets/penguin.svg';

// const {height, width} = Dimensions.get('window');

// const CarouselItem = props => {
//   const {details, navigation} = props;
//   const {icon, title, link} = props.details;

//   const navigateTo = () => {
//     if (link && navigation) navigation.navigate(link);
//   };

//   return (
//     <View>
//       <TouchableOpacity style={{alignItems: 'center'}} onPress={navigateTo}>
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: 200,
//             width: 200,
//             position: 'relative',
//             borderWidth: 1,
//             borderColor: '#FFC52C',
//             borderRadius: 300,
//           }}>
//           {/* <Image
//                         source={{ uri: FileName }}
//                         style={[tailwind('w-full'), { minHeight: 320, maxHeight: 360, resizeMode: 'contain' }]}
//                     /> */}
//           <Text style={{color: '#FFC52C', fontSize: 120, fontWeight: '700'}}>
//             {icon}
//           </Text>
//         </View>
//         <Text
//           style={{
//             marginTop: 20,
//             color: '#FF6B00',
//             fontSize: 20,
//             fontWeight: '400',
//           }}>
//           {title}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default function Landing({navigation}) {
//   const LandingNavigations = [
//     {icon: 'a', title: 'React A Gift', link: 'Shops'},
//     {icon: 'G', title: 'Send A Gift'},
//   ];

//   return (
//     <View style={{flex: 1, backgroundColor: '#222020', alignItems: 'center'}}>
//       <Carousel
//         ref={ref => {
//           this.carousel = ref;
//         }}
//         data={LandingNavigations}
//         renderItem={({item}) => (
//           <CarouselItem details={item} navigation={navigation} />
//         )}
//         sliderWidth={width}
//         itemWidth={Math.round((75 * width) / 100)}
//         enableMomentum={true}
//         scrollEnabled
//         activeSlideAlignment={'start'}
//         containerCustomStyle={{marginTop: 15, overflow: 'visible'}}
//         contentContainerCustomStyle={{paddingVertical: 10}}
//         activeAnimationType={'spring'}
//         activeAnimationOptions={{
//           friction: 4,
//           tension: 40,
//         }}
//         // style={{ width: '100%', minHeight: 250, maxHeight: 360 }}
//       />

//       <TouchableOpacity
//         style={{marginVertical: 4, paddingHorizontal: 16, paddingVertical: 10}}
//         onPress={() => navigation.navigate('Reels')}>
//         {/* <Text style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}>Reels</Text> */}
//         <View>
//           <Penguin height={180} width={180} />
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

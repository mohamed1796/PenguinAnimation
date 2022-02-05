// import React, {useEffect, useRef, useState} from 'react';
// import {
//   Dimensions,
//   FlatList,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import Video from 'react-native-video';
// import {SwiperFlatList} from 'react-native-swiper-flatlist';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import moment from 'moment';

// import tailwind from 'tailwind-rn';

// const {height, width} = Dimensions.get('window');

// const ReelCard = props => {
//   const {
//     Desc_En,
//     subtitle,
//     FileName,
//     color,
//     profilePic,
//     author,
//     Bus_ID,
//     AddedOn,
//     totalLikes,
//     viewers,
//     comments,
//   } = props.details;
//   let {index, currIndex, videoRef} = props;
//   const insets = useSafeAreaInsets();

//   return (
//     <View style={[{...styles.fullHeight}, tailwind(`relative bg-gray-500`)]}>
//       <Video
//         source={{uri: `${FileName}`}}
//         ref={videoRef}
//         onBuffer={this.onBuffer}
//         onError={this.videoError}
//         style={[tailwind('absolute top-0 left-0 right-0'), {height}]}
//         resizeMode="cover"
//         repeat
//         // muted={true}
//         paused={currIndex !== index}
//       />

//       <Text
//         style={[
//           styles.reelText,
//           tailwind('font-extrabold text-xl ml-2'),
//           {marginTop: 44 + insets.top},
//         ]}>
//         {Desc_En}
//       </Text>
//       {/* <Text style={[styles.reelText, tailwind('font-medium text-base ml-2')]}>{subtitle}</Text> */}

//       <View
//         style={[tailwind('absolute right-3'), {bottom: 80 + insets.bottom}]}>
//         <View style={tailwind('flex-row')}>
//           <View>
//             <Text
//               style={[
//                 styles.reelText,
//                 tailwind('text-right font-extrabold'),
//                 {fontSize: 16},
//               ]}>
//               Muhammed Ali
//             </Text>
//             <Text
//               style={[
//                 styles.reelText,
//                 tailwind('text-right font-medium'),
//                 {fontSize: 16},
//               ]}>
//               {Bus_ID}
//             </Text>
//             <Text style={[styles.reelText, tailwind('text-right')]}>
//               {moment(parseInt(AddedOn)).format('do MMM YYYY')}
//             </Text>
//           </View>
//           <View>
//             <Image
//               source={{
//                 uri: 'https://uwave.me/tendv2/images/pictures/faces/4s.png',
//               }}
//               style={[{height: 45, width: 45}, tailwind('rounded-3xl ml-1.5')]}
//             />
//           </View>
//         </View>
//         <View style={tailwind('flex-row justify-end mt-4')}>
//           <View style={tailwind('ml-4 flex-row items-center')}>
//             {/* <Icon name='heart' color="#fff" size={15} /> */}
//             <Text style={[styles.reelText, tailwind('text-right ml-1.5')]}>
//               {totalLikes || 0}
//             </Text>
//           </View>
//           <View style={tailwind('ml-4 flex-row items-center')}>
//             {/* <Icon name='eye' color="#fff" size={15} /> */}
//             <Text style={[styles.reelText, tailwind('text-right ml-1.5')]}>
//               1.1k
//             </Text>
//           </View>
//           <View style={tailwind('ml-4 flex-row items-center')}>
//             {/* <Icon name='comment' color="#fff" size={15} /> */}
//             <Text style={[styles.reelText, tailwind('text-right ml-1.5')]}>
//               263
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default function Reels({navigation}) {
//   const insets = useSafeAreaInsets();
//   const videoRef = useRef(null);
//   const [currIndex, setCurrIndex] = useState(0);
//   const [contextId, setContextId] = useState(null);

//   const reels = [
//     {
//       Desc_En: 'Somewhat of a Budget',
//       FileName:
//         'https://tendeal.qa:30300/uploads/reels/121343017-319336883389134-2843872985197103861-n-1643220143886.mp4',
//       Bus_ID: 1,
//       AddedOn: 1643644231,
//       totalLikes: 40,
//     },
//     {
//       Desc_En: 'Fairly Fit in a Small',
//       FileName:
//         'https://tendeal.qa:30300/uploads/reels/253970949-1054720035302005-326180458186379855-n-1636338793498.mp4',
//       Bus_ID: 1,
//       AddedOn: 1643655031,
//       totalLikes: 101,
//     },
//   ];

//   const setContextReel = reelData => {
//     setCurrIndex(reelData);
//     setContextId(reels[reelData].ID);
//   };

//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       console.log('Back To Reels Screen');
//       // setAudioStatus(false);

//       // new code add to pause video from ref
//       // videoRef.current.pauseVideo();
//       setCurrIndex(0);
//       // videoRef.current.setNativeProps({ paused: true });
//     });

//     return unsubscribe;
//   }, []);

//   useEffect(() => {
//     const unsubscribe = navigation.addListener('blur', () => {
//       console.log('Leaving Reels Screen');
//       // setAudioStatus(false);

//       // new code add to pause video from ref
//       // videoRef.current.pauseVideo();
//       setCurrIndex(-1);
//       // videoRef.current.setNativeProps({ paused: true });
//     });

//     return unsubscribe;
//   }, []);

//   useEffect(() => {
//     if (!!videoRef.current) {
//       console.log(videoRef.current.props);
//       videoRef.current.seek(0);
//     }
//   }, [currIndex]);

//   return (
//     <View style={tailwind('relative')}>
//       {/* <NavHeader style={[tailwind('absolute z-10'), { postion: 'absolute', top: insets.top, zIndex: 100 }]} backgroundColor='transparent' showSearch={false} buttonStyle={{ color: '#fff' }} /> */}
//       <SwiperFlatList
//         // snapToAlignment={'top'}
//         style={styles.fullScreen}
//         // viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
//         // pagingEnabled={true}
//         // decelerationRate={'fast'}
//         data={reels}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item, index}) => (
//           <ReelCard
//             details={item}
//             index={index}
//             currIndex={currIndex}
//             videoRef={videoRef}
//           />
//         )}
//         vertical={true}
//         onChangeIndex={({index}) => setContextReel(index)}
//       />
//     </View>
//   );
// }

// let styles = StyleSheet.create({
//   fullScreen: {
//     width,
//     height,
//   },
//   fullHeight: {
//     width: '100%',
//     height,
//   },
//   reelText: {
//     color: '#fff',
//   },
// });

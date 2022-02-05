// import React, {useRef, useState} from 'react';
// import {
//   FlatList,
//   Keyboard,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {API, graphqlOperation} from 'aws-amplify';
// import {DataStore} from '@aws-amplify/datastore';

// import tailwind from 'tailwind-rn';
// import PhoneInput from 'react-native-phone-number-input';
// import moment from 'moment';

// // import { listPosts } from './src/graphql/queries';
// import {Users} from '../models';

// const PostItem = props => {
//   const {blog, createdAt, title} = props.details;

//   console.log(props.details);

//   return (
//     <View
//       style={{
//         marginVertical: 8,
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         backgroundColor: '#fafafa',
//         borderRadius: 12,
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       }}>
//       <Text style={tailwind('text-base font-medium')}>Post: {title}</Text>
//       <Text>Blog Name: {blog.name}</Text>
//       <Text>{moment(createdAt).format('DD MMM YYYY')}</Text>
//     </View>
//   );
// };

// const UserItem = props => {
//   const {firstname, lastname, email} = props.details;

//   console.log(props.details);

//   return (
//     <View
//       style={{
//         marginVertical: 8,
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         backgroundColor: '#fafafa',
//         borderRadius: 12,
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       }}>
//       <Text style={tailwind('text-base font-medium')}>
//         Name: {firstname} {lastname}
//       </Text>
//       <Text>Blog Name: {email}</Text>
//       <Text>{moment().format('DD MMM YYYY')}</Text>
//     </View>
//   );
// };

// export default function Login({navigation}) {
//   const [isFeed, setIsFeed] = useState(false);
//   const phoneInput = useRef(null);
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');

//   const [posts, setPosts] = useState([]);

//   async function fetchPosts() {
//     try {
//       // const postData = await API.graphql(graphqlOperation(listPosts));
//       // const _posts = postData.data.listPosts.items;
//       // console.log(_posts);

//       const models = await DataStore.query(Users);
//       console.log(models);
//       setPosts(models);
//       setIsFeed(true);
//     } catch (err) {
//       console.log(`error fetching posts. ${err}`);
//     }
//   }

//   async function addUser() {
//     try {
//       // const postData = await API.graphql(graphqlOperation(listPosts));
//       // const _posts = postData.data.listPosts.items;
//       // console.log(_posts);
//       // setPosts(_posts);
//       await DataStore.save(
//         new Users({
//           firstname: 'Lorem ipsum dolor sit amet',
//           lastname: 'Lorem ipsum dolor sit amet',
//           username: 'Lorem ipsum dolor sit amet',
//           password: 'Lorem ipsum dolor sit amet',
//           email: 'Lorem ipsum dolor sit amet',
//           mobile: 'Lorem ipsum dolor sit amet',
//           dateOfBirth: 'Lorem ipsum dolor sit amet',
//         }),
//       );
//       setIsFeed(true);
//     } catch (err) {
//       console.log(`error fetching posts. ${err}`);
//     }
//   }

//   const submit_user = () => {
//     console.log('Submitted!');
//     fetchPosts();
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//       <SafeAreaView>
//         {!isFeed ? (
//           <ScrollView contentInsetAdjustmentBehavior="automatic">
//             <View style={tailwind('h-6')} />
//             <View>
//               <View style={tailwind('my-4 items-center')}>
//                 <Text style={tailwind('text-lg font-semibold')}>Login</Text>
//               </View>

//               <PhoneInput
//                 ref={phoneInput}
//                 defaultCode="QA"
//                 layout="first"
//                 onChangeText={text => setPhone(text)}
//                 autoFocus
//                 containerStyle={tailwind(
//                   'border border-gray-300 rounded-3xl my-2 self-center',
//                 )}
//                 textContainerStyle={tailwind('rounded-r-3xl')}
//               />

//               <TextInput
//                 placeholder="Password"
//                 onChangeText={text => setPassword(text)}
//                 style={[
//                   tailwind(
//                     'border border-gray-300 my-2 mx-9 pt-1 pb-3 px-4 rounded-3xl text-base h-12',
//                   ),
//                   {backgroundColor: '#F8F9F9'},
//                 ]}
//                 autoCapitalize="none"
//                 autoCompleteType="password"
//                 textContentType="password"
//                 secureTextEntry={true}
//               />

//               <View style={tailwind('h-6')} />

//               <TouchableOpacity
//                 style={[
//                   tailwind(
//                     'border border-red-200 my-2 mx-9 py-3 px-4 rounded-3xl h-12 items-center justify-center',
//                   ),
//                   {backgroundColor: '#D17902'},
//                 ]}
//                 onPress={() => navigation.navigate('Landing')}>
//                 <Text style={tailwind('text-white text-base font-semibold')}>
//                   Sign In
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[
//                   tailwind(
//                     'border border-red-200 my-2 mx-9 py-3 px-4 rounded-3xl h-12 items-center justify-center',
//                   ),
//                   {backgroundColor: '#D17902'},
//                 ]}
//                 onPress={submit_user}>
//                 <Text style={tailwind('text-white text-base font-semibold')}>
//                   Reveal Users
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[
//                   tailwind(
//                     'border border-red-200 my-2 mx-9 py-3 px-4 rounded-3xl h-12 items-center justify-center',
//                   ),
//                   {backgroundColor: '#D17902'},
//                 ]}
//                 onPress={addUser}>
//                 <Text style={tailwind('text-white text-base font-semibold')}>
//                   Add User
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </ScrollView>
//         ) : (
//           <FlatList
//             data={posts ? posts : []}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({item}) => <UserItem details={item} />}
//             style={tailwind('mx-1.5 relative')}
//             ListHeaderComponent={
//               <View style={tailwind('flex-row my-4 justify-between')}>
//                 <Text style={tailwind('text-lg font-semibold')}>Users</Text>
//                 <TouchableOpacity onPress={() => setIsFeed(false)}>
//                   <Text style={tailwind('text-base font-medium')}>Back</Text>
//                 </TouchableOpacity>
//               </View>
//             }
//           />
//         )}
//       </SafeAreaView>
//     </TouchableWithoutFeedback>
//   );
// }

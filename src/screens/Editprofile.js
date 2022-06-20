import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TextInput,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import Textfield from '../components/Textfield';
import SelectDropdown from 'react-native-select-dropdown';
import {launchImageLibrary} from 'react-native-image-picker';
import profile from '../assets/profile.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {ListItem} from 'react-native-elements';

export default function Editpofile({navigation}) {
  const [Pic, SetPic] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const setToastMessage = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const uploadImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setToastMessage('Cancelled image selection');
      } else if (response.errorCode == 'permission') {
        setToastMessage('Permission not satisfied');
      } else if (response.errorCode == 'others') {
        setToastMessage(response.errorMessage);
        // } else if (response.assets[0].fileSize > 2097152) {
        //   Alert.alert(
        //     'Maximum image size exceeded',
        //     'Please choose a file under 2 MB',
        //     [{text: 'OK'}],
        //   );
      } else {
        SetPic(response.assets[0].base64);
      }
    });
  };

  const removeImage = () => {
    SetPic('');
    setToastMessage('Image removed');
  };

  useEffect(() => {
    getProfile();
  }, []);

  // const editProfile = async () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');
  //   myHeaders.append(
  //     'Cookie',
  //     'csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg',
  //   );

  //   var raw = JSON.stringify({
  //     first_name: 'synapse',
  //     last_name: 'sapio',
  //     branch: 'scam',
  //     year_of_passing: 2025,
  //     sap_id: '60004200072',
  //     mobile_no: '+911234512345',
  //     bio: 'crbhai',
  //     user: 39,
  //     barcode:
  //       'http://omshukla.pythonanywhere.com/media/barcode/OmShukla2024_jeohCWG.jpeg',
  //   });

  //   var requestOptions = {
  //     method: 'PATCH',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow',
  //   };

  //   fetch(
  //     'http://omshukla.pythonanywhere.com/dashboard/userprofile-update/4/',
  //     requestOptions,
  //   )
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // };

  const getProfile = async () => {
    const value = await AsyncStorage.getItem('@user_output');
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg',
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      `http://omshukla.pythonanywhere.com//dashboard/userprofile-update/${value}/`,
      requestOptions,
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  };
  console.log(data);

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        {/* <TouchableHighlight
          onPress={() => {
            editProfile();
          }}
        >
          <Text style={styles.heading}>EditProfile</Text>
        </TouchableHighlight> */}

        <TouchableHighlight
          onPress={() => uploadImage()}
          underlayColor="rgba(0,0,0,0)"
        >
          <Image style={styles.img} source={{uri: data.profile_pic}} />
        </TouchableHighlight>
        <View style={styles.content}>
          <Text style={styles.text}>Name: {data.first_name}</Text>

          <Text style={styles.text}>Sap-id: {data.sap_id}</Text>

          <Text style={styles.text}>
            Graduating Year: {data.year_of_passing}
          </Text>

          <Text style={styles.text}>Branch: {data.branch}</Text>

          <Text style={styles.text}>Mobile No: {data.mobile_no}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151C20',
    padding: 70,
    height: hp('100%'),
  },
  heading: {
    marginLeft: wp('40%'),
    marginTop: hp('1%'),
    marginBottom: hp('5%'),
    color: '#FF4E00',
    fontSize: 18,

    fontFamily: 'Source Sans Pro',
  },
  text: {
    marginTop: hp('3%'),
    color: '#5A9CFF',

    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontFamily: 'Source Sans Pro',
  },
  img: {
    height: 120,
    width: 120,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('7%'),
    width: wp('60%'),
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: hp('4%'),
    marginBottom: hp('1%'),
    marginLeft: hp('5%'),
    borderRadius: 15,
    backgroundColor: '#FFC800',
  },
  buttontext: {
    color: '#256EDD',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 2,
  },
  dropdown: {
    height: hp('6%'),
    width: wp('75%'),
    margin: hp('5%'),
    marginTop: hp('0%'),
    marginLeft: hp('5%'),
    marginBottom: hp('0%'),
  },

  container1: {
    marginTop: hp('0%'),
    width: wp('45%'),
    height: hp('45%'),
    backgroundColor: '#256EDD',
    borderTopLeftRadius: hp('35%'),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    marginLeft: hp('30%'),
  },
});

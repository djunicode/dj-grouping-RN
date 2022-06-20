import React, { useState, useEffect, useCallback } from 'react';
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
} from 'react-native';
import Textfield from '../components/Textfield';
import SelectDropdown from 'react-native-select-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker, { types } from 'react-native-document-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
export default function Profile({ navigation }) {
  const [uri, setUri] = useState(undefined);
  const [visible, setVisible] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [sapid, setSapid] = useState('');
  const [lastname, setLastname] = useState('');
  const [branch, setBranch] = useState('');
  const [yearofpassing, setYearofpassing] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [bio, setBio] = useState('wv');
  const [user, setUser] = useState('');
  const close = () => setVisible(false);
  const open = () => setVisible(true);
  const [data1, setdata1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [fileResponse, setFileResponse] = useState([]);
  const STORAGE_KEY = '@user_output';
  const data = [
    'Select',
    'Computer Engineering',
    'Mechanical Engineering',
    'IT',
    'EXTC',
    'Electrical Engineering',
  ];
  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
    });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
        //props.onChange?.(image);
      })
      .finally(close);
    console.log(uri);
  };

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.images],
        allowMultiSelection: true,
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const postProfile = async () => {
    const value = await AsyncStorage.getItem('@user_input');
    console.log('hi');
    console.log(value);
    console.log(firstname);
    console.log(lastname);
    console.log(branch);
    console.log(mobileno);
    console.log(yearofpassing);
    console.log(bio);
    console.log(value);
    console.log(fileResponse);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg");

    var raw = JSON.stringify({
      "first_name": firstname,
      "last_name": lastname,
      "branch": branch,
      "year_of_passing": yearofpassing,
      "mobile_no": mobileno,
      "bio": "crbhai",
      "user": value,
      "sap_id": sapid,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://omshukla.pythonanywhere.com/dashboard/userprofile/", requestOptions)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setData2(json);
      let v = json.id.toString();
      console.log(typeof v);
      console.log(v);
      AsyncStorage.setItem(STORAGE_KEY, v);
    })
    .catch(error => console.error(error));

  };
  console.log(data1);

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={styles.container}>
          <Text style={styles.heading}>Profile</Text>

          {/* <Pressable style={styles.button} onPress={handleDocumentSelection}>
            <Text style={styles.buttontext}>Scan Your Barcode id</Text>
          </Pressable> */}

          <Text style={styles.text}>First Name:</Text>
          {/* <Textfield title={'Enter First Name'} onChangeText={firstname => onChangeText(firstname)}> </Textfield> */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Enter First Name"
              placeholderTextColor="#768991"
              onChangeText={setFirstname}
              value={firstname}
            />
          </View>
          <Text style={styles.text}>Last Name:</Text>
          {/* <Textfield title={'Enter Last Name'} onChangeText={setLastname}></Textfield> */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Enter Last Name"
              placeholderTextColor="#768991"
              onChangeText={setLastname}
              value={lastname}
            />
          </View>
          <Text style={styles.text}>Sap-id:</Text>
          {/* <Textfield title={'Enter Sap-id'} ></Textfield> */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Enter Sap-id"
              placeholderTextColor="#768991"
              value={sapid}
              onChangeText={setSapid}
            />
          </View>
          <Text style={styles.text}>Graduating Year:</Text>
          {/* <Textfield title={'Enter Graduating Year'} onChangeText={setYearofpassing}></Textfield> */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Enter Graduating Year"
              placeholderTextColor="#768991"
              onChangeText={setYearofpassing}
              value={yearofpassing}
            />
          </View>
          <Text style={styles.text}>Branch:</Text>
          <View style={styles.dropdown}>
            <SelectDropdown
              dropdownBackgroundColor="#256EDD"
              data={data}
              statusBarTranslucent
              //   renderLeftIcon={() => (
              //      <Icon  style={{backgroundColor:'black',marignLeft:30}} type='font-awesome' name='chevron-down'/>
              // )}

              // onSelect={(selectedItem, index) => {
              //   console.log(selectedItem, index);
              // }}
              onSelect={(selectedItem, index) => {
                setBranch(selectedItem);
              }}
              defaultButtonText="Select Branch"
            />
          </View>
          <Text style={styles.text}>Mobile No:</Text>
          {/* <Textfield title={'Enter Mobile No'} onChangeText={setMobileno}></Textfield> */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Enter Mobile No."
              placeholderTextColor="#768991"
              onChangeText={setMobileno}
              value={mobileno}
            />
          </View>
          <Pressable
            style={styles.button}
            //navigation.navigate('Interest')

            onPress={() => {
              postProfile(), navigation.navigate('Interest');
            }}
          >
            <Text style={styles.buttontext}>Confirm Details</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    backgroundColor: '#151C20',
    marginTop: hp('12%'),
    borderTopStartRadius: 50,
    borderTopRightRadius: 50,
  },
  heading: {
    marginTop: hp('2%'),
    marginLeft: hp('5%'),
    color: '#256EDD',
    fontSize: 45,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Source Sans Pro',
  },
  text: {
    marginTop: hp('2%'),
    color: '#FFFFFF',
    marginLeft: hp('3%'),
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontFamily: 'Source Sans Pro',
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
  inputText: {
    //height: 50,
    color: 'white',
    fontSize: 13,
  },
  inputView: {
    height: hp('6%'),
    width: wp('75%'),
    padding: 2,
    margin: hp('5%'),
    marginTop: hp('1%'),
    marginLeft: hp('5%'),
    marginBottom: hp('0%'),
    borderWidth: 1,
    borderColor: '#A1B1B3',
    borderStyle: 'solid',
    borderRadius: 0,
  },
});

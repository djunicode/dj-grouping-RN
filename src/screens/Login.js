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
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Textfield from '../components/Textfield';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default function Login({navigation}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [tok, setTok] = useState();
  const [user,setUser] = useState();
  const [data, setdata]= useState([]);
  const saveData = async () => {

    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg',
    );
    var formdata = new FormData();
    formdata.append('email ', email);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    await fetch(
      'http://omshukla.pythonanywhere.com/accounts/login/',
      requestOptions,
    )
  //   .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));

  .then((response) => response.json())
  .then((json) => setdata(json))
  .catch((error) => console.error(error));


        // setTok(result.token);
     
        // AsyncStorage.setItem(STORAGE_KEY1, result.user_id),
        // console.log(STORAGE_KEY1),
  };
   console.log(data);
   console.log(data.user_id);
   console.log('bye');

   const saveToasync = async () => {
    let STORAGE_KEY = '@user_input';
    try {
      await AsyncStorage.setItem(STORAGE_KEY, data.user_id)
      alert('Data successfully saved')
      console.log('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }



  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <Text style={styles.heading}>LOGIN </Text>
        <Text style={styles.text}>Email</Text>
        <Textfield
          title={'Enter email'}
          function={text => setemail(text)}
          val={email}></Textfield>
        <Text style={styles.text}>Password</Text>
        <Textfield
          title={'Enter password'}
          function={text => setpassword(text)}
          val={password}></Textfield>

        <Pressable
          style={styles.button}
          onPress={() => {
            saveData();
            navigation.navigate('Profile');
          }}>
          <Text style={styles.buttontext}>Sign-in</Text>
        </Pressable>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={styles.text1}>
          Don't have an account? </Text>
          <TouchableOpacity onPress={() => {saveToasync(), navigation.navigate('signup')}}>
            <Text style={styles.text2}> Signup</Text>
          </TouchableOpacity>
       </View>
        
      </View>
    </View>
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
    marginTop: hp('4%'),
    color: '#FFFFFF',
    marginLeft: hp('5%'),
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('7%'),
    width: wp('60%'),
    padding:2,
    marginTop: hp('7%'),
    marginBottom: hp('1%'),
    marginLeft: hp('8%'),
    borderRadius: 15,
    backgroundColor: '#FFC800',
  },
  buttontext: {
    color: '#151C20',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    marginTop: 2,
  },
  text1: {
    marginTop: hp('0%'),
    marginLeft: hp('9%'),
    color: '#7D797D',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: '#256EDD',
    marginTop: hp('0%'),
    // //marginLeft: hp('9%'),
    fontSize: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container1: {
    marginTop: hp('13%'),
    width: wp('40%'),
    height: hp('40%'),
    backgroundColor: '#256EDD',
    borderTopLeftRadius: hp('40%'),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    marginLeft: hp('30%'),
  },
});

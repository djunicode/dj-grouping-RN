import React ,{useState,useEffect}  from 'react';
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function signup({navigation}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const saveData = () => {
  console.log(email);
  var myHeaders = new Headers();
myHeaders.append("Cookie", "csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg");
var formdata = new FormData();
formdata.append("email ", email);
formdata.append("password",password);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://omshukla.pythonanywhere.com/accounts/register/", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
};
    return (
        <View style={{flex: 1,  backgroundColor: '#FFFFFF'}}>
        <View style={styles.container}>
        <Text style={styles.heading}>Create Account </Text>
        <Text style={styles.text}>Email</Text>
        {/* <Textfield onChangeText={text => setemail(text)} value={email}  /> */}
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          autoCapitalize="none"
          placeholder="Enter the details "
          placeholderTextColor="#768991"  
          onChangeText={text => setemail(text)}
          value={email}  
        />
      </View>
        <Text style={styles.text}>Password</Text>
        {/* <Textfield /> */}
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          autoCapitalize="none"
          placeholder="Enter the details "
          placeholderTextColor="#768991"  
          onChangeText={text => setpassword(text)}
          value={password}
        />
      </View>

        <Pressable style={styles.button} onPress={() => {saveData();navigation.navigate('Login')}}>
                <Text style={styles.buttontext}>SIGNUP</Text>
        </Pressable>  
        <Text style={styles.text1}>
        Already have an account?
        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text2}> LOGIN </Text>
        </TouchableOpacity>
        </Text>
        <View style={styles.container1}></View>


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
    heading:{
            marginTop: hp('2%'),
            marginLeft:hp('5%'),
            color: '#256EDD',
            fontSize: 45,
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Source Sans Pro',
    },
    text:{
        marginTop: hp('4%'),
        color: '#FFFFFF',
        marginLeft:hp('5%'),
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight:'bold',
        fontFamily: 'Source Sans Pro',
},
inputView: {
    height: hp('6%'),
    width: wp('75%'),
    paddingLeft: 10,
    margin: hp('5%'),
    marginTop:hp('0%'),
    marginLeft: hp('5%'),
    marginBottom:hp('0%'),
    borderWidth: 1,
    borderColor: '#A1B1B3',
    borderStyle: 'solid',
    borderRadius: 0,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height:hp('7%'),
    width:wp('60%'),
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop:hp('7%'),
    marginBottom:hp('1%'),
    marginLeft:hp('8%'),
    borderRadius: 15,
    backgroundColor: '#FFC800',
  },
  buttontext:{
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
  },
  container1:{
    marginTop:hp('13%'),
    width: wp('40%'),
    height: hp('40%'),
    backgroundColor:'#256EDD',
    borderTopLeftRadius:hp('40%'),
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    borderTopRightRadius:0,
    marginLeft:hp('30%'),
  }

});

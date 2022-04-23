import React  from 'react';
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

export default function Login({navigation}) {
    return (
        <View style={{flex: 1,  backgroundColor: '#FFFFFF'}}>
        <View style={styles.container}>
        <Text style={styles.heading}>LOGIN </Text>
        <Text style={styles.text}>Email</Text>
        <Textfield />
        <Text style={styles.text}>Password</Text>
        <Textfield />
        
        <Pressable style={styles.button}  onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttontext}>SIGNIN</Text>
        </Pressable>  
        <Text style={styles.text1}>
        Don't have an account?
        <TouchableOpacity  onPress={() => navigation.navigate('signup')}>
        <Text style={styles.text2}> SIGNUP</Text>
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

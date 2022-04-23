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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Profile({navigation}) {
    return (
        <View style={{flex: 1,  backgroundColor: '#FFFFFF'}}>
        <View style={styles.container}>
        <Text style={styles.heading}>Profile</Text>
        
        <Pressable style={styles.button} onPress={() => {}}>
                <Text style={styles.buttontext}>Scan Your Barcode id</Text>
        </Pressable>  
        <Text style={styles.text}>Name:</Text>
        <Text style={styles.text}>Sap-id:</Text>
        <Text style={styles.text}>Mobile-No:</Text>
        <Text style={styles.text}>DOB:</Text>
        <Text style={styles.text}>Graduating Year:</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Interest')}>
                <Text style={styles.buttontext}>Confirm Details</Text>
        </Pressable>  
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
      marginTop: hp('2%'),
      color: '#FFFFFF',
      marginLeft:hp('3%'),
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
    marginTop:hp('4%'),
    marginBottom:hp('1%'),
    marginLeft:hp('5%'),
    borderRadius: 15,
    backgroundColor: '#FFC800',
  },
  buttontext:{
    color: '#256EDD',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom:2,
  },
  

    container1:{
      marginTop:hp('7%'),
      width: wp('40%'),
      height: hp('40%'),
      backgroundColor:'#256EDD',
      borderTopLeftRadius:hp('40%'),
      borderBottomLeftRadius:0,
      borderBottomRightRadius:0,
      borderTopRightRadius:0,
      marginLeft:hp('30%'),
      },
  

});

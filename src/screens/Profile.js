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
        flex: 3,
        backgroundColor: '#151C20',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop:100,
    },
    heading:{
            marginTop: 2,
            marginLeft:15,
            color: '#256EDD',
            fontSize: 45,
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Source Sans Pro',
    },
    text:{
        marginTop: 18,
        color: '#FFFFFF',
        marginLeft:15,
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight:'bold',
        fontFamily: 'Source Sans Pro',
},

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    width:250,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop:25,
    marginBottom:15,
    marginLeft:20,
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
        marginTop:50,
        width: 150,
        height: 150,
        backgroundColor:'#256EDD',
        borderTopLeftRadius:150,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        borderTopRightRadius:0,
        marginLeft:230,
      },
  

});

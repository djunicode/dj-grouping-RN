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

export default function signup({navigation}) {
    return (
        <View style={{flex: 1,  backgroundColor: '#FFFFFF'}}>
        <View style={styles.container}>
        <Text style={styles.heading}>Create Account </Text>
        <Text style={styles.text}>Email</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            label={'Email'}
            autoCapitalize="none"
            placeholder="Enter Email"
            placeholderTextColor="#768991"  
          />
        </View>
        <Text style={styles.text}>Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            label={'Email'}
            autoCapitalize="none"
            placeholder="Enter Email"
            placeholderTextColor="#768991"  
          />
        </View>
        <Pressable style={styles.button} onPress={() => {}}>
                <Text style={styles.buttontext}>SIGNUP</Text>
        </Pressable>  
        <Text style={styles.text1}>
        Already have an account?
        <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
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
inputView: {
    height: 45,
    width: 300,
    paddingLeft: 10,
    margin: 15,
    marginTop:0,
    marginLeft: 15,
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
    height:55,
    width:250,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop:35,
    marginBottom:15,
    marginLeft:40,
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
    marginTop: 0,
    marginLeft: 50,
    color: '#7D797D',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: '#256EDD',
  },
  container1:{
    marginTop:100,
    width: 150,
    height: 150,
    backgroundColor:'#256EDD',
    borderTopLeftRadius:150,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    borderTopRightRadius:0,
    marginLeft:230,
  }

});

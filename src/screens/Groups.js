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
  SafeAreaView,
} from 'react-native';
import CarouselCards from '../components/CarouselCards';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Groups({navigation}) {
  return (
    <View>
      <SafeAreaView style={styles.container1}>
        <CarouselCards />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('6%'),
    width: wp('80%'),
    alignSelf: 'center',
    padding: 2,
    marginHorizontal: wp('5%'),
    marginVertical: wp('5%'),

    backgroundColor: '#52B4A4',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('6%'),
    width: wp('80%'),
    alignSelf: 'center',
    padding: 2,
    marginHorizontal: wp('5%'),

    backgroundColor: '#FF4E00',
  },
  buttontext: {
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: '600',
    //marginTop: 2,
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
    fontSize: 15,
  },
  container1: {
    backgroundColor: '#151C20',
    alignItems: 'center',

    padding: 70,
  },
});

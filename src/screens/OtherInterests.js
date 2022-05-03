import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OtherInterests = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            style={{
              backgroundColor: '#000000',
              borderRadius: 80,
              height: 50,
              width: 50,
              marginLeft: hp('4%'),
              marginRight: hp('35%'),
              marginTop: hp('5%'),
            }}
            source={require('../assets/left.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.header}>Other Interests</Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.box}>
              <Text style={styles.label}>Photography</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.label}>Karaoke</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.box}>
              <Text style={styles.label}>Photography</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.label}>Karaoke</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.box}>
              <Text style={styles.label}>Photography</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.label}>Karaoke</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.box}>
              <Text style={styles.label}>Photography</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.label}>Karaoke</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.box}>
              <Text style={styles.label}>Photography</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.label}>Karaoke</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{
                height: 50,
                width: 50,
                marginLeft: hp('50%'),
                marginTop: hp('1%'),
              }}
              source={require('../assets/next.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skip: {
    fontSize: 25,
    color: '#256EDD',
    textAlign: 'right',
    marginRight: hp('6%'),
    marginTop: hp('6%'),
  },
  container1: {
    height: hp('100%'),
    backgroundColor: '#151C20',
    marginTop: hp('3%'),
    borderTopStartRadius: 50,
    borderTopRightRadius: 50,
  },
  header: {
    color: '#FFC800',
    fontSize: 40,
    marginTop: hp('3%'),
    marginLeft: hp('5%'),
    marginBottom: hp('3%'),
  },
  box: {
    backgroundColor: 'white',
    height: hp('7%'),
    width: wp('35%'),
    borderRadius: 20,
    margin: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    color: '#256EDD',
  },
});
export default OtherInterests;

import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OtherInterests = ({navigation}) => {
  const Interests = ['debating','photography','finance','marketing','editorial','creative','dancing','music','painting','travelling'];
  const [list, setList] = useState([]);
  const [field,setfield]=useState('');
  const addInterest=() => {
   setList([...list,field]);
   console.log(list)};

   const Interest =()=>{
   var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": list
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://omshukla.pythonanywhere.com/dashboard/interest/4/", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
}

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
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.header}>Other Interests</Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {setfield(Interests[0]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[0]}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setfield(Interests[1]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[1]}</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {setfield(Interests[2]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[2]}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setfield(Interests[3]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[3]}</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {setfield(Interests[4]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[4]}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setfield(Interests[5]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[5]}</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {setfield(Interests[6]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[6]}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setfield(Interests[7]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[7]}</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {setfield(Interests[8]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[8]}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setfield(Interests[9]);
                    addInterest()}}>
            <View style={styles.box}>
              <Text style={styles.label}>{Interests[9]}</Text>
            </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() =>{Interest(); navigation.navigate('QnA')}}>
            <Image
              style={{
                height: 50,
                width: 50,
                marginLeft: hp('40%'),
                marginTop: hp('5%'),

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
    fontSize: 15,
    color: '#256EDD',
    textAlign: 'right',
   marginRight: wp('6%'),
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

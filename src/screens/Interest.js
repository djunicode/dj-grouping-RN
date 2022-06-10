import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon} from 'react-native-elements';

const Interest = ({navigation}) => {
  const data = ['Basketball', 'Football', 'Volleyball', 'Hockey'];
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column'}}>
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
      </View>
      <View style={styles.container1}>
        <Text style={styles.header}>Select your Interests</Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <Text style={{margin: 20, color: 'white', fontSize: 25}}>
                Sports
              </Text>
            </View>
            <View style={styles.dropdown}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <SelectDropdown
                  dropdownBackgroundColor="#FFFFFF"
                  data={data}
                  statusBarTranslucent
                  //   renderLeftIcon={() => (
                  //      <Icon  style={{backgroundColor:'black',marignLeft:30}} type='font-awesome' name='chevron-down'/>
                  // )}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText="Basketball"
                />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <Text style={{margin: 20, color: 'white', fontSize: 25}}>
                Sports
              </Text>
            </View>
            <View style={styles.dropdown}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <SelectDropdown
                  dropdownBackgroundColor="#FFFFFF"
                  data={data}
                  statusBarTranslucent
                  //   renderLeftIcon={() => (
                  //      <Icon  style={{backgroundColor:'black',marignLeft:30}} type='font-awesome' name='chevron-down'/>
                  // )}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText="Basketball"
                />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <Text style={{margin: 20, color: 'white', fontSize: 25}}>
                Sports
              </Text>
            </View>
            <View style={styles.dropdown}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <SelectDropdown
                  dropdownBackgroundColor="#FFFFFF"
                  data={data}
                  statusBarTranslucent
                  //   renderLeftIcon={() => (
                  //      <Icon  style={{backgroundColor:'black',marignLeft:30}} type='font-awesome' name='chevron-down'/>
                  // )}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText="Basketball"
                />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <Text style={{margin: 20, color: 'white', fontSize: 25}}>
                Sports
              </Text>
            </View>
            <View style={styles.dropdown}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <SelectDropdown
                  dropdownBackgroundColor="#FFFFFF"
                  data={data}
                  statusBarTranslucent
                  //   renderLeftIcon={() => (
                  //      <Icon  style={{backgroundColor:'black',marignLeft:30}} type='font-awesome' name='chevron-down'/>
                  // )}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText="Basketball"
                />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <Text style={{margin: 20, color: 'white', fontSize: 25}}>
                Sports
              </Text>
            </View>
            <View style={styles.dropdown}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <SelectDropdown
                  dropdownBackgroundColor="#FFFFFF"
                  data={data}
                  statusBarTranslucent
                  //   renderLeftIcon={() => (
                  //      <Icon  style={{backgroundColor:'black',marignLeft:30}} type='font-awesome' name='chevron-down'/>
                  // )}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText="Basketball"
                />
              </View>
              
            </View>
            
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OtherInterests')}>
            <ImageBackground
              style={{
                height: 50,
                width: 50,
                marginLeft: hp('40%'),
                marginTop: hp('15%'),

              }}
              source={require('../assets/next.png')}></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'space-between',
    // alignItems:'center'
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
  dropdown: {
    borderRadius: 20,
    margin: 10,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  header: {
    color: '#FFC800',
    fontSize: 27,
    marginTop: hp('3%'),
    marginLeft: hp('5%'),
    marginBottom: hp('1%'),
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
export default Interest;

import React from 'react';
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
import SelectDropdown from 'react-native-select-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';

export default function Profile({navigation}) {
  const [uri, setUri] =React.useState(undefined);
  const [visible, setVisible] = React.useState(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);

  const data = [
    'Select',
    'Computer Engineering',
    'Mechanical Engineering',
    'IT',
    'EXTC',
    'Electrical Engineering',
  ];
  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
      
    });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
        //props.onChange?.(image);
      })
      .finally(close);
      //console.log(uri)
  };
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={styles.container}>
          
            <Text style={styles.heading}>Profile</Text>
            <ScrollView>
            <Pressable style={styles.button} onPress={openCamera}>
              <Text style={styles.buttontext}>Scan Your Barcode id</Text>
            </Pressable>

            <Text style={styles.text}>Name:</Text>
            <Textfield title={'Enter Name'}></Textfield>
            <Text style={styles.text}>Sap-id:</Text>
            <Textfield title={'Enter Sap-id'}></Textfield>
            <Text style={styles.text}>Graduating Year:</Text>
            <Textfield title={'Enter Graduating Year'}></Textfield>
            <Text style={styles.text}>Branch:</Text>
            <View style={styles.dropdown}>
              <SelectDropdown
                dropdownBackgroundColor="#256EDD"
                data={data}
                statusBarTranslucent
                //   renderLeftIcon={() => (
                //      <Icon  style={{backgroundColor:'black',marignLeft:30}} type='font-awesome' name='chevron-down'/>
                // )}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText="Select Branch"
              />
            </View>
            <Text style={styles.text}>Mobile No:</Text>
            <Textfield title={'Enter Mobile No'}></Textfield>

            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Interest')}>
              <Text style={styles.buttontext}>Confirm Details</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
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
    marginTop: hp('2%'),
    color: '#FFFFFF',
    marginLeft: hp('3%'),
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontFamily: 'Source Sans Pro',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('7%'),
    width: wp('60%'),
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: hp('4%'),
    marginBottom: hp('1%'),
    marginLeft: hp('5%'),
    borderRadius: 15,
    backgroundColor: '#FFC800',
  },
  buttontext: {
    color: '#256EDD',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 2,
  },
  dropdown: {
    height: hp('6%'),
    width: wp('75%'),
    margin: hp('5%'),
    marginTop: hp('0%'),
    marginLeft: hp('5%'),
    marginBottom: hp('0%'),
  },

  container1: {
    marginTop: hp('0%'),
    width: wp('45%'),
    height: hp('45%'),
    backgroundColor: '#256EDD',
    borderTopLeftRadius: hp('35%'),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    marginLeft: hp('30%'),
  },
});

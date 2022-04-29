import React  from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TextField = (props) => {
    return (
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          autoCapitalize="none"
          placeholder={props.title}
          placeholderTextColor="#768991"  
          onChangeText={props.function}
          value={props.val}
        />
      </View>
        );
};

const styles = StyleSheet.create({
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
});

export default TextField;
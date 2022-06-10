import React ,{useState} from 'react';
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
import { ScrollView } from 'react-native-gesture-handler';

export default function Events({ navigation }) {

   
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <View style={styles.container}>

                    <Text style={styles.heading}>Events</Text>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151C20',
    padding: 70,
    height: hp('100%'),
    },
    heading: {
        marginTop: hp('2%'),
        marginLeft: hp('5%'),
        color: '#FF4E00',
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Source Sans Pro',
    },
    text: {
        marginTop: hp('2%'),
        color: '#5A9CFF',
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

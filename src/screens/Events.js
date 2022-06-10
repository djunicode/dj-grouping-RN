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
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Source Sans Pro',
    },
  
});

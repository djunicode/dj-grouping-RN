import React, { useState } from 'react';
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
    TouchableHighlight
} from 'react-native';
import Textfield from '../components/Textfield';
import SelectDropdown from 'react-native-select-dropdown';
import { launchImageLibrary } from 'react-native-image-picker';
import profile from '../assets/profile.png';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

export default function Editpofile({ navigation }) {
    const [Pic, SetPic] = useState('');
    const setToastMessage = message => {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };

    const uploadImage = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                setToastMessage('Cancelled image selection');

            } else if (response.errorCode == 'permission') {
                setToastMessage('Permission not satisfied');
            } else if (response.errorCode == 'others') {
                setToastMessage(response.errorMessage);
                // } else if (response.assets[0].fileSize > 2097152) {
                //   Alert.alert(
                //     'Maximum image size exceeded',
                //     'Please choose a file under 2 MB',
                //     [{text: 'OK'}],
                //   );
            } else {
                SetPic(response.assets[0].base64);
            }
        });
    };

    const removeImage = () => {
        SetPic('');
        setToastMessage('Image removed');
    };

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={styles.container}>

                    <Text style={styles.heading}>EditProfile</Text>
                    <TouchableHighlight
                        onPress={() => uploadImage()}
                        underlayColor="rgba(0,0,0,0)">
                        <Image
                            style={styles.img}

                            source={profile}
                        />
                    </TouchableHighlight>
                    <View style={styles.content}>


                    <Text style={styles.text}>Name: Dishant Zaveri</Text>

                    <Text style={styles.text}>Sap-id: 60004200090</Text>

                    <Text style={styles.text}>Graduating Year: 2024</Text>

                    <Text style={styles.text}>DOB: 08-05-2002</Text>

                    <Text style={styles.text}>Mobile No: 9869551340</Text>
                    </View>
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
      
        marginLeft: wp('40%'),
        marginTop:hp('1%'),
        marginBottom:hp('5%'),
        color: '#FF4E00',
        fontSize: 18,

        fontFamily: 'Source Sans Pro',
    },
    text: {
        marginTop: hp('3%'),
        color: '#5A9CFF',

        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        fontFamily: 'Source Sans Pro',
    },
    img: {
        height: 120,
        width: 120,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    content:{

   
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
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

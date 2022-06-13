import React, { useState, useEffect } from 'react';
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
    TouchableHighlight,
    FlatList
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
import { ListItem } from 'react-native-elements';

export default function Editpofile({ navigation }) {
    const [Pic, SetPic] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
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

    useEffect(() => {
        getProfile();
    }, []);


    const getProfile = async () => {
        // var axios = require('axios');

        // var config = {
        //   method: 'get',
        //   url: 'http://omshukla.pythonanywhere.com/dashboard/userprofile-update/1/',
        //   headers: { 
        //     'Cookie': 'csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg'
        //   }
        // };

        // axios(config)
        // .then(function (response) {
        //   console.log(JSON.stringify(response.data));
        //   setData(response.data);
        //   console.log(data)
        //         })
        // .catch(function (error) {
        //   console.log(error);
        // });

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "csrftoken=jmsQLbzxHJFW9b3clnHucst1Xyw2xi4VTAnMZbW5EMzKP3imwnoXTWLAkofL4Sjg");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://omshukla.pythonanywhere.com/dashboard/userprofile/", requestOptions)
            .then(response => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));

    }
    console.log(data)
    console.log(data[0].first_name)



    return (

        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableHighlight onPress={() => {
                    getProfile();

                }}>

                    <Text style={styles.heading}>EditProfile</Text>

                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => uploadImage()}
                    underlayColor="rgba(0,0,0,0)">
                    <Image
                        style={styles.img}

                        source={profile}
                    />
                </TouchableHighlight>
                <View style={styles.content}>


                    <Text style={styles.text}>Name: {data[0].first_name}</Text>

                    <Text style={styles.text}>Sap-id: {data[0].sap_id}</Text>

                    <Text style={styles.text}>Graduating Year: {data[0].year_of_passing}</Text>

                    <Text style={styles.text}>Branch: {data[0].branch}</Text>

                    <Text style={styles.text}>Mobile No: {data[0].mobile_no}</Text>
                </View>
            </View>
        </View>

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
        marginTop: hp('1%'),
        marginBottom: hp('5%'),
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
    content: {


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

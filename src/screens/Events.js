import React ,{useState,useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Button,
    Alert,
    TextInput,
    Pressable,
    TouchableOpacity,
    FlatList
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
    const [data, setdata]= useState([]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        getData();
      }, []);
     const getData = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

        
          
        fetch("http://omshukla.pythonanywhere.com/dashboard/events/", requestOptions)
        .then((response) => response.json())
        .then((json) => setdata(json))
        .catch((error) => console.error(error));

        
        }
        console.log(data);

        const renderItem = ({ item }) => {
            return (
                <View>
                <ImageBackground source={require('../assets/coding.png')} resizeMode="cover" style={styles.image} >
                <Text style={{ color: 'white', fontWeight: 'bold', position: 'absolute', bottom: hp('43%'), left: 0}}>__________________________________________</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', position: 'absolute', bottom: hp('39%'), left: hp('1%'),fontSize:25}}>{item.event_name}</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', position: 'absolute', bottom: hp('35%'), left: hp('1%'),fontSize:18}}>{item.event_commitee}</Text>
                </ImageBackground>
                </View>
            );
        };
    return (
                <View style={styles.container}>
                <Text style={styles.heading}>Upcoming Events</Text>
                <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                contentContainerStyle={{}}
                renderItem={renderItem}
                />
                </View>
    
        
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151C20',
    padding: 70,
    height: hp('100%'),
    width:wp('100%'),
    marginLeft:hp('0%'),
    marginRight:hp('0%'),
    },
    heading: {
        marginTop: hp('0%'),
        marginLeft: hp('3%'),
        marginRight:hp('0%'),
        color: 'white',
        fontSize: 25,
        fontFamily: 'Source Sans Pro',
    },
    image :{
        height: hp('25%'),
        width: wp('80%'),
        margin: hp('5%'),
        marginTop:hp('4%'),
        marginLeft: hp('0%'),
        marginRight:hp('0%'),
        marginBottom:hp('2%'),
        borderRadius: hp('2%'),
        position: 'relative',

    }
    
   
});

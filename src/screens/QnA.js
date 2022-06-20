import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating-widget';

export default function QnA({ navigation }) {
  const [ques, setques] = useState([]);
  const [rating, setRating] = useState(0);
  const [Ans, setAns] = useState([]);
  // let rate = 0;

  useEffect(() => {
    getQues();
  }, []);

  const setstars = () => {
    setRating([...rating, star]);
  };
  const getQues = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://omshukla.pythonanywhere.com/dashboard/oceanques/',
      requestOptions,
    )
      .then(response => response.json())
      .then(json => setques(json))
      .catch(error => console.log('error', error));
  };
  const sendans = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      answer: 3,
      user: 4,
      quesinst: 5,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://omshukla.pythonanywhere.com/dashboard/oceanans/4/',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  console.log(ques);
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            marginLeft: hp('5%'),
            marginTop: hp('2%'),
            marginBottom: hp('2%'),
          }}
        >
          {item.question}
        </Text>
        <StarRating
          rating={rating}
          onChange={() => {
            setRating;
            //console.log(rating);
            setAns([{ quesinst: item.id, answer: rating, user: 4 }, ...Ans]);
            sendans();

            // console.log(Ans);
          }}
        // onChange={setRating}
        />
      </View>
    );
  };
  console.log(rating);
  console.log(Ans);
  return (
    <ScrollView>
    <View style={styles.container}>

      <FlatList
        data={ques}
        keyExtractor={({ id }) => id}
        contentContainerStyle={{}}
        renderItem={renderItem}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Tabs');
        }}
      >
        <Text style={styles.buttontext}>Proceed</Text>
      </Pressable>


    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    backgroundColor: '#151C20',
    marginTop: hp('10%'),
    borderTopStartRadius: 50,
    borderTopRightRadius: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: hp('7%'),
    width: wp('60%'),
    padding: 2,
    marginTop: hp('7%'),
    marginBottom: hp('1%'),
    marginLeft: hp('8%'),
    borderRadius: 15,
    backgroundColor: '#FFC800',
  },
  buttontext: {
    color: '#151C20',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    marginTop: 2,
  },
});

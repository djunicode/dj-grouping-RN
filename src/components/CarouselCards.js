import React from "react";
import { View, Text, StyleSheet, Dimensions, Image,  Pressable,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import data from "./data";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
       
      />
       <Pressable
                    style={styles.button1}
                //   onPress={() => {
                //     navigation.navigate('Profile');
                //   }}
                >
                    <Text style={styles.buttontext}>Join</Text>
                </Pressable>
                <Pressable
                    style={styles.button2}
                //   onPress={() => {
                //     navigation.navigate('Profile');
                //   }}
                >
                    <Text style={styles.buttontext}>Decline</Text>
                </Pressable>

      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "white",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({

    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('6%'),
        width: wp('80%'),
        alignSelf: 'center',
        padding: 2,
        marginHorizontal: wp('15%'),
        marginVertical: wp('5%'),


        backgroundColor: '#52B4A4',
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('6%'),
        width: wp('80%'),
        alignSelf: 'center',
        padding: 2,
        marginHorizontal: wp('5%'),

        backgroundColor: '#FF4E00',
    },
    buttontext: {
        color: '#FFFFFF',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Source Sans Pro',
        fontWeight: '600',
        //marginTop: 2,
    },
    text1: {
        marginTop: hp('0%'),
        marginLeft: hp('9%'),
        color: '#7D797D',
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text2: {
        color: '#256EDD',
        fontSize: 15,
    },
    container1: {
        backgroundColor: '#151C20',
        alignItems: "center",
        justifyContent: "center",
        padding: 150,
      },
});
export default CarouselCards;
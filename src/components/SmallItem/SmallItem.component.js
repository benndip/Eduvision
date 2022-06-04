import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './SmallItem.style'

const SmallItem = ({ backgroundColor, index, onCardPress, numberOfLessons, image, name, free, imageStyle }) => {

    return (
        <TouchableOpacity
            style={styles.container(backgroundColor, index)}
            onPress={onCardPress}
        >
            <View style={styles.imageContainer}>
                <Image resizeMode='cover' source={image} style={imageStyle} />
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.numberOfLessons}>{numberOfLessons} lessons</Text>
            <View style={styles.priceAndStart}>
                <TouchableOpacity style={styles.startTouch}>
                    <Ionicons name="md-play" size={20} color="#23232C" />
                </TouchableOpacity>
            </View>
            <Ionicons style={styles.starIcon} name="ios-star" size={16} color="#23232C" />
        </TouchableOpacity>
    )
}

export default SmallItem

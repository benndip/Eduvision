import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import styles from './SmallItem.style'

const SmallItem = ({ backgroundColor, index, onCardPress, numberOfLessons, image, name, free, imageStyle }) => {

    return (
        <TouchableOpacity 
            style={styles.container(backgroundColor, index)}
            onPress={onCardPress}
        >
            <Image source={image} style={imageStyle} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.numberOfLessons}>{numberOfLessons} lessons</Text>
            <View style={styles.priceAndStart}>
            {
                    free
                    &&
                    <Text style={styles.forFreeText}>Free!</Text>
                }
                <TouchableOpacity style={styles.startTouch}>
                    <Ionicons name="md-play" size={20} color="#23232C" />
                </TouchableOpacity>
            </View>
            <Ionicons style={styles.starIcon} name="ios-star" size={16} color="#23232C" />
        </TouchableOpacity>
    )
}

export default SmallItem

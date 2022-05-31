import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './LargeItem.style'

const LargeItem = ({ backgroundColor, index, name, numberOfLessons, free, onCardPress, image, imageStyle }) => {
    return (
        <TouchableOpacity 
            style={[styles.container(backgroundColor, index)]}
            onPress={onCardPress}
        >
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.numberOfLessons}>{numberOfLessons} lessons</Text>
                {
                    free
                    &&
                    <Text style={styles.forFreeText}>For free!</Text>
                }
                <TouchableOpacity style={styles.startTouch}>
                    <Text style={styles.startText}>Start</Text> 
                    <Ionicons name="md-play" size={20} color="#ffffff" />
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image resizeMode='contain' source={image} style={{ width: '90%', height: '100%' }} />
            </View>
            <Ionicons style={styles.starIcon} name="ios-star" size={16} color="black" />
        </TouchableOpacity>
    )
}

export default LargeItem

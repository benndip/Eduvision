import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Splash.style'

const Splash = ({ navigation }) => {

    const selectInitialRoute = async () => {
        try {
            const notFirstTimeonApp = await AsyncStorage.getItem('@not_first_time')
            if (notFirstTimeonApp === 'NOT_FIRST_TIME') {
                navigation.navigate("Landing")
            } else {
                navigation.navigate("Onboarding")
            }
        } catch (e) {
            await AsyncStorage.setItem('@not_first_time', 'NOT_FIRST_TIME')
            navigation.navigate("Onboarding")
        }
    }

    useEffect(() => {
        selectInitialRoute()
    }, [])

    return (
        <View>
           
        </View>
    )
}

export default Splash
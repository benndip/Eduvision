import React, { useState } from 'react';
import { SafeAreaView, View, Text, StatusBar, TextInput, FlatList } from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';

import styles from './Home.style';
import { LargeItem, SmallItem } from '../../components';

import { modelCategories } from '../../../res/data';

const Home = ({ navigation }) => {

    const [showSearchBar, setShowSearchBar] = useState(false);

    const colors = [
        '#FFECF2',
        '#DEF5F0',
        '#FFF5DD',
        '#c7ecee',
        '#ffbe76',
        '#f6e58d',
        '#FFECF2',
        '#DEF5F0',
        '#FFF5DD',
        '#c7ecee',
        '#ffbe76',
        '#f6e58d',
        '#FFECF2',
        '#DEF5F0',
        '#FFF5DD',
        '#c7ecee',
        '#ffbe76',
        '#f6e58d',
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#ffffff' hidden={false} barStyle='dark-content' />
            <View style={styles.iconsAndSearchBar}>
                <Fontisto
                    name='nav-icon-grid-a'
                    size={20}
                    color='#23232C'
                    // onPress={{}}
                />
                {
                    showSearchBar
                    &&
                    <TextInput style={styles.textInput} />
                }
                <Ionicons
                    name='search'
                    size={25}
                    color='#23232C'
                    // onPress={{}}
                />
            </View>
            <FlatList 
                style={styles.flatList}
                data={modelCategories}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <Text style={styles.letsStart}>Let's start!</Text>
                        <Text style={styles.smallText}>More than 200 lessons on different topics are available to you!</Text>
                    </>
                }
                ListFooterComponent={
                    <View style={styles.footerComponent}>
                        {
                            modelCategories.map((modelCategory, index) =>(
                                index % 3 == 0 
                                ?
                                <LargeItem
                                    key={modelCategory.id} 
                                    name={modelCategory.name}
                                    numberOfLessons={modelCategory.numberOfLessons}
                                    free={modelCategory.free}
                                    backgroundColor={colors[index]}
                                    index={index}
                                    onCardPress={()=>navigation.navigate('ModelGroup', { item: modelCategory })}
                                    image={modelCategory.image}
                                    imageStyle={modelCategory.imageStyle}
                                />
                                    :
                                <SmallItem
                                    key={modelCategory.id}
                                    name={modelCategory.name}
                                    numberOfLessons={modelCategory.numberOfLessons}
                                    free={modelCategory.free}
                                    backgroundColor={colors[index]}
                                    index={index}
                                    onCardPress={()=>navigation.navigate('ModelGroup', { item: modelCategory })}
                                    image={modelCategory.image}
                                    imageStyle={modelCategory.imageStyle}
                                />
                            ))
                        }
                    </View>
                }
            />
        </SafeAreaView>
    )
}

export default Home

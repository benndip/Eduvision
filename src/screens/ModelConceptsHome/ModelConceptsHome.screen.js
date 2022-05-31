import React from 'react'
import { View, Text, StatusBar, SafeAreaView, FlatList } from 'react-native'

import styles from './ModelConceptsHome.style'
import { ConceptItem } from '../../components'

import {conceptModels} from '../../../res/data'

const ModelConceptsHome = () => {

  const renderItem = ({item}) =>{
    return <ConceptItem item={item} />
  }

  return (
    <SafeAreaView  style={styles.container}>
      <StatusBar backgroundColor='#000000' barStyle='light-content'/>
      <Text style={styles.titleText}>Plunge into Realities</Text>
      <FlatList
        renderItem={renderItem}
        data={conceptModels}
      />
    </SafeAreaView>
  )
}

export default ModelConceptsHome
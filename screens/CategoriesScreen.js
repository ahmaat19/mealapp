import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({ routeName: 'CategoryMeals' })
        }}
      >
        <View style={styles.gridItem}>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
})
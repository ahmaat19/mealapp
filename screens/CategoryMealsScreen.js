import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)
  return (
    <View style={styles.screen}>
      <Text>The CategoryMeal Screen</Text>
      <Button
        title='Go To Meal Detail!'
        onPress={() => {
          navigation.navigate({ routeName: 'MealDetail' })
        }}
      />
    </View>
  )
}

export default CategoryMealScreen

CategoryMealScreen.navigationOptions = {
  headerTitle: 'Helo',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CategoryMealScreen = ({ navigation }) => {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

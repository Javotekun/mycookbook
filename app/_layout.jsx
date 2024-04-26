import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const Rootlayout = () => {
  return (
   <Stack>
    <Stack.Screen name="index" options={{ headerShown: false}} />
   </Stack>
  )
}

export default Rootlayout


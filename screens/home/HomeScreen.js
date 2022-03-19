import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-2xl font-bold`}>フルスタックチャンネル</Text>
    </View>
  )
}

export default HomeScreen

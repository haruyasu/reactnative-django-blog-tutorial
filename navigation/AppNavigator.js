import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/home/HomeScreen'
import { BlogNavigator } from './BlogNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeArea } from '../components/SafeArea'

const BottomTab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <SafeArea>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              if (route.name === 'HomeScreen') {
                iconName = focused ? 'ios-home' : 'ios-home-outline'
              } else if (route.name === 'BlogNavigator') {
                iconName = focused ? 'ios-document-text' : 'ios-document-text-outline'
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'black',
          })}
        >
          <BottomTab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: 'ホーム',
              headerTitle: 'ホーム',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FDE047',
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <BottomTab.Screen
            name="BlogNavigator"
            component={BlogNavigator}
            options={{ title: 'ブログ', headerShown: false }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeArea>
  )
}

export default AppNavigator

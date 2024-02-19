import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/screens/app/home/HomeScreen';
import appRoutes from '@lib/routes';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '@rneui/base';
import TradeScreen from '@screens/app/trade/TradeScreen';
import AnalysisScreen from '@screens/app/analysis/AnalysisScreen';
import PortfolioScreen from '@screens/app/portfolio/PortfolioScreen';

const AppTab = createBottomTabNavigator();

const AppScreenContainer = () => {
  return (
    <AppTab.Navigator
      initialRouteName={appRoutes.home}
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <AppTab.Screen name={appRoutes.home} component={HomeScreen} />
      <AppTab.Screen name={appRoutes.analysis} component={AnalysisScreen} />
      <AppTab.Screen name={appRoutes.trade} component={TradeScreen} />
      <AppTab.Screen name={appRoutes.portfolio} component={PortfolioScreen} />
    </AppTab.Navigator>
  );
};

export default AppScreenContainer;

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 45,
        backgroundColor: 'blue',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              height: 35,
              backgroundColor: 'red',
              margin: 5,
            }}>
            <Text
              style={{
                color: isFocused ? '#673ab7' : '#222',
                fontWeight: 'bold',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

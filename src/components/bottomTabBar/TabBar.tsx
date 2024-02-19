import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import tabIcon from '@lib/bottomTabIcon';
import {Icon} from '@rneui/base';

interface MyTabBarProps extends BottomTabBarProps {}

const TabBar: React.FC<MyTabBarProps> = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = tabIcon[route.name];
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
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButtonContainer}>
            <Icon
              name={label?.icon}
              type="antdesign"
              color={
                isFocused
                  ? styles.activeColor.color
                  : styles.inActiveColor.color
              }
            />
            <Text style={isFocused ? styles.activeColor : styles.inActiveColor}>
              {label?.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    margin: 5,
  },
  activeColor: {
    color: '#673ab7',
  },
  inActiveColor: {
    color: '#222',
  },
});

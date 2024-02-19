import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import appRoutes from '@lib/routes';
import TradeScreen from '@screens/app/trade/TradeScreen';
import AnalysisScreen from '@screens/app/analysis/AnalysisScreen';
import PortfolioScreen from '@screens/app/portfolio/PortfolioScreen';
import TabBar from '@components/bottomTabBar/TabBar';

const AppTab = createBottomTabNavigator();

const AppScreenContainer = () => {
  return (
    <AppTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={appRoutes.analysis}>
      <AppTab.Screen name={appRoutes.trade} component={TradeScreen} />
      <AppTab.Screen name={appRoutes.analysis} component={AnalysisScreen} />
      <AppTab.Screen name={appRoutes.portfolio} component={PortfolioScreen} />
    </AppTab.Navigator>
  );
};

export default AppScreenContainer;

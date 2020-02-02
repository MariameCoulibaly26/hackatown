import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ModeScreen from '../screens/ModeScreen';
import FindMeScreen from '../screens/FindMeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EventsScreen from '../screens/EventsScreen';
import UsersScreen from '../screens/UsersScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: ModeScreen,
    Events: EventsScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Ready',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contact${focused ? '' : '-outline'}`
          : 'md-contact'
      }
    />
  ),
};

HomeStack.path = '';

const MeetStack = createStackNavigator(
  {
    Users: UsersScreen,
    FindMe: FindMeScreen,
  },
  config
);

MeetStack.navigationOptions = {
  tabBarLabel: 'Meet',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} />
  ),
};

MeetStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Set',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

function withParentNav (Nav) {
  return class WrappedNav extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.navigator)
    }
    render () {
      return <Nav {...this.props} screenProps={this.props.navigation} />
    }
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  MeetStack
});

TabNavigator.path = '';

export default TabNavigator;

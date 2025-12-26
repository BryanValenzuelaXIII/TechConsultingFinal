import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screen/MainScreen';
import Settings from './screen/Settings';
import PreferencesScreen from './screen/PreferencesScreen';

const Tabs = createBottomTabNavigator();

function BottomNavigationBar(){
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="MainScreen" component={MainScreen}/>
            <Tabs.Screen name="PreferencesScreen" component={PreferencesScreen}/>
            <Tabs.Screen name="Settings" component={Settings}/>
        </Tabs.Navigator>
    )
    
}

export default BottomNavigationBar;
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screen/MainScreen';
import Saved from './screen/Saved';
import MapScreen from './screen/MapScreen';
import { Image } from 'react-native';

const Tabs = createBottomTabNavigator();
const mapIcon = require('../assets/icons8-map-25.png')
const search = require('../assets/icons8-search-25.png')
const heart = require('../assets/icons8-heart-25.png')

function BottomNavigationBar(){
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Search Club" component={MainScreen}
                 options={{
                        tabBarIcon: () => {
                            return(
                                <Image 
                                source={search}
                            />
                            )
                        }
                    }}
            />


            <Tabs.Screen name="Map" component={MapScreen}
                options={{
                        tabBarIcon: () => {
                            return(
                                <Image 
                                source={mapIcon}
                            />
                            )
                        }
                    }}
            />


            <Tabs.Screen name="Saved" component={Saved}
                options={{
                        tabBarIcon: () => {
                            return(
                                <Image 
                                source={heart}
                            />
                            )
                        }
                    }}
            />


        </Tabs.Navigator>
    )
    
}

export default BottomNavigationBar;
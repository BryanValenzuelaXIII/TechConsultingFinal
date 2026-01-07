import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BarList = () =>{

    function dummyFunction(){
        console.log('This function should make the modal pop up');
    }

    return(
        <View>
            <TouchableOpacity style={styles.container}
                onPress={dummyFunction}>
                <View style={styles.main} >
                    <View style={styles.icon}>
                        <Image 
                            source={require('../../assets/icons8-user-40.png')}
                            />
                    </View>
                    <View style={styles.info}>
                        <View style={styles.topInfo}>
                            <Text style={styles.barTitle}>
                                {"This is the title #1"}
                            </Text>
                            <Text style={{marginLeft: 'auto'}}>
                                {"This is for cost icon"}
                            </Text>
                        </View>
                        <View style={styles.bottomInfo}>
                            <Text>
                                {'This is for type off music'}
                            </Text>
                            <Text style={{marginLeft: 'auto'}}>
                                {"This is hours of operation"}
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default BarList

const styles = StyleSheet.create({
    container: {flex: 1,},
    main: {borderWidth: 2, height: 75, borderRadius: 13, backgroundColor: 'white', margin: 5, flexDirection: 'row'},
    icon: {flex: 1},
    info: {flex: 10, flexDirection: 'column', justifyContent:'center'},
    barTitle: {fontSize: 20, fontWeight: 'bold', marginLeft: 10},
    topInfo: {flexDirection: 'row'},
    bottomInfo: {flexDirection: 'row', },
})
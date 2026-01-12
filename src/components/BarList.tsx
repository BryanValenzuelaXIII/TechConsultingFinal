import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    title: string;
    typeOfMusic: string;
    hoursOfOperation: string;
    onPress: () => void;
};

const BarList = ({ title, typeOfMusic, hoursOfOperation, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.main}>
                <View style={styles.icon}>
                    <Image source={require('../../assets/icons8-beer-45.png')} />
                </View>

                <View style={styles.info}>
                    <View style={styles.topInfo}>
                        <Text style={styles.barTitle}>{title}</Text>
                        <Text style={{ marginLeft: 'auto', marginRight: 5}}>
                            {"This is for cost icon"}
                        </Text>
                    </View>

                    <View style={styles.bottomInfo}>
                        <Text style={{fontWeight: 'bold', marginLeft: 15 }}>{typeOfMusic}</Text>
                        <Text style={{ marginLeft: 'auto', marginRight: 5, fontWeight: 'bold' }}>
                            {hoursOfOperation}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BarList;

const styles = StyleSheet.create({
    container: { flex: 1 },
    main: {
        borderWidth: 2,
        height: 75,
        borderRadius: 13,
        backgroundColor: 'white',
        margin: 5,
        flexDirection: 'row',
    },
    icon: { flex: 1 , justifyContent: 'center'},
    info: { flex: 10, justifyContent: 'center' },
    barTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 10 },
    topInfo: { flexDirection: 'row' },
    bottomInfo: { flexDirection: 'row' },
});

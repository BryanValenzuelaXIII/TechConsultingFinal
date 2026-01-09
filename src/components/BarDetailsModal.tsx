import React from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    Image,
    ImageBackground,
} from "react-native";
import ButtonFoward from "./ButtonFoward";
import SubTitle from "./SubTitle";

type Bar = {
    name: string,
    musicType: string
    operationHours: string,
    cost: string,
    location: string,
    age: string,
};

type Props = {
    visible: boolean;
    bar: Bar | null;
    onPress: () => void;
};

const BarDetailsModal = ({ visible, bar, onPress }: Props) => {
    if (!bar) return null;

    const screenHeight = Dimensions.get("window").height;
    let img;
    switch(bar.musicType){
        case 'Rock': img = require("../../assets/Rock.jpg");
            break;
        case 'Electronic': img = require("../../assets/Electronic.jpg");
            break;
        case 'Jazz': img = require("../../assets/Jazz.jpg");
            break;
        case 'Pop': img = require("../../assets/pop.jpg");
            break;
        case 'Latin': img = require("../../assets/Latin.jpg");
            break;
        case 'Alternative': img = require("../../assets/Alternative.jpg");
            break;
        default:
            img = require("../../assets/Jazz.jpg");
            break;
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onPress}
        >
            <View style={styles.overlay}>

                <View style={[styles.container, { height: screenHeight * 0.50 }]}>
                    <View style={styles.image}>
                        <ImageBackground
                            style={{ height: 240, width: 360,}}
                            imageStyle={styles.image}
                            source={img}
                        >
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
                                    {bar.name}
                                </Text>
                            </View>
                            <View style={{ flex: 1,}}>
                                <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', }}>
                                    {bar.location}
                                </Text>
                            </View>

                        </ImageBackground>

                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 13}}>
                        <View style={{flexDirection: 'column' , justifyContent: 'center'}}>
                            <Image 
                            source={require('../../assets/icons8-music-note-30.png')}
                        />
                            <Text style={styles.text}>
                            {bar.musicType}
                        </Text>
                        </View>

                        <View style={{flexDirection: 'column' , justifyContent: 'center'}}>
                            <Image 
                            source={require('../../assets/icons8-tag-30.png')}
                        />
                            <Text style={styles.text}>
                                {bar?.cost ? bar.cost : "Free"}
                            </Text>
                        </View>

                        <View style={{flexDirection: 'column',  justifyContent: 'center'}}>
                            <Image 
                            source={require('../../assets/icons8-21-30.png')}
                        />
                        <Text style={styles.text}>
                            {bar.age}
                        </Text>
                        </View>
                        
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Image 
                            source={require('../../assets/icons8-clock-30.png')}
                        />
                        <Text style={styles.text}>
                             {bar.operationHours}
                        </Text>
                        </View>
                        
                    </View>
                    <View >
                    </View>
                    <View style={styles.close}>
                        <ButtonFoward
                            textInside="Close"
                            pressAction={onPress}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default BarDetailsModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end", // Align modal to bottom
    },
    container: {
        width: "100%",
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    text: {
        marginLeft: 10,
        fontSize: 12,
        marginBottom: 5,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: "black",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    closeText: {
        color: "white",
        fontWeight: "bold",
    },
    close: {
        marginTop: 'auto',
        alignItems: 'center'
    },
    image: {
        alignItems: 'center',
        borderRadius: 15
    },

    imageBack: {
        backgroundColor: "rgba(0,0,0,0.45)"
    }
});

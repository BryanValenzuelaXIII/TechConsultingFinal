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
    Alert,
} from "react-native";
import ButtonFoward from "./ButtonFoward";
import SubTitle from "./SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/userSlice";
import { storage } from "../utils/MmkvStorage";

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

    const dispatch = useDispatch();

    const favorites = useSelector((state: any) => state.user.favorites);

    if (!bar) return null;
    const isFavorite = favorites.includes(bar.name);

    const handleFavorite = () => {
    if (storage.getBoolean("user.isGuest")) {
        Alert.alert("Please login to use this feature");
        return;
    }

    if (isFavorite) {
        dispatch(removeFavorite(bar.name));
    } else {
        dispatch(addFavorite(bar.name));
    }
};

    const screenHeight = Dimensions.get("window").height;
    let img;
    switch (bar.musicType) {
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
                            style={{ height: 240, width: 360, }}
                            imageStyle={styles.image}
                            source={img}
                        >
                            <View style={{ flex: 1, alignSelf: 'center', marginBottom: 'auto'}}>
                                <Text style={{ color: 'white', fontSize: 30, fontWeight: '700' }}>
                                    {bar.name}
                                </Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20, marginLeft:5}}>
                                <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', alignSelf: 'center'}}>
                                    {bar.location}
                                </Text>
                            </View>

                        </ImageBackground>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 13 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Image
                                source={require('../../assets/icons8-music-note-30.png')}
                            />
                            <Text style={styles.text}>
                                {bar?.musicType ? bar.musicType : "N/A"}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Image
                                source={require('../../assets/icons8-tag-30.png')}
                            />
                            <Text style={styles.text}>
                                {bar?.cost ? bar.cost : "Free"}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Image
                                source={require('../../assets/icons8-21-30.png')}
                            />
                            <Text style={styles.text}>
                                {bar?.age ? bar.age : 'N/A'}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Image
                                source={require('../../assets/icons8-clock-30.png')}
                            />
                            <Text style={styles.text}>
                                {bar?.operationHours ? bar.operationHours : "N/A"}
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
                        <TouchableOpacity onPress={handleFavorite}>
                            <Image
                                source={
                                    isFavorite
                                        ? require("../../assets/fav.png")
                                        : require("../../assets/notFav.png")
                                }
                            />
                        </TouchableOpacity>
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    image: {
        alignItems: 'center',
        borderRadius: 15
    },

    imageBack: {
        backgroundColor: "rgba(0,0,0,0.45)"
    }
});

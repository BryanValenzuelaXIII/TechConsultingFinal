import React from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";
import ButtonFoward from "./ButtonFoward";

type Bar = {
    id: string;
    title: string;
    typeOfMusic: string;
    hoursOfOperation: string;
    description: string;
};

type Props = {
    visible: boolean;
    bar: Bar | null;
    onPress: () => void;
};

const BarDetailsModal = ({ visible, bar, onPress }: Props) => {
    if (!bar) return null;

    const screenHeight = Dimensions.get("window").height;

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onPress}
        >
            <View style={styles.overlay}>
                {/* Bottom sheet container */}
                <View style={[styles.container, { height: screenHeight * 0.66 }]}>
                    <Text style={styles.title}>{bar.title}</Text>

                    <Text style={styles.text}>{bar.typeOfMusic}</Text>
                    <Text style={styles.text}>{bar.hoursOfOperation}</Text>

                    <Text style={[styles.text, { marginTop: 10 }]}>
                        {bar.description}
                    </Text>

                    <ButtonFoward 
                        textInside="Close"
                        pressAction={onPress}
                    />
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
        fontSize: 16,
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
});

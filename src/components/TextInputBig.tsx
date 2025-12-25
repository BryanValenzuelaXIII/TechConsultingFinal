import { memo } from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

type Props = TextInputProps & {
  typeOfText?: TextInputProps["textContentType"];
  placeHolder?: string;
};

const TextInputBig = ({ typeOfText, placeHolder="", ...rest }: Props) => {
    return(
        <TextInput
            textContentType= {typeOfText}
            placeholder={placeHolder}
            style = {styles.modernText}
            {...rest}
            >
        </TextInput>
    )
}

export default TextInputBig;

const styles = StyleSheet.create({
    modernText: {borderRadius: 15,
        height: 40,
        borderWidth: 1, 
        margin: 10, 
        marginHorizontal: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,}
})
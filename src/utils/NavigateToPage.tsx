import { useNavigation } from "@react-navigation/native";

type Props = {
  screenName: string;
};


const NavigateToPage = ({screenName}: Props) => {
    const navigation = useNavigation();

        //navigation.navigate(screenName);
}

export {NavigateToPage};
import { Text, View } from "react-native"
import Animated from 'react-native-reanimated';
import { SlideInDown, BounceOutDown } from 'react-native-reanimated';
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { theme } from "@/theme";

type Props = {
    quantity: number
    onClear: () => void
    onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch} : Props) {
    return  (
        <Animated.View
        style={styles.container}
        entering={SlideInDown.duration(500)}
        exiting={BounceOutDown}
        >
            <View style={styles.header}>
                <Text style={styles.label}>
                    {quantity} ingredientes selecionados
                </Text>
                <MaterialIcons 
                color={theme.colors.gray_400} 
                name="close" size={24} 
                onPress={onClear}/>
            </View>
        </Animated.View>
    )
}

import { StyleSheet, Text, View } from 'react-native';

export default function Groups() {
    return (
        <View style={styles.container}>
            <Text>Groups!</Text>
            <Text>Groups 3!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

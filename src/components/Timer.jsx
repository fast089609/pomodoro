import { View, StyleSheet, Text } from "react-native"


const Timer = ({time}) => {
    const formattedTime = `${Math.floor(time/60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
  return (
    <View style={style.container}>
        <Text style={style.time}>{formattedTime}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 15,
        flex: .3,
        justifyContent: 'center'
    },
    time: {
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#333333"
    }
});

export default Timer
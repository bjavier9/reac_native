import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 100,
        backgroundColor:"#fff",
        borderColor:"#00a680",
        borderWidth:1,
        borderRadius:20,
    },
    view:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"#00a680",
        textTransform:"uppercase",
        marginTop:10
    }
});
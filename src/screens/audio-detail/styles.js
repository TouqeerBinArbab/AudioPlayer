import { StyleSheet } from "react-native";

import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
    },
    loaderView: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
        justifyContent: "center",
        alignItems: 'center'

    },
    name: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold'

    },
    image: {
        ...StyleSheet.absoluteFill,
        width: screenWidth,
        height: screenHeight
    },
    cellContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",

        padding: 16,
        backgroundColor: '#000000aa',
        marginTop: 16,
        borderRadius: 16


    },
    singerName: {
        fontSize: 16,
        color: '#fff',

    },
    songName: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '700'

    },
    duration: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '700'
    }

})
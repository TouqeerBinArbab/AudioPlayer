import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";


const AudioCell = ({
    singerName = '',
    songName = '',
    duration = '',
    thumbnail = null,
    onPress = () => { }
}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.cellContainer}>
            <Image source={{ uri: thumbnail }} style={{ width: 80, height: 80, borderRadius: 20, }} />
            <View style={{ flex: 1, paddingLeft: 12 }}>
                <Text style={styles.songName}>{songName}</Text>
                <Text style={styles.singerName}>{singerName}</Text>
            </View>
            <Text style={styles.duration}>{duration}</Text>
        </TouchableOpacity>
    )
}

export default AudioCell;

import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import MediaPlayer from "./MediaPlayer";

const AudioDetail = ({ navigation, route }) => {
    const [isPlay, setIsPlay] = useState(false)
    const { audio } = route.params
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: audio.thumbnail }} />

            <MediaPlayer paused={isPlay} source={audio.songUrl} />

            <TouchableOpacity onPress={() => setIsPlay(s => !s)} style={{ alignItems: 'center', position: 'absolute', alignSelf: 'center', bottom: 100, left: 0, right: 0 }}>
                <Text style={styles.duration}>{isPlay ? 'Play' : 'Pause'}</Text>
            </TouchableOpacity>

        </View >
    )
}

export default AudioDetail;

import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import AudioCell from "./audio-cell";

const Home = ({ navigation }) => {

    const [isLoading, setIsloading] = useState(false)
    const [audios, setAudios] = useState([])




    const getAudios = () => {
        setIsloading(true)
        return fetch('https://pets-planet.herokuapp.com/common/getMusic')
            .then(response => response.json())
            .then(json => {
                setIsloading(false)
                setAudios(json)
                return json.movies;
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        getAudios()
    }, [])

    if (isLoading) {
        return (
            <View style={styles.loaderView}>
                <ActivityIndicator size={'large'} color={'#fff'} />
            </View>
        )
    }
    const _onAudio = (audio) => {
        navigation.navigate('AudioDetail', { audio })
    }
    const _renderItem = ({ item, index }) => {
        const { singerName, songDuration, songName, thumbnail } = item;
        return <AudioCell onPress={() => _onAudio(item)} thumbnail={thumbnail} singerName={singerName} songName={songName} duration={songDuration} />
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: audios[0]?.thumbnail }} />
            <View style={{ flex: 1, padding: 16, justifyContent: 'flex-end' }}>
                <Text style={styles.name}>{audios[0]?.singerName}</Text>
            </View>

            <FlatList
                data={audios}
                style={{ flex: 1 }}
                renderItem={_renderItem}
            />
        </View>
    )
}

export default Home;

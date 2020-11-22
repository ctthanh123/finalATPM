import React, { Component } from 'react';
import { View, Text,
    Image, FlatList } from 'react-native';
import styles from '../styles/favourites';

class Favourites extends Component {
    static navigationOptions = ({ navigation }) => {
        let tabBarLabel = 'Favourites';
        let tabBarIcon = () => {
            return (
                <Image 
                    style={styles.barIcon}
                    source={require('../assets/heart.png')}
                />
            );
        }
        return {
            tabBarLabel,
            tabBarIcon
        };
    };

    render() {
        return (
            <View style={styles.containerFavourite}>
                <Text style={styles.text}>FAVOURITES is coming...</Text>
            </View>
        );
    }
}

export default Favourites;
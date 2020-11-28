import React, { Component } from 'react';
import { View, Text,
    Image, FlatList } from 'react-native';
import styles from '../styles/favourites';
import PhotosData from '../datas/fakeDatas';
import Header from './Header';

class FavouriteItem extends Component {
    render() {
        return (
            <View 
                style={styles.favouriteView} 
            >
                <Image source={{uri: this.props.item.photoURL}} style={styles.photo} />
                <View style={styles.details}>
                    <Image style={styles.logo} source={require('../assets/fb.png')} />
                    <Text style={styles.text}>
                        {this.props.item.name}
                    </Text>
                </View>
            </View>
        );
    }
}

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
            <View style={styles.container}>
                <Header />
                <View style={styles.containerFavourite}>
                    <FlatList 
                        data={PhotosData}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item, index }) => {
                            return <FavouriteItem item={item} index={index} />;
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default Favourites;
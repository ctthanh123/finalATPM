import React, { Component } from 'react';
import { View, Image, Text,
    TouchableHighlight } from 'react-native';
import styles from '../styles/header';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    Secret Gallery
                </Text>
                <View style={styles.viewIcon}>
                    <TouchableHighlight
                        underlayColor='none'
                        onPress={() => {
                            console.log('hello');
                        }}
                    >
                        <Image source={require('../assets/search1.png')} style={styles.icon1}/>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        underlayColor='none'
                        onPress={() => {
                            console.log('hello');
                        }}
                    >
                        <Image source={require('../assets/add.png')} style={styles.icon2}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import { View, Text, TouchableHighlight,
    Image, TextInput } from 'react-native';
import Button from 'react-native-button';
import TouchID from 'react-native-touch-id';
import styles from '../styles/touchID';

class TouchIDLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            biometryType: null,
            password: ''
        };
    }

    componentDidMount() {
        TouchID.isSupported()
        .then(biometryType => {
          this.setState({ biometryType });
        })
    }

    handleLogin = () => {
        const config = {
            title: 'Xác thực vân tay',
            imageColor: '#2ecc71',
            imageErrorColor: 'tomato',
            sensorDescription: 'Chạm vào cảm biến trên Smartphone', 
            sensorErrorDescription: 'Failed',
            cancelText: 'Hủy'
        };

        //this.props.navigation.navigate('BottomNavigation');
        TouchID.authenticate('Đăng nhập Secret Gallery', config)
            .then(sucess => {
                this.props.navigation.navigate('BottomNavigation');
                console.log('LOGIN SUCESS');
            })
            .catch(error => {
                console.log(error);
                alert('Đăng nhập thất bại! Thử lại');
            });
    }

    handlePassword = () => {
        let passwd = this.state.password.trim();
        if(passwd === '12322132') {
            this.props.navigation.navigate('BottomNavigation');
            console.log("LOGIN SUCESS");
        } else {
            alert('SAI MÃ PIN!!!');
        }
    }

    render() {
        return (
            <View style={styles.containerView}>
                <Text style={styles.title}>
                    Secret Gallery
                </Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Nhập mã PIN'
                    onChangeText={(pass) => this.setState({ password: pass })}
                    keyboardType="decimal-pad"
                    autoCompleteType="password"
                    secureTextEntry={true}
                />
                <Button style={styles.button2}
                    onPress={this.handlePassword}
                >
                   <Text style={styles.text3}>
                       ĐĂNG NHẬP
                   </Text>
                </Button>

                <Text style={styles.text2}>
                    Hoặc
                </Text>

                <Button style={styles.button}
                    onPress={this.handleLogin}
                >
                    <Image source={require('../assets/finger.png')} style={styles.finger} />
                </Button>
                <Text style={styles.text}>
                    Hoặc
                </Text>

                <Button 
                    style={styles.button3}
                    onPress={() => {
                        this.props.navigation.navigate("Pattern");
                    }}
                >
                   SỬ DỤNG PATTERN
                </Button>
            </View>
        );
    }
}

export default TouchIDLogin;


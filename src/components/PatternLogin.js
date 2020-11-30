import React, {Component} from 'react';
import { View, Text } from 'react-native';
import PasswordGesture from 'react-native-gesture-password';
import styles from '../styles/pattern';

let Password1  = '12578';

class PatternLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'NHẬP HÌNH VẼ MẬT KHẨU CỦA BẠN',
            status: 'normal'
        }
    }
    
    onEnd(password) {
        if (password == Password1) {
            this.setState({
                status: 'right',
                message: 'MẬT KHẨU ĐÚNG, ĐĂNG NHẬP THÀNH CÔNG'
            });
            console.log('LOGIN SUCESS');
            this.props.navigation.navigate('BottomNavigation');
        } else {
            this.setState({
                status: 'wrong',
                message: 'MẬT KHẨU SAI, THỬ LẠI!'
            });
            console.log('LOGIN FAIL');
        }
    }

    onStart() {
        this.setState({
            status: 'normal',
            message: 'NHẬP HÌNH VẼ MẬT KHẨU CỦA BẠN'
        });
    }

    onReset() {
        this.setState({
            status: 'normal',
            message: 'NHẬP LẠI LẦN NỮA'
        });
    }

    render() {
        return (
            <PasswordGesture
                ref='pg'
                status={this.state.status}
                message={this.state.message}
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
                innerCircle={true}
                outerCircle={true}
                normalColor='#E08283'
            />
        );
    }
}

export default PatternLogin;
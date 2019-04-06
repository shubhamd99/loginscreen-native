import React, { Component } from 'react';
import { 
    StyleSheet, Text, View, Image, TouchableWithoutFeedback, 
    StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ImageBackground,
    AsyncStorage
} from 'react-native';

const userInfo = { username: 'admin', password: '1234' }

export default class Login extends Component {

    constructor(props) {
      super(props)
      this.state = {
         username: '',
         password: ''
      };
    };
    

    render(){
        return(
            <SafeAreaView style={styles.container}>
             <ImageBackground source={require('../images/bg.png')} style={{width: '100%', height: '100%'}}>
              <StatusBar barStyle="light-content" />
                 <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container} >
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo}
                              source={require('../images/logo2.png')}
                            > 
                            </Image>
                        </View>
                        <View style={styles.infoContainer}>
                            <TextInput style={styles.input} 
                                placeholder="Enter username"
                                placeholderTextColor='rgba(0,0,0,0.8)'
                                returnKeyType='next'
                                keyboardType='email-address'
                                autoCorrect={false}
                                onChangeText={(username) => this.setState({ username })}
                                value={this.state.username}
                                onSubmitEditing={() => this.refs.txtPassword.focus()}  
                            />
                             <TextInput style={styles.input} 
                                placeholder="Enter password"
                                placeholderTextColor='rgba(0,0,0,0.8)'
                                returnKeyType='go'
                                secureTextEntry
                                autoCorrect={false}
                                ref={"txtPassword"}
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                            />
                            <TouchableOpacity style={styles.buttonContainer} onPress={this._login}>
                               <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                </ImageBackground>
            </SafeAreaView>
        )
    }

    _login = async() => {
        if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            await AsyncStorage.setItem('isLoggedIn', '1');
          alert('Logged In...')  
        } else {
            alert('Username or Password in invalid!')
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginBottom: 20,
    },
    logo: {
        width: 250,
        height: 60,
        opacity: 0.6
    },
    infoContainer: {
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        //backgroundColor: 'red',
        padding: 20,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 50,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingHorizontal: 30,
        marginBottom: 20,
        borderRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        width: '50%',
        backgroundColor: '#AB3AFF',
        paddingVertical: 15,
        borderRadius: 100,
        marginBottom: 20,
        elevation: 2,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    }
})
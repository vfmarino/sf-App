import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function Main1() {
    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Usuário:</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.text}>Senha:</Text>
            <TextInput style={styles.textInput} />
            <TouchableOpacity style={styles.button}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}



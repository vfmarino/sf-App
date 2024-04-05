import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import Main1 from './main1';


export default function Main() {
    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Fazer Login</Text>
            <Main1/>
       
        </View>
    );
}



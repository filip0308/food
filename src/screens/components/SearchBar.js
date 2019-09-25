import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle} >
            <Ionicons name="md-search" style={styles.iconStyle} /> 
            <TextInput
            autoCapitalize="none"
            autoCorrect={false} 
            style={styles.inputStyle} 
            placeholder="Search" 
            value={term} 
            onChangeText={onTermChange} 
            onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name} >{result.name}</Text>
            <Text style={styles.star} >{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20
    },
    image: {
        width: 250,
        borderRadius: 5,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    star: {
        fontSize: 12
    }
});

export default ResultsDetail;
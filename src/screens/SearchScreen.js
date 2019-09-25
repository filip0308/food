import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../screens/components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './components/ResultsList';


const SearchScreen = ({ navigation }) => {
const [term, setTerm] = useState('');
const [searchApi, results, errorMassage] = useResults();

const filterResultsByPrice = (price) => {
    return results.filter(result => {
        return result.price === price;
    });
};

    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMassage ? <Text>{errorMassage}</Text> : null}
            <ScrollView>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = ({name}) => {
    return(
    <View style={styles.item}>
        <Text style={{color: 'black'}}>{name}</Text>
    </View>
    );
    }

const FlatListPrac= () => {
        const countries = [
        {
            id: '1',
            name: 'United States',
        },
        {
            id: '2',
            name: 'United Kingdom',
        },
        {
            id: '3',
            name: 'Israel',
        },
        {
            id: '4',
            name: 'India',
        },
        {
            id: '5',
            name: 'Nigeria',
        },{
            id: '6',
            name: 'uganda',
        },{
            id: '7',
            name: 'Colombia',
        },{
            id: '8',
            name: 'Bangladesh',
        },{
            id: '9',
            name: 'india'
        },{
            id: '10',
            name: 'pakistan',
        },{
            id: '11',
            name: 'Bhutan',
        },{
            id: '12',
            name: 'Germany',
        },{
            id: '13',
            name: 'Brazil',
        },{
            id: '14',
            name: 'argentina',
        }];

        const renderItem = ({item})=>(
            <Item name={item.name}/>
        );
        return (
        <View style={styles.container}>
            <FlatList
                data={countries}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
        );
        }
       
const styles = StyleSheet.create({
        container: {
            marginTop:30,
            padding:2,
        },
        item: {
            backgroundColor: 'orange',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
        },
        });

  export default FlatListPrac;
  
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '../listItem/ListItem';
import React from 'react'
import { addNew } from '../../store/slices/database';

const List = () => {

    const dispatch = useDispatch();
    
    const {list} = useSelector(state => state.database)

    const onAdd = () => {
        const random = Math.round(Math.random() * (999) + 1);
        const newItem = {
            id: `${random}`,
            title: `Title ${random}`,
            image: `Image ${random}`,
            description: `Description ${random}`,
            author: `Author ${random}`,
            date: `Date ${random}`,
            location: `Location ${random}`
        }
        
        dispatch(addNew(newItem));
    }
    
    return (
    <>
        <FlatList style={listStyles.container}

            //Infomación de la lista
            data={list}

            //Renderizado
            renderItem={data => (<ListItem data={data}/>)}

            //Key
            keyExtractor={(item) => item.id}
        />
    </>
        
    )
}

const listStyles = StyleSheet.create({
    container: {
        width:'100%'        
    },
    add: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color:'#fff'
    }
});

export default List;

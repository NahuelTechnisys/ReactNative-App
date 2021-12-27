import { StyleSheet, Text, View } from "react-native";

import Colors from '../../constants/Colors';
import React from 'react'

const ListItem = (props) => {
    return (
        <View style={listItemsStyles.listItem}>

            <Text style={listItemsStyles.title}>{props.data.item.title}</Text>

            <View style={listItemsStyles.infoContainer}>
                <Text style={listItemsStyles.image}>{props.data.item.image}</Text>
                <Text style={listItemsStyles.date}>{props.data.item.date}</Text>
                <View style={listItemsStyles.newFooter}>
                    <Text style={listItemsStyles.author}>{props.data.item.author}</Text>
                    <Text style={listItemsStyles.location}>{props.data.item.location}</Text>
                </View>
            </View>

            {/* <View style={listItemsStyles.btnContainer} >
                <View style={listItemsStyles.deleteBtnContainer} >
                    <Button title='Eliminar' onPress={() => props.handleDelete(props.data.item.id)} /> 
                </View>
                <View style={listItemsStyles.moreBtnContainer} >
                        <Button title='Ver más' onPress={() => props.handleSeeMore(props.data.item)} />
                </View>
            </View> */}
            
        </View>
    )
}

const listItemsStyles = StyleSheet.create({
    listItem: {
        width: '90%',
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: Colors.cards,
        borderRadius: 7
    },
    title: {
        color: Colors.font,
        alignSelf: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    infoContainer: {
        width: '75%',
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        alignSelf: 'center',
        height: 150,
        backgroundColor: Colors.second_cards,
        borderRadius: 7
    },
    date: {
        color: Colors.second_font,
        marginBottom: 20,
        alignSelf: 'flex-end'
    },
    newFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    author: {
        color: Colors.font
    },
    location: {
        color: Colors.font
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
    },
    deleteBtnContainer: {
        width: '25%'
    },
    moreBtnContainer: {
        width: '25%'
    },
});

export default ListItem;

import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import LogIn from './logIn/LogIn';
import React from 'react'

const User = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    return (
        <View>
            {
                user != null
                ? <Text></Text>
                : <LogIn/>
            }
        </View>
    )
}

export default User

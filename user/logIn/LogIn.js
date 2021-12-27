import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import Colors from '../../constants/Colors';

// const createBar = () => {
    //     return user != null
    //         ? <>
    //             <Tabs.Screen name='Inicio'
    //                     component={List} 
    //                     options={{
    //                         tabBarIcon:({focused}) => (
    //                         <View>
    //                             <Text>Inicio</Text>
    //                         </View> 
    //                         )
    //                     }}        
    //                 />
    //                 <Tabs.Screen name='Agregar'
    //                     component={user!= null ? AddItem : User}
    //                     options={{
    //                         tabBarIcon: ({ focused }) => (
    //                             <View>
    //                                 <Icon
    //                                     type='material-community'
    //                                     name='plus'
    //                                     color='#777'
    //                                     raised
    //                                     containerStyle={listStyles.add}
    //                                 />
    //                             </View>
    //                         )
    //                     }}   
    //                 />
    //                 <Tabs.Screen name={user!= null ? 'Perfil' : 'Iniciar Sesión'}  
    //                     component={User}
    //                     options={{
    //                         tabBarIcon: ({ focused }) => (
    //                             <View>
    //                                 {
    //                                     user != null
    //                                     ?<Text>Perfil</Text>
    //                                     :<Text>Iniciar Sesión</Text>
    //                                 }
                                    
    //                             </View>
    //                         )
    //                     }}    
    //                 />
    //         </>
    //         : <>
    //         <Tabs.Screen name='Inicio'
    //             component={List} 
    //             options={{
    //                 tabBarIcon:({focused}) => (
    //                 <View>
    //                     <Text>Inicio</Text>
    //                 </View> 
    //                 )
    //             }}        
    //         />
    //         <Tabs.Screen name='Agregar' 
    //             component={user!= null ? AddItem : User}
    //             options={{
    //                 tabBarIcon: ({ focused }) => (
    //                     <View>
    //                         <Icon
    //                             type='material-community'
    //                             name='plus'
    //                             color='#777'
    //                             raised
    //                             containerStyle={listStyles.add}
    //                         />
    //                     </View>
    //                 )
    //             }}   
    //         />
    //         <Tabs.Screen name={user!= null ? 'Perfil' : 'Iniciar Sesión'}  
    //             component={User}
    //             options={{
    //                 tabBarIcon: ({ focused }) => (
    //                     <View>
    //                         {
    //                             user != null
    //                             ?<Text>Perfil</Text>
    //                             :<Text>Iniciar Sesión</Text>
    //                         }
                            
    //                     </View>
    //                 )
    //             }}    
    //         />
    //         </>
    // }stants/Colors';

const LogIn = ({navigation}) => {

    const [user, setUser] = useState({ name: 'nahuel', pass: '123' });
    const [userName, setUserName] = useState('');
    const [password,setPassword] = useState('');

    const handleUserName = (user) => {
        setUserName(user);
    }

    const handlePassword = (pass) => {
        setPassword(pass);
    }

    const onLogIn = () => {
        (user.name == userName && user.pass == password)
            ? navigation.navigate('NewsList')
            : alert('Usuario inválido.')


    }

    return (
        <View style={LogInStyle.main}>
            <Text style={LogInStyle.appTitle} >Las noticias de la gente</Text>
            <View style={LogInStyle.container}>
                <View style={{width: '100%'}}>
                    <View style={LogInStyle.inputArea}>
                        <Text style={LogInStyle.label}>Usuario</Text>
                        <TextInput style={LogInStyle.input} autoComplete="userName" onChangeText={ user => handleUserName(user) }/>
                    </View>
                    <View style={LogInStyle.inputArea}>
                        <Text style={LogInStyle.label}>Contraseña</Text>
                        <TextInput style={LogInStyle.input} autoComplete="password" onChangeText={ pass => handlePassword(pass) } />
                    </View>
                </View>
                <View style={LogInStyle.buttonsArea} >
                    <Button title='Registrarse' style={LogInStyle.button} />
                    <Button title='Ingresar' style={LogInStyle.button} onPress={() => onLogIn()}/>
                </View>
            </View>
        </View>
    );
}

const LogInStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width:'90%',
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 0,
        paddingLeft: 0,
        backgroundColor: Colors.cards,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appTitle: {
        fontWeight: 'bold',
        color: Colors.font
    },
    inputArea: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 20
    },
    label:{
        paddingLeft: 10,
        fontWeight: 'bold',
        color: Colors.font
    },
    input: {
        marginTop: 5,
        borderRadius: 20,
        width: '100%',
        padding: 10,
        backgroundColor:Colors.details
    },
    buttonsArea: {
        width:'90%',
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 20
    },
    button: {
        margin:'auto'
    }
});

export default LogIn;
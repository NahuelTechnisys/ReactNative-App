import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import AddItem from "../add/AddItem";
import { Icon } from "react-native-elements";
import List from "../list/List";
import LogIn from '../../user/logIn/LogIn';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import User from "../../user/User";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {    

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    console.log(user!=null);
    
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
    // }
    return (
        <NavigationContainer>

            <Tabs.Navigator screenOptions={{
                headerShowm: false,
                tabBarShowLabel: false
            }} 
                tabBarOptions={{
                    showLabel: false
            }}
                initialRouteName="Home"
            >
                <Tabs.Screen name='Inicio'
                    component={List} 
                    options={{
                        tabBarIcon:({focused}) => (
                        <View>
                            <Text>Inicio</Text>
                        </View> 
                        )
                    }}        
                />
                <Tabs.Screen name='Agregar'
                    component={user!= null ? AddItem : AddItem} //por ahora no hay que logearse
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Icon
                                    type='material-community'
                                    name='plus'
                                    color='#777'
                                    raised
                                    containerStyle={listStyles.add}
                                />
                            </View>
                        )
                    }}   
                />
                <Tabs.Screen name={user!= null ? 'Perfil' : 'Iniciar Sesión'}  
                    component={User}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                {
                                    user != null
                                    ?<Text>Perfil</Text>
                                    :<Text>Iniciar Sesión</Text>
                                }
                                
                            </View>
                        )
                    }}    
                />
                        
            </Tabs.Navigator>

        </NavigationContainer>
    );
}
const listStyles = StyleSheet.create({
    add: {
        position: 'relative',
        bottom: 25,
        color: '#fff'
    }
});
export default TabNavigator;
import {View, Text, TouchableOpacity} from 'react-native' 

import {
  useNavigation,
  NavigationContainer,
} from '@react-navigation/native';

export default function Login () {

    const navigation = useNavigation();

    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
            <Text>
               Entrar
            </Text>
            </TouchableOpacity>
        </View>
    )
} 

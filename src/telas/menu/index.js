import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

function Tela1({mudaTela}) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Tela 1</Text>

            <TouchableOpacity style={styles.botao} onPress={() => mudaTela(0)}>
                <Text style={styles.textoBtn}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}

function Tela2({mudaTela}) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Tela 2</Text>

            <TouchableOpacity style={styles.botao} onPress={() => mudaTela(0)}>
                <Text style={styles.textoBtn}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}

function Home({mudaTela}) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Home</Text>

            <TouchableOpacity style={styles.botao} onPress={() => mudaTela(1)}>
                <Text style={styles.textoBtn}>Tela 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => mudaTela(2)}>
                <Text style={styles.textoBtn}>Tela 2</Text>
            </TouchableOpacity>
        </View>
    )
}

export default function Navegacao() {

    const [tela, setTela] = useState(0); 

    function mudaTela(tela) {
        setTela(tela);
    }

    switch (tela) {
        case 1:
            return <Tela1 mudaTela={mudaTela} />;

        case 2:
            return <Tela2 mudaTela={mudaTela} />;

        default:
            return <Home mudaTela={mudaTela} />;
    }
}
import { Text, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'


export const DataPerson = () => {
    return (
        <View style={styles.container_rows}>
            <View style={styles.container}>
                <View style={styles.col_bac}><Text style={styles.text_bac}>Datos de Usuario</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Nombre:</Text></View>
                <View style={styles.col}><Text style={styles.text}>Jonathan Espitia</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Edad:</Text></View>
                <View style={styles.col}><Text style={styles.text}>34</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Teléfono:</Text></View>
                <View style={styles.col}><Text style={styles.text}>3025268469</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Email:</Text></View>
                <View style={styles.col}><Text style={styles.text}>jdespitia@sena.edu.co</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Dirección:</Text></View>
                <View style={styles.col}><Text style={styles.text}>Calle 10a #14-04</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col_bac}><Text style={styles.text_bac}>Perfil Laboral</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur esse quod sint suscipit, officiis debitis voluptas ad laudantium at minima sapiente voluptates nihil voluptatibus necessitatibus illo accusamus nemo excepturi perferendis!
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.col_bac}><Text style={styles.text_bac}>Skils</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Lenguaje:</Text></View>
                <View style={styles.col}><Text style={styles.text}>Años</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Html</Text></View>
                <View style={styles.col}><Text style={styles.text}>12</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Css3</Text></View>
                <View style={styles.col}><Text style={styles.text}>12</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>JavaScript</Text></View>
                <View style={styles.col}><Text style={styles.text}>12</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Php</Text></View>
                <View style={styles.col}><Text style={styles.text}>12</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Ionic</Text></View>
                <View style={styles.col}><Text style={styles.text}>6</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Mysql</Text></View>
                <View style={styles.col}><Text style={styles.text}>10</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col_bac}><Text style={styles.text_bac}>Otros</Text></View>
            </View>
            <View style={styles.container}>
                <View style={styles.col}><Text style={styles.text}>Sigue mi Portafolio para mas información <a href='#'>Jonathan.protafolio.web</a></Text></View>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({

    TextBody: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 500,
        textAlign: 'center'
    },
    container: {
        flexDirection: 'row',
        padding: 5,
        width: '80%',

        textAlign: 'center'

    },
    container_rows: {
        marginTop: 40,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
    },
    col: {

        flex: 3
    },
    col_bac: {
        flex: 3,
        backgroundColor: '#61DAFB'
    },
    text: {
        textAlign: 'center',
    },
    text_bac: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default DataPerson
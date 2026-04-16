import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { Botao } from '../components/Botao';
import { Contador } from '../components/Contador';


export default function PaginaHome() {

  return (
    <View>  
      <Contador numeroLegal={1}></Contador>

      <Botao title="Clique aqui" onPress={() => console.log('Botão pressionado')} />
      <Botao title="Clique aqui" onPress={() => console.log('Botão pressionado')} />
    </View>
  );
}

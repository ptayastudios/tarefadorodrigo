import { View, Text, Button } from 'react-native';
import { useState } from 'react';


function Contador({ numeroLegal = 0 }: { numeroLegal?: number }) {


  return (
    <View>
      <Text>Contador: {numeroLegal}</Text>
    </View>
  );
}

export { Contador };
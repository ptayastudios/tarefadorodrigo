import { View, Button } from 'react-native';

function Botao({ onPress, title }: { onPress: () => void; title: string }) {
  return (
    <View style={{ margin: 10 }}>
      <Button onPress={onPress} title={title} />
    </View>
  );
}     

export { Botao };
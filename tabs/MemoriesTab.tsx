import { StyleSheet, Text, View } from 'react-native';

export default function MemoriesTab() {
   return (
    <View style={styles.container}>
      <Text style={styles.text}>Daily Memories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DEC9',
    alignItems: 'center',
    paddingTop: 65
  },
  text: {
    width: 239,
    height: 96, 
    textAlign: 'center', 
    color: '#8D7B68', 
    fontSize: 35, 
    fontWeight: '300', 
    textTransform: 'uppercase', 
    lineHeight: 40,
    letterSpacing: 7
  }
});

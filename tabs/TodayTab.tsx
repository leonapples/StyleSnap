import { StyleSheet, Text, View } from 'react-native';

export default function TodayTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today’s Style</Text>
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
    fontSize: 40, 
    fontWeight: '300', 
    textTransform: 'uppercase', 
    lineHeight: 45,
    letterSpacing: 7
  }
});

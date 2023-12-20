import { StyleSheet, Text, View } from 'react-native';
import GridItem from './GridItem';
import AddItem from './AddItem';

export default function WardrobeGrid() {
  return (
    <>
      <GridItem />
      <AddItem />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DEC9',
    alignItems: 'center',
    paddingTop: 70
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

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

export default function AddItem(props: any) {
  const {
    navigation
  } = props;

  return (
    <>
      <View style={styles.square}>
        <Svg onPress={() => console.log("Add Item!")} width="100%" height="100%" viewBox="0 0 150 150" fill="none">
          <Rect x="0.5" y="0.5" width="149" height="149" rx="19.5" fill="#C8B6A6"/>
          <Rect x="0.5" y="0.5" width="149" height="149" rx="19.5" stroke="#C8B6A6"/>
          <Rect x="12.5" y="11.5" width="125" height="127" rx="9.5" fill="#A4907C"/>
          <Rect x="12.5" y="11.5" width="125" height="127" rx="9.5" stroke="#A4907C"/>
          <Rect x="35" y="72" width="79" height="6" fill="#C8B6A6"/>
          <Rect x="72" y="114" width="79" height="6" transform="rotate(-90 72 114)" fill="#C8B6A6"/>
        </Svg>  
      </View>
      <Text 
        style={styles.text}
        numberOfLines={1}
      >
        Add Item
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    width: "40%",
    textAlign: 'center', 
    color: '#8D7B68', 
    fontSize: 16, 
    fontWeight: '600', 
    textTransform: 'uppercase', 
    lineHeight: 40,
  },
  square: {
    borderRadius: 20,
    width: '35%',
    aspectRatio: 1
  }
});

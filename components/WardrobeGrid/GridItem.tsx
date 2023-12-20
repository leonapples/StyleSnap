import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function GridItem(props: any) {
  const {
    item,
    navigation,
  } = props;

  return (
    <>
      <TouchableOpacity 
        activeOpacity={0.7}
        style={styles.square}
        onPress={() => console.log('Inspect Item')}
      >
        <Image 
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text 
        style={styles.text}
        numberOfLines={1}
      >
        Item Name Item Name Item Name Item Name Item Name
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {

  },
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
    backgroundColor: "#C8B6A6",
    borderRadius: 20,
    height: 0,
    width: '35%',
    paddingTop: '35%'
  }
});

import React, { memo } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import MannequinItem from './MannequinItem';
import { Outfit } from '../../utils/schemas';
import {
  MemoriesStackParamList,
  TodayStackParamList,
} from '../../utils/navigatorTypes';
import { NavigationProp } from '@react-navigation/native';

interface MannequinProps {
  // Outfit to display
  outfit?: Outfit;

  // Whether this is today's outfit - today's outfit is editable
  today: boolean;

  // Navigation object
  navigation:
    | NavigationProp<TodayStackParamList, 'TodayPage'>
    | NavigationProp<MemoriesStackParamList, 'OutfitPage'>;
}

/**
 * Mannequin component that displays an outfit, as well as allows editing of today's outfit.
 *
 * @component
 * @param props {MannequinProps}
 * @returns {JSX.Element} the Mannequin component.
 */
const Mannequin = (props: MannequinProps): JSX.Element => {
  const { outfit = {}, today, navigation } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.mannequin}
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require('../../assets/mannequin.png')}
      />
      <View style={styles.columnContainer}>
        <View style={styles.column}>
          <MannequinItem
            category="outerwear"
            outfit={outfit}
            today={today}
            navigation={navigation}
          />
          <MannequinItem
            category="fragrance"
            outfit={outfit}
            today={today}
            navigation={navigation}
          />
        </View>
        <View style={styles.column}>
          <MannequinItem
            category="headwear"
            outfit={outfit}
            today={today}
            navigation={navigation}
          />
          <MannequinItem
            category="top"
            outfit={outfit}
            today={today}
            navigation={navigation}
          />
          <MannequinItem
            category="bottom"
            outfit={outfit}
            today={today}
            navigation={navigation}
          />
          <MannequinItem
            category="footwear"
            outfit={outfit}
            today={today}
            navigation={navigation}
          />
        </View>
        <View style={styles.column}>
          <MannequinItem
            category="accessory"
            keyId="accessory1"
            outfit={outfit}
            today={today}
            navigation={navigation}
          />
          <MannequinItem
            category="accessory"
            keyId="accessory2"
            outfit={outfit}
            today={today}
            navigation={navigation}
          />
          <MannequinItem
            category="accessory"
            keyId="accessory3"
            outfit={outfit}
            today={today}
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mannequin: {
    position: 'absolute',
    left: '50%',
    bottom: '10%',
    transform: [{ translateX: -Dimensions.get('window').width / 4 }],
    width: '50%',
    opacity: 0.1,
    resizeMode: 'contain',
  },
  columnContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '85%',
    marginBottom: 120,
  },
  column: {
    flexDirection: `column`,
    height: '100%',
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default memo(Mannequin);

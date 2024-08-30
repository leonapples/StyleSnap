import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../utils/constants';

interface MainHeaderProps {
  // text to display in the header
  text: string;
}

/**
 * Component for headers of the home pages of each tab.
 *
 * @param props {MainHeaderProps}
 * @returns {JSX.Element} the MainHeader component.
 * @example
 * returns (
 *  <MainHeader text="YOUR WARDROBE"/>
 * )
 */
const MainHeader = (props: MainHeaderProps): JSX.Element => {
  const { text } = props;

  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    width: 239,
    height: 90,
    marginBottom: -15,
    textAlign: 'center',
    color: colors.foreground,
    fontSize: 35,
    fontWeight: '300',
    textTransform: 'uppercase',
    lineHeight: 40,
    letterSpacing: 7,
  },
});

export default memo(MainHeader);

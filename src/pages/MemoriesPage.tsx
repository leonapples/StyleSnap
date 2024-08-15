import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainHeader from '../components/MainHeader';
import PageContainer from '../components/PageContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { CalendarList } from 'react-native-calendars';
import { colors } from '../utils/constants';
import { textTransform } from '@mui/system';

const MemoriesPage = (props: { navigation: any; }) => {
  const {
    navigation
  } = props;

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const today = `${year}-${month}-${day}`;
  
  return (
    <PageContainer>
      <MainHeader text="DAILY MEMORIES" />
      <LinearGradient
        colors={[colors.background + 'FF', colors.background + '00']}
        style={styles.topGradient}
      />
      <CalendarList 
        markedDates={{
          [today]: {
            customStyles: {
              text: {
                fontWeight: 'bold',
                color: colors.foreground,
              }
            }
          }
        }}
        theme={{
          backgroundColor: colors.background,
          calendarBackground: colors.background,
          dayTextColor: colors.accent,
          textDayFontSize: 18,
          textSectionTitleColor: colors.foreground,
          //@ts-expect-error - works but incorrect type
          'stylesheet.calendar.header': {
            header: {
              marginBottom: 15,
              alignItems: 'center',
              backgroundColor: colors.midground,
              borderRadius: 25,
              textTransform: 'uppercase',
            },
            monthText: {
              paddingVertical: 10,
              textTransform: 'uppercase',
              fontSize: 20,
              fontWeight: '400',
              letterSpacing: 4,
              color: colors.foreground,
            }
          },
        }}
        markingType="custom"
      />
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  topGradient: {
    position: 'absolute',
    top: 145,
    left: 0,
    right: 0,
    height: 25,
    zIndex: 1,
  },
})

export default memo(MemoriesPage);

//Refresh Scroll view and Add new Item in List

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

const ScrollViewExample = () => {

  const [Items, setItems] = useState([
    { key: 1, value: 'row 1' },
    { key: 2, value: 'row 2' },
    { key: 3, value: 'row 3' },
    { key: 4, value: 'row 4' },
    { key: 5, value: 'row 5' },
    { key: 6, value: 'row 6' },
    { key: 7, value: 'row 7' },
    { key: 8, value: 'row 8' },
    { key: 44, value: 'row 9' },
    { key: 68, value: 'row 110' },
    { key: 0, value: 'row 120' },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([{ key: 69, value: 'row 300' },...Items]);
    setRefreshing(false);
  }

  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['red']}
        />
      }
    >
      {
        //index????
        Items.map((item,index) => {
          return (
            <View style={styles.item} key={index}>
              <Text style={styles.text}>{item.value}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default ScrollViewExample;

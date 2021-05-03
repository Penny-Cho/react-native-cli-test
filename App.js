import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddItem from './components/AddItem';
Icon.loadFont();

const App = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      text: 'Milk',
    },
    {
      id: 1,
      text: 'eggs',
    },
    {
      id: 2,
      text: 'bread',
    },
    {
      id: 3,
      text: 'cookie',
    },
  ]);

  const deleteItem = id => {
    setItems(prev => {
      const result = prev.filter(item => item.id !== id);
      return result;
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'please enter an item', {text: 'ok'});
    }
    setItems(prev => {
      return [...prev, {id: prev.length + 1, text}];
    });
  };

  return (
    <View style={styles.container}>
      <Header title="shopping list" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;

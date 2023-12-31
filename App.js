import React from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import tw from 'twrnc';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

export default function App() {
  const [name, setName] = React.useState('angel');
  const [age, setAge] = React.useState('35');

  const [people, setPeople] = React.useState([
    { name: 'angel', age: 35, id: '1' },
    { name: 'euan', age: 25, id: '2' },
    { name: 'john', age: 40, id: '3' }, 
    { name: 'lina', age: 30, id: '4' },
    { name: 'jane', age: 20, id: '5' },
    { name: 'joe', age: 50, id: '6'},
    { name: 'jim', age: 45, id: '7'},
    { name: 'jill', age: 35, id: '8' },
  ]);

  const [todos, setTodos] = React.useState([
    { text: 'buy coffee'        ,  key: '1' },
    { text: 'create and app'    ,  key: '2' },
    { text: 'play on the switch',  key: '3' }
  ]);

  const classes = tw.style(
  'flex items-center mt-10 p-4 android:pt-2', 
  name === 'angel' ? 'bg-pink-200' 
  : name === 'euan' ? 'bg-green-200'
  : 'bg-white'
  );

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id !== id);
    });
  };

  const pressHandler2 = (key) => {
    console.log(key);
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const addItem = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  };

  return (
    <>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={tw.style('bg-white flex-1')}>
        <Header />
        <View style={tw.style('p-10 flex-1')}>
          <AddToDo addItem={addItem} />
          <View style={tw.style('mt-5 flex-1')}>
            <FlatList style={tw.style('')}
              data={todos}
              renderItem={({ item }) => (
                  <ToDoItem item={item} pressHandler={pressHandler2} />
              )}
            />

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
      {/* <View style={classes}>
        <View style={tw.style('mt-4')}>
          <Button
            title='Angel'
            onPress={() => { setName('angel'); setAge('35'); }}
          />
        </View>
        <View style={tw`mt-4`}>
          <Button
            title='Euan'
            onPress={() => { setName('euan'); setAge('25'); }}
          />
        </View>
        <Text>Enter name:</Text>
        <TextInput
          style={tw`border border-black p-2 m-3 w-48`} 
          placeholder='e.g.John Doe'
          value={name}
          onChangeText={(val) => setName(val)}
        />
        <Text>Enter age:</Text>
        <TextInput
          style={tw`border border-black p-2 m-3 w-48`}
          placeholder='e.g. 99'
          value={age}
          onChangeText={(val) => setAge(val)}
        />
        <Text>My name is {name} and my age is {age}</Text>
      </View> */}
      {/* <ScrollView style={tw`px-5`}>
        {people.map((person, index) => (
          <View key={index} style={tw`bg-gray-200 p-2 m-2`}>
            <Text>{person.name}</Text>
            <Text>{person.age}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/* <FlatList
        data={people}
        renderItem={({ item }) => (
          <View style={tw`bg-gray-200 p-2 m-2`}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      /> */}
      {/* <FlatList
      style={tw`mt-10`}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`bg-gray-200 p-2 m-2`}
            onPress={() => pressHandler(item.id)}
          >
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      /> */}
    </>
  );
}

const styles = StyleSheet.create({
});

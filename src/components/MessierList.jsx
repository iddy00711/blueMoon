// import React, { useRef, useEffect } from 'react';
// import { View, Text, Animated, TouchableOpacity, Image, SafeAreaView, FlatList, StatusBar } from 'react-native';


// export default function MessierList ({messier}) {

//   console.log(messier)

  

//   const renderItem = ({ messierObj }) => {
//     console.log(messierObj)

//     const {name, pic} = messierObj
    

//      return(
//       <TouchableOpacity key={`messier${index}`} onPress={()=>{
//         props.navigation.navigation.navigate('MessierPage', {name, pic})
//       }} style={{}}>
//       <Text style={[]}>{messierObj.name}</Text>
//       <Image style={{width:300, height:300}} source={require(`../assets/${messierObj.pic}`)}/>
//     </TouchableOpacity>
//           )};
 
//     return (
//       <SafeAreaView style={{ flex: 1,
//       marginTop: StatusBar.currentHeight || 0,}}>
//       <FlatList
//         data={messier}
//         renderItem={renderItem}
//         keyExtractor={(messierObj) => messierObj.id}
       
//       />
//     </SafeAreaView>
//     );
  
// }


import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";






const MessierList = ({messier}) => {
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={{height:250, width:250, margin:0, borderRadius:9999, position:'absolute', top:25, right:170}} source={require(`../assets/${item.pic}`)}/>
    </TouchableOpacity>
  );


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor:black }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        pagingEnabled
        data={messier}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    textAlign:"center",
    
    // alignItems:'center',
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 16,
    width:'70vw',
    height:300,
    borderRadius:9999
  },
  title: {
    fontSize: 32,
    top:120,
    left:120,
    color:'white',
  
    paddingLeft:80,
    position:'absolute'
    
  },
});

export default MessierList;
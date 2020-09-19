import React from 'react';

import {View, Text, Button} from 'react-native';

export default function NotificationsScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Settings"
          onPress={() => console.log(props)}
        />
        <Button title="Go back"  />
      </View>
    );
  }
// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.fedAgency}</Text>
      <Text style={styles.textStyle}>{props.applicationName}</Text>
    </View>
  );
};

// Styling for the parent component and the child component
const styles = {
  viewStyle: {
    backgroundColor: "#E8E8E8",
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#990000'
  }
};

// Make the component available tot he other parts of the application
export default Header;
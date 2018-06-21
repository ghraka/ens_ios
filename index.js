// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import TechbitsList from './src/components/TechbitsList';

// Create a component
// To reuse this app for multiple agencies, replace the name of the agency
// with the name of your agency and change the applicationName
const App = () => (
  <View>
    <Header fedAgency = {'DEPARTMENT OF LABOR'} applicationName = {'ENTERPRISE NOTIFICATION SYSTEM'} />
    <TechbitsList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('ens_ios', () => App);
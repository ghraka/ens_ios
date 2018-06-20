// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create a component
// To reuse this app for multiple agencies, replace the name of the agency
// with the name of your agency and change the applicationName
const App = () => (
  <Header fedAgency = {'DEPARTMENT OF LABOR'} applicationName = {'ENTERPRISE NOTIFICATION SYSTEM'} />
);

// Render it to the device
AppRegistry.registerComponent('ens_ios', () => App);
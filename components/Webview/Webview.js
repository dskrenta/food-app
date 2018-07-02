import React from 'react';
import { WebView } from 'react-native';

const Webview = ({ navigation: { state: { params: { url } } } }) => (
  <WebView
    source={{
      uri: url
    }}
    style={{
      width: '100%',
      height: '100%'
    }}
  />
);

export default Webview;
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const SRCForm = () => {
  return (
        <View style={{ flex: 1 }}>
          <WebView source={{ uri: 'https://forms.office.com/Pages/ResponsePage.aspx?id=z18LfsQS_06WtkZk8l3H2gpFnYadRo9OgwCYHC05XnBUQkpKUkFYRE40Uko0OEEzVjlSWDgxN1VDUi4u' }} />
        </View>
  )
}

export default SRCForm
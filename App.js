import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

import Pdf from 'react-native-pdf';

export default function App() {
  const source = {uri:'https://zinedumain.s3.amazonaws.com/notes_file/Linux_exam_codes_agtCMdm.pdf',cache:true};
  return (
    <View style={styles.container}>
        <Pdf
            source={source}
            onLoadComplete={(numberOfPages,filePath)=>{
                console.log(`number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages)=>{
                console.log(`current page: ${page}`);
            }}
            onError={(error)=>{
                console.log(error);
            }}
            onPressLink={(uri)=>{
                console.log(`Link presse: ${uri}`)
            }}
            style={styles.pdf}/>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});

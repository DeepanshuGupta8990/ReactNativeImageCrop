import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FileUpload from './Screen/FileUpload'
import ScanDoc from './Screen/ScanDoc'

const App = () => {
  return (
    <ScrollView>
      <View style={{display:'flex',gap:100,padding:30}}>
      <FileUpload/>
      <ScanDoc/>
      </View>
    </ScrollView>
  )
}

export default App
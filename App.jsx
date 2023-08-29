import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FileUpload from './Screen/FileUpload'
import ScanDoc from './Screen/ScanDoc'
import SwipetoDelete from './Screen/SwipetoDelete'
import ClipBorad from './Screen/ClipBorad'
import ImageCrop from './Screen/ImageCrop'

const App = () => {
  return (
    <ScrollView>
      <View style={{display:'flex',gap:100,padding:30}}>
      {/* <FileUpload/> */}
      {/* <ScanDoc/> */}
      {/* <SwipetoDelete/> */}
      {/* <ClipBorad/> */}
      <ImageCrop/>
      </View>
    </ScrollView>
  )
}

export default App

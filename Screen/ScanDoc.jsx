import { View, Text,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DocumentScanner from 'react-native-document-scanner-plugin'

const ScanDoc = () => {
    const [scannedImage,setScannedImage] = useState(null);
    const getImageSize = (source) => {
          // if(scannedImage){
          Image.getSize(scannedImage, (width, height) => {
           console.log(width,height)
          //  }
          });
    };
    const scanFunc = async () => {
        // start the document scanner
        const { scannedImages } = await DocumentScanner.scanDocument({
            croppedImageQuality:100,
        })
      
        console.log(scannedImages)
        // get back an array with scanned image file paths
        if (scannedImages.length > 0) {
          // set the img src, so we can view the first scanned image
          setScannedImage(scannedImages[0])
        }
      }
    
  return (
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1}}>
      <Text>ScanDoc</Text>
      {
       scannedImage!==null ? (<Image resizeMode='contain' style={{width:400,height:400}} source={{uri:scannedImage}}/>) : ('')
      }
      {getImageSize()}
      <TouchableOpacity onPress={scanFunc} style={{width:70,borderRadius:10,backgroundColor:'black'}}>
        <Text style={{color:'white',textAlign:'center'}}>Scan Image</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScanDoc
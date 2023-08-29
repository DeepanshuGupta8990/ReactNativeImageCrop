import React,{useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity,Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {request, PERMISSIONS} from 'react-native-permissions';

const ImageCrop = () => {
    const [selectImage,setSelectImage] = useState<null | string>(null)
  const upload = (permission:any) => {
    request(permission).then((result) => {
        console.log(result)
      });
    //   ImagePicker.openCamera({
    //     width: 300,
    //     height: 400,
    //     cropping: true,
    //   }).then(image => {
    //     console.log(image);
    //   });

    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64:true
    }).then(image => {
      console.log('imagepath',image);
      setSelectImage(image?.path);
    }).catch((err)=>{
        console.log(err.message)
    })
  };

  return (
    <SafeAreaView style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <View style={{ height: 400, width: 400 }}>
        {
            selectImage && <Image source={{uri:selectImage}} style={{ height: 400, width: 400 }}/>
        }
      </View>
      <TouchableOpacity
        onPress={() => {
        //   upload(PERMISSIONS.ANDROID.CAMERA);
          upload(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
        
        }}
        style={{
          marginTop: 20,
          height: 50,
          width: '100%',
          backgroundColor: 'skyblue',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Select Image From Gallery</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ImageCrop;

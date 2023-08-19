import React, { useState } from 'react';
import { View, Text, Button,Image  } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const FileUpload = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        // type: [DocumentPicker.types.pdf],
        // allowMultiSelection: true
      });
      // console.log(doc);
      setSelectedDoc(doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the upload', err);
      } else {
        console.log(err.message);
      }
    }
  };

  return (
    <View>
      <Text>Document Picker</Text>
      <Button title="Upload document" onPress={selectDoc} />
      {selectedDoc && (
        <View>
          {console.log(selectedDoc)}
          <Text>Selected Image:</Text>
          <Image
            source={{ uri: selectedDoc[0].uri }} // Use the 'uri' property to display the image
            style={{ width: 200, height: 200 }} // Adjust the width and height as needed
          />
          <Text>Name: {selectedDoc[0].name}</Text>
          <Text>Size: {selectedDoc[0].size} bytes</Text>
          <Text>Type: {selectedDoc[0].type}</Text>
        </View>
      )}
    </View>
  );
};

export default FileUpload;

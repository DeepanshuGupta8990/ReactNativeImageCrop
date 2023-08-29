import { View, Text,Image, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react';
// const referImage = require('../Assets/Images/share-app.png');
import {Dimensions} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const ClipBorad = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };

  return (
    <>
    <ScrollView>
      <View style={{paddingBottom:40}}>
      {/* <Image source={referImage} resizeMode='contain' style={{width:screenWidth, height: 250}} /> */}
      <View style={{display:'flex',paddingHorizontal:20}}>
        <Text style={{fontSize:22,fontWeight:"600",color:"black"}}>How it works</Text>
          <View style={{borderColor:'#e6ebf6',borderWidth:1,padding:15,borderRadius:15}}>
         <BulletPoints text='Invite a friend with your referral code'/>
         <BulletPoints text='Friends signs up, You earn up 100 points'/>
         <BulletPoints text='Get points with completion of each section'/>
          </View>
       </View>
      <View style={{display:'flex',paddingHorizontal:20,paddingVertical:20}}>
        <Text style={{fontSize:22,fontWeight:"600",color:"black"}}>Benefits</Text>
          <View style={{borderColor:'#e6ebf6',borderWidth:1,padding:15,borderRadius:15}}>
         <BulletPoints text='Use points to Verify the documents again'/>
         <BulletPoints text='Unloack recommendation Section'/>
          </View>
       </View>
       <View style={{display:'flex',justifyContent:"center",alignItems:'center',backgroundColor:'#f5f8ff',marginHorizontal:20,marginVertical:10,borderRadius:10,paddingVertical:20,gap:10}}>
         <Text style={{fontSize:20,color:'#a7b1cd',fontWeight:'600'}}>Your Referal Code</Text>
           <View style={{borderStyle:'dashed',borderWidth:1,borderColor:"#111c3b",paddingHorizontal:50,paddingVertical:10,borderRadius:10}}>
             <Text selectable style={{fontSize:20,color:'#0d1938',fontWeight:'600'}}>VJ36BQ</Text>
           </View>
           <TouchableOpacity onPress={copyToClipboard}>
             <Text style={{textDecorationLine:'underline',color:"#69779d",fontSize:14}}>Tap to copy</Text>
           </TouchableOpacity>
       </View>
      </View>
    </ScrollView>
    </>
  )
}

export default ClipBorad


const BulletPoints = ({text}:{text:string})=>{
  return (
    <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20}}>
    <View style={{width:10,height:10,borderRadius:20,backgroundColor:'#caccd3',}}></View>
    <Text style={{fontSize:16,color:'#4a5162'}}>{text}</Text>
  </View>
  )
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import RNPrint from 'react-native-print';
import ViewShot,{ captureRef } from "react-native-view-shot";
import QRCode from 'react-native-qrcode';


export default class App extends Component{

  printBarCode=()=>{
    captureRef(this.qrcodeView,{
            format: "png",
           // quality: 0.8,
            result:'data-uri'
        }).then(data=>{
            //Alert.alert(data);
            console.log(data);
            RNPrint.print({html:`<img src="${data}"  style='width:15em;'/> <p>欢迎扫我</p>`})
        },eror=>{console.error("Oops, snapshot failed", error)})
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this.printBarCode}>
              <View style={{padding:10,backgroundColor:'yellow'}}>
                  <Text>Print</Text>
              </View>
            </TouchableOpacity>
          <ViewShot ref={ref=>this.qrcodeView=ref} style={{justifyContent:'center'}}>
            <QRCode
              value={"http://www.baidu.com"}
              size={200}
              bgColor='purple'
              fgColor='white'/>
          </ViewShot>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React from 'react';
import { Text,TextInput, View,StyleSheet,ImageBackground,Image,Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
    return (
      <ScrollView>
      <View>
        <View style={searchbar.card}>
        <Icon style={category.icon} name="search" size={30} color="green"></Icon>
        <TextInput
          style={searchbar.input}
          placeholder="Cari layanan, makanan, & tujuan"
        />
        <View style={{padding: 10,backgroundColor: 'green', borderRadius: 50,marginLeft: 10}}>
          <Icon style={category.icon} name="user" size={18} color="white"></Icon>
        </View>
   
        </View>
        <Image style={{height: 300, resizeMode: 'contain',marginTop: -45}} source={{uri: 'https://asset-a.grid.id/crop/29x0:873x499/x/photo/2021/09/28/lebih-cepat-dan-aman-gojek-hadi-20210928032629.jpg'}}>

        </Image>
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
          <View style={cardSaldo.card}>
              <View style={{flexDirection: 'row',gap: 20}}>
                <Icon style={category.icon} name="wallet" size={35} color="green"></Icon>
                <View>
                <Text style={{fontWeight: 'bold',color: 'black'}}>Rp.1.500.000</Text>
                <Text>0 Coins</Text>
              </View>
              </View>
              <Icon style={category.icon} name="shopping-cart" size={35} color="green"></Icon>
          </View>
        </View>

        <View style={category.container}>
        <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="motorcycle" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>GoRide</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="car" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>GoCar</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="utensils" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>GoFood</Text>
          </View>
          
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="box" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>GoSend</Text>
          </View><View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="shopping-cart" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>GoMart</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="envelope-open" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>GoTagihan</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="store" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>GoShop</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Lainnya</Text>
          </View>
        </View>
        <Image style={slider.image} source={{uri: 'https://bisnisasia.co.id/wp-content/uploads/2022/09/mode-hemat-ads-1200x628-2.jpg'}}></Image>
        <Text style={{marginLeft: 30,fontSize: 20,fontWeight: 'bold',color: 'black'}}>Cek yang menarik di GoFood</Text>
        <ScrollView horizontal style={{marginTop: 15,marginLeft:25}}>
          <Image style={slider.image} source={{uri: 'https://bisnisasia.co.id/wp-content/uploads/2022/09/mode-hemat-ads-1200x628-2.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://bisnisasia.co.id/wp-content/uploads/2022/09/mode-hemat-ads-1200x628-2.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://bisnisasia.co.id/wp-content/uploads/2022/09/mode-hemat-ads-1200x628-2.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://bisnisasia.co.id/wp-content/uploads/2022/09/mode-hemat-ads-1200x628-2.jpg'}}></Image>
        </ScrollView>
      </View>
      </ScrollView>
    )
}

const searchbar = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 4,
      flexDirection: 'row', // Untuk menata ikon dan input secara horizontal
      alignItems: 'center', // Untuk menengahkan ikon dan input secara vertikal
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1, // Mengisi sisa ruang yang tersedia
      height: 45,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 50,
      padding: 10,
      backgroundColor: '#efefef'
    },
  });
  const cardSaldo = StyleSheet.create({
    card: {//view saldo
      elevation: 3,
      backgroundColor: 'white',
      marginTop: -90,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      borderRadius: 25,
    }
  })
  const category = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 10,
       
    },
    col:{
      width: '20%',
      padding: 10,
    },
    content: { //icon
      backgroundColor: 'green',
      marginTop: 20,
      borderRadius: 10,
      height: 60,
      position: 'relative',
      justifyContent:'center',
      alignItems: 'center'
    },
    icon:{
    }
  })
  
  const slider = StyleSheet.create({
    image: {width: 250,height: 150,marginHorizontal: 10,borderRadius: 20,resizeMode: 'contain'}
  })
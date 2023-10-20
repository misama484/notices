import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, Image, Link } from 'react-native'
import { Button } from 'react-native-paper';



const url = "http://api.mediastack.com/v1/news?access_key=4871737edbb903eb46aa728fec1a155f&languages=es&country=es&categories=science"


const Card = ({
  modalVisible,
  setModalVisible,
  notice,
}) => {



  return (
    <Modal
      visible={modalVisible}
      onDismiss={() => setModalVisible(false)}
      animationType = "slide"
      transparent = {true}
      >
      <ScrollView style = {styles.scrollStyle}>
        <View style = {styles.centeredView}>
          <Text style = {styles.titleText} onPress={() => setModalVisible(!modalVisible)}>{notice.title}</Text>
          <View style = {styles.imageContainer}>
            <Image
                style={styles.image}
                src={notice.image}
                />
              </View>
          <Text>{notice.description}</Text>
          <View style = {styles.infoNoticeContainer}>
            <Text>{notice.author}</Text>
            <Text>{notice.source}</Text>
            <Text>{notice.url}</Text>
            <Text>{notice.published_at}</Text>
            <Button
              style='outlained'
              >Ir a noticia</Button>

          </View>
        </View>
      </ScrollView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollStyle: {
    marginTop: 100,
    marginBottom: 90,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#000",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titleText:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  image:{
    width: 400,
    height: 300,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#000",
    marginHorizontal: 20,
    marginVertical: 10,
  },
})

export default Card
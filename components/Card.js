import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Modal } from 'react-native-paper';


const url = "http://api.mediastack.com/v1/news?access_key=4871737edbb903eb46aa728fec1a155f&languages=es&country=es&categories=science"


const Card = ({
  modalVisible,
  setModalVisible,
  notice,
}) => {

  return (
    <Modal
      modalVisible={modalVisible}
      onDismiss={() => setModalVisible(false)}
      animationType = "slide"
      transparent = {true}
      >
      <ScrollView>
        <View>
          <Text>{notice.title}</Text>
          <Text>{notice.description}</Text>
        </View>
      </ScrollView>
    </Modal>
  )
}

export default Card
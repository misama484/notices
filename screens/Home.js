import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"

import Card from "../components/Card"



const Home = (navigation) => {

const [notices, setNotices] = useState([]);
const [notice, setNotice] = useState({});
const [modalVisible, setModalVisible] = useState(false);

useEffect(() => {
  fetchNotices();
 },[]);

const fetchNotices = () => {
  fetch('http://api.mediastack.com/v1/news?access_key=4871737edbb903eb46aa728fec1a155f&languages=es&country=es&categories=science')
  .then(response => response.json())
  .then(notices => setNotices(notices.data));
  };


return (
  <ScrollView>
    <View>
      {notices.map((notice, index) => {            
        return (               
          <TouchableOpacity
            key={index}
            onPress={() => {
              setModalVisible(!modalVisible)
              setNotice(notice);
            }}   
            >
              <Image
              style={{width: 450, height: 280, borderRadius: 20}}
              src={notice.image}
              />
              <Text>{notice.title}</Text>
            </TouchableOpacity>
            );
      })}
      <Card
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        notice={notice} />
    </View>
  </ScrollView>
  )
}

export default Home
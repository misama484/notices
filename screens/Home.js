import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native"

import Card from "../components/Card"
import { Divider } from 'react-native-paper';



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
    <View style = {{backgroundColor: "#4630AB"}}> 
      {notices.map((notice, index) => {            
        return ( 
          <>            
          <TouchableOpacity
            key={index}
            style = {styles.noticeContainer}
            onPress={() => {
              setModalVisible(!modalVisible)
              setNotice(notice);
            }}   
            >
              <Image
              style={styles.image}
              src={notice.image}
              />
              <Text style = {styles.titleText}>{notice.title}</Text>
            </TouchableOpacity>
            <Divider style = {{marginVertical: 10,}}/>
            </>  
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

const styles = StyleSheet.create({
  noticeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4630AB',
  }, 
  image: {
    width: 450,
    height: 280,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
    marginBottom: 20,  
  },
})

export default Home
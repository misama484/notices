import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { List } from "react-native-paper"

import Card from "../components/Card"
import { Divider } from 'react-native-paper';



const Home = (navigation) => {
  
  
const [notices, setNotices] = useState([]);
const [notice, setNotice] = useState({});
const [modalVisible, setModalVisible] = useState(false);
const [ expanded, setExpanded] = useState(false)
const [ category, setCategory ] = useState("science")



useEffect(() => {
  fetchNotices();
 },[category]);

const fetchNotices = () => {
  const url = 'http://api.mediastack.com/v1/news?access_key=4871737edbb903eb46aa728fec1a155f&languages=es&country=es&categories=' + category
  fetch(url)
  .then(response => response.json())
  .then(notices => setNotices(notices.data));
  };

const handlePressList = (category) => {
  setExpanded(!expanded)
  setCategory(category)
}
return (
  <>
  <List.Section
    style = {styles.categoryList}
  >
        <List.Accordion
          title="Categoria"
          titleStyle = {styles.textMenuCategories}
          rippleColor= "#fff"
          left={props => <List.Icon {...props} icon="equal" color="#fff" />}
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
          style = {{backgroundColor: "#4630AB"}}
          >
            <List.Item 
              title="General"
              titleStyle = {styles.textMenuCategories}
              onPress={() => handlePressList("general")}
              />
            <List.Item 
              title="Ciencia"
              titleStyle = {styles.textMenuCategories} 
              onPress={() => handlePressList("science")}
              />
              <List.Item 
              title="Tecnologia"
              titleStyle = {styles.textMenuCategories} 
              onPress={() => handlePressList("technology")}
              />
              <List.Item 
              title="Deportes"
              titleStyle = {styles.textMenuCategories} 
              onPress={() => handlePressList("sports")}
              />
              <List.Item 
              title="Negocios"
              titleStyle = {styles.textMenuCategories} 
              onPress={() => handlePressList("business")}
              />
              <List.Item 
              title="Entretenimiento"
              titleStyle = {styles.textMenuCategories} 
              onPress={() => handlePressList("entertainment")}
              />
              <List.Item 
              title="Salud"
              titleStyle = {styles.textMenuCategories} 
              onPress={() => handlePressList("health")}
              />
        </List.Accordion>
      </List.Section>
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
  </>
  )
}

const styles = StyleSheet.create({
  noticeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4630AB',
  }, 
  categoryList:{
    backgroundColor: "#4630AB",
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
  textMenuCategories:{
    color: "#fff",
  },
})

export default Home
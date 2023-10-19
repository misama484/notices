import { useState, useEffect } from 'react';
import { View, Text } from 'react-native'


const url = "http://api.mediastack.com/v1/news?access_key=4871737edbb903eb46aa728fec1a155f&languages=es&country=es&categories=science"


const Card = () => {

const [notices, setNotices] = useState([]);

useEffect(() => {
  fetchNotices();
 },[]);

const fetchNotices = () => {
  fetch('http://api.mediastack.com/v1/news?access_key=4871737edbb903eb46aa728fec1a155f&languages=es&country=es&categories=science')
  .then(response => response.json())
  .then(notices => setNotices(notices));
  };



  return (
    <View>
     {notices.map((notice) => {            
        return (                  
          <Text>{notice.data.title}</Text>
            );
      })}
    </View>
  )
}

export default Card
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { View, Text } from "react-native";
import { Button, List, TextInput } from "react-native-paper"

const Search = () => {

  //const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=0a6b47b5eeda727c6b9d969e42c82b6b&lang=es&q=valencia"

  const [expanded, setExpanded] = useState(false)
  const [city, setCity] = useState("")
  useEffect(() => {
    fetchWeather();
   },[]);
  
  const fetchWeather = () => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&appid=0a6b47b5eeda727c6b9d969e42c82b6b&lang=es&q' + city
    fetch(apiUrl)
    .then(response => response.json())
    .then(notices => setNotices(notices.data));
    };

  return(
    <View>
     <TextInput
      label="Ciudad"
      
      
    />
    <Button
      mode="outlained"
      onPress={() => {setCity(city)}}
    >Buscar</Button>
    <Text>{city}</Text>
    </View>
  )

}


export default Search
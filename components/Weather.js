import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { View, Text } from "react-native";
import { Button, List, TextInput } from "react-native-paper"

const Search = () => {

  //const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=0a6b47b5eeda727c6b9d969e42c82b6b&lang=es&q=valencia"

  const [expanded, setExpanded] = useState(false)
  const [city, setCity] = useState("")
  const [ciudad, setCiudad] = useState("")
  
  useEffect(() => {
    fetchWeather();
   },[]);
  
  const fetchWeather = () => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&appid=0a6b47b5eeda727c6b9d969e42c82b6b&lang=es&q' + city
    fetch(apiUrl)
    .then(response => response.json())
    .then(city => setCity(city));
    };
    
    

    const handleCity = (ciudad) => {
      setCiudad(ciudad)
      console.log(city)
    }
  return(
    <View>
     <TextInput
      label="Ciudad"
      value = {city}
      onChangeText={city => handleCity(city)}
      
    />
    <Button
      mode="outlained"
      onPress={() => {setCity(ciudad)}}
    >Buscar</Button>
    <Text>{city.base}</Text>
    </View>
  )

}


export default Search
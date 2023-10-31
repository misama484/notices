import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, List, TextInput } from "react-native-paper"
const Search = () => {

  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=0a6b47b5eeda727c6b9d969e42c82b6b&lang=es&q=valencia"

  const [expanded, setExpanded] = useState(false)
  const [city, setCity] = useState("")
  const [ciudad, setCiudad] = useState([])
  
  useEffect(() => {
    
   },[ciudad]);

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&`

  const fetchWeather = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?&appid=0a6b47b5eeda727c6b9d969e42c82b6b&lang=es&q=${city}`
  fetch(url)
  .then(response => response.json())
  .then(ciudad => setCiudad(ciudad));
  };
  
  //mostrar icono openweathermap, NO FUNCIONA
  iconcode = ciudad.weather[0].icon
  let icon = "http://openweathermap.org/img/w/" + iconcode + ".png";
    


  return(
    <View>
     <TextInput
      label="Ciudad"
      value = {city}
      onChangeText={city => setCity(city)}
      
    />
      <Button
        mode="outlained"
        onPress={() => {fetchWeather()}}
      >Buscar</Button>

      <View style = {styles.weatherContainer}>
        <Text style = {styles.cityTitle}>{ciudad.name}</Text>
        <Image
          src="http://openweathermap.org/img/w/01d.png"
        />
        <Text>Tiempo: {ciudad.weather[0].description}</Text>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  weatherContainer:{
    alignItems: "center",
    justifyContent: "center"
  },

  cityTitle: {
    fontWeight: "bold",
    fontSize: 40,
  }
})

export default Search







/*
const Search = () => {

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=0a6b47b5eeda727c6b9d969e42c82b6b&lang=es&q=valencia"

const [expanded, setExpanded] = useState(false)
const [city, setCity] = useState("")
const [ciudad, setCiudad] = useState("")

useEffect(() => {
  fetchWeather();
 },[]);

const fetchWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&`
  fetch(apiUrl)
  .then(response => response.json())
  .then(json => {
    setCiudad(json)
  })
  .catch(error => {
    console.error(error)
  })

}
  
  

  const handleCity = (ciudad) => {
    setCiudad(ciudad)
    console.log(city)
  }

return(

  <View>
     <TextInput label="Introduce la ciudad" value={city} onChangeText={text => setCity(text)} /> 
     <Button mode="contained" onPress={fetchWeather}> Buscar </Button> 
     <List.Section> 
        <List.Accordion title="Información sobre la ciudad" expanded={expanded} onPress={() => setExpanded(!expanded)} > 
          <List.Item title="Ciudad: " description={ciudad.name} />   
          <List.Item title="Descripción: " description={ciudad.weather[0].description} /> 
        </List.Accordion> 
      </List.Section> 
      </View> 
);


}
*/

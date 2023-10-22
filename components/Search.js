import { useState } from "react";
import { Alert } from "react-native";
import { View, Text } from "react-native";
import { List } from "react-native-paper"

const Search = () => {

  const [expanded, setExpanded] = useState(false)

  return(
    <View>
      <List.Section>
        <List.Accordion
          title="Categoria"
          left={props => <List.Icon {...props} icon="folder"/>}
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
          >
            <List.Item 
              title="General" 
              onPress={() => {
                Alert.alert("Cerrando")
              }}
              />
            <List.Item title="Ciencia" />
        </List.Accordion>
      </List.Section>

    </View>
  )

}


export default Search
import { FlatList, Image, Text,  } from "react-native";
import { Divider } from "react-native-paper";

const NoticeCard = (
  url
) => {
   <FlatList
    data = {url}
    
    />
}







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
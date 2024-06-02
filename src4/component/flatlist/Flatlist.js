
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import styles from './styles';
import Time from '../time/Time';

const windowWidth = Dimensions.get('window').width;

const BaseUrl = 'https://api.collectapi.com';
const getNews = '/pray/all';

export default function Flatlist() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('Elazig');
  const [modalVisible, setModalVisible] = useState(false);
  const [cities, setCities] = useState([
    'Adana', 'Adiyaman', 'Afyon', 'Agri', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan',
    'Artvin', 'Aydin', 'Balikesir', 'Bartin', 'Batman', 'Bayburt', 'Bilecik', 'Bingol', 'Bitlis',
    'Bolu', 'Burdur', 'Bursa', 'Canakkale', 'Cankiri', 'Corum', 'Denizli', 'Diyarbakir', 'Duzce',
    'Edirne', 'Elazig', 'Erzincan', 'Erzurum', 'Eskisehir', 'Gaziantep', 'Giresun', 'Gumushane',
    'Hakkari', 'Hatay', 'Igdir', 'Isparta', 'Istanbul', 'Izmir', 'Kahramanmaras', 'Karabuk',
    'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kirikkale', 'Kirklareli', 'Kirsehir', 'Kilis',
    'Kocaeli', 'Konya', 'Kutahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Mugla', 'Mus',
    'Nevsehir', 'Nigde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas',
    'Sanliurfa', 'Sirnak', 'Tekirdag', 'Tokat', 'Trabzon', 'Tunceli', 'Usak', 'Van', 'Yalova',
    'Yozgat', 'Zonguldak',
  ]);

  const SendRequest = () => {
    fetch(`${BaseUrl}${getNews}?data.city=${city}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'apikey 0nPqWChsVb6EWHTxbZuul6:70Y9vmVuZySGNZlU9uqv0h',
      },
    })
      .then((response) => response.json())
      .then((r) => {
        setData(r);
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });
  };

  useEffect(() => {
    SendRequest();
  }, [city]);

  const renderCityItem = ({ item }) => (
    <TouchableOpacity
    style={styles.cityItem}
    onPress={() => {
      setCity(item);
      setModalVisible(false);
    }}
  >
    <Text>{item}</Text>
  </TouchableOpacity>
);

return (
<View>
  <View style={styles.containerView2}>
    <TextInput
      style={styles.containerText2}
      value={city}
      editable={false}
    />
    <TouchableOpacity
      style={{
        width: 50,
        height: 60,
        justifyContent: 'center',
        marginLeft: windowWidth * 0.35,
        alignItems: 'center',
      }}
      onPress={() => setModalVisible(!modalVisible)}
    >
    </TouchableOpacity>
  </View>
  <View style={styles.containerView}>
    {data.result && data.result.length > 0 ? (
      data.result.map((item, index) => (
        <View style={styles.containerView1} key={index}>
          <Text style={styles.containerText1}>{item.vakit}</Text>
          <Text style={styles.containerText}>{item.saat}</Text>
        </View>
      ))
    ) : (
      <Text style={{ color: 'black' }}>Loading...</Text>
    )}
  </View>
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
  >
    <TouchableOpacity
      style={styles.modalBackground}
      activeOpacity={1}
      onPressOut={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <FlatList
          data={cities}
          renderItem={renderCityItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </TouchableOpacity>
  </Modal>
  {}
  <Time city={city} />
</View>
);
}

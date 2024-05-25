import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
export default function Meals(props) {
  const {
    meals1,
    meals2,
    meals3,
    meals4,
    meals5,
    meals6,
    meals7,
    meals8,
    likenull,
    likeplump,
    handlePress2,
    handlePress3,
    handlePress4,
    handlePress5,
    handlePress6,
    handlePress7,
    handlePress8,
    handlePress9,
  } = props;
  return (
    <View>
      <View style={styles.containerView}>
        <TouchableOpacity style={styles.container} onPress={handlePress2}>
          <Image source={meals1} style={styles.containerImage} />
          <Image source={likeplump} style={styles.containerlike} />
          <Text style={styles.containerText}>Lahmacun</Text>
          <Text style={styles.containerTextmoney}>₺30.00</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container} onPress={handlePress3}>
          <Image source={meals2} style={styles.containerImage} />
          <Image source={likenull} style={styles.containerlike} />
          <Text style={styles.containerText}>Adana</Text>
          <Text style={styles.containerTextmoney}>₺30.00</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerView}>
        <TouchableOpacity style={styles.container} onPress={handlePress4}>
          <Image source={meals3} style={styles.containerImage} />
          <Image source={likenull} style={styles.containerlike} />
          <Text style={styles.containerText}>Beyti</Text>
          <Text style={styles.containerTextmoney}>₺30.00</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container} onPress={handlePress5}>
          <Image source={meals4} style={styles.containerImage} />
          <Image source={likenull} style={styles.containerlike} />
          <Text style={styles.containerText}>Etli Pide</Text>
          <Text style={styles.containerTextmoney}>₺30.00</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerView}>
        <TouchableOpacity style={styles.container} onPress={handlePress6}>
          <Image source={meals5} style={styles.containerImage} />
          <Image source={likeplump} style={styles.containerlike} />
          <Text style={styles.containerText}>Et Şiş</Text>
          <Text style={styles.containerTextmoney}>₺30.00</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container} onPress={handlePress7}>
          <Image source={meals6} style={styles.containerImage} />
          <Image source={likenull} style={styles.containerlike} />
          <Text style={styles.containerText}>İçli Köfte</Text>
          <Text style={styles.containerTextmoney}>₺30.00</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerView}>
        <TouchableOpacity style={styles.container} onPress={handlePress8}>
          <Image source={meals7} style={styles.containerImage} />
          <Image source={likeplump} style={styles.containerlike} />
          <Text style={styles.containerText}>Mantı</Text>
          <Text style={styles.containerTextmoney}>₺30.00</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container} onPress={handlePress9}>
          <Image source={meals8} style={styles.containerImage} />
          <Image source={likenull} style={styles.containerlike} />
          <Text style={styles.containerText}>Sarma</Text>
          <Text style={styles.containerTextmoney}>₺30.00</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

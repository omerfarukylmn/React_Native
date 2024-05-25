import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Meallist2(props) {
  const {meals1, meals0} = props;
  return (
    <View>
      <ScrollView>
        <View>
          <Image source={meals1} style={styles.container} />
        </View>
        <View style={styles.containerView}>
          <Text style={styles.continerText}>Adana</Text>
          <View style={styles.containerView1}>
            <Image source={meals0} style={styles.containerStar} />
            <Image source={meals0} style={styles.containerStar} />
            <Image source={meals0} style={styles.containerStar} />
            <Image source={meals0} style={styles.containerStar} />
            <Image source={meals0} style={styles.containerStar} />
          </View>
          <Text style={styles.containerRatings}>(59ratings)</Text>
        </View>
        <View style={styles.containerinformation}>
          <View>
            <Text style={styles.continerText}>₺30.00</Text>
            <View style={styles.containerView2}>
              <Text style={styles.continerText1}>- 1 +</Text>
            </View>
          </View>
          <View style={styles.containerTextInfo}>
            <Text style={styles.continerText}>Description</Text>
            <Text style={styles.continerText2}>
              Lahmacun is a type of stuffed pita in Middle Eastern cuisine, made
              by spreading ingredients prepared with spices such as minced meat,
              parsley, onion, garlic, black pepper and isot (red pepper) on the
              rolled out dough and then baking it in a stone oven.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerBottom}>
        <View style={styles.continerTotal}>
          <Text style={styles.continerText}> Total : ₺30.00</Text>
          <View style={styles.containerShopping}>
            <Text style={styles.continerText}>Add to Cart</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

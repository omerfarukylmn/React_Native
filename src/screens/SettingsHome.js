import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Settingtext from '../component/text1/Settingtext';
import styles from '../screens/styles';
import Name from '../component/NameText/Name';
import ListText from '../component/listText/ListText';
import Bottomtab from '../component/bottom tab/Bottomtab';
import Errormessage from '../component/error message/Errormessage';
import ModalComp from '../component/modal/Modal';
import Savebutton from '../component/savebutton/Savebutton';
import {
  man,
  exit,
  user,
  password,
  question,
  bell,
  todolist,
  settings,
  love,
  home,
  greater,
  notification,
  onbutton,
} from '../assent/icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Settings() {
  const [ismodalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(!ismodalVisible);
  };
  return (
    <SafeAreaView>
      <View style={styles.safeAreaView}>
        <View>
          <Settingtext setting="Settings" />
          <Name name="Mr. Jhon Doe" icon={man} welcome="Welcome" icon1={exit} />
        </View>
        <ScrollView>
          <View style={styles.containerView}>
            <View style={styles.containerList}>
              <ListText
                icon={user}
                textList1="User Profile"
                greaterr={greater}
              />
            </View>
            <View style={styles.containerList}>
              <ListText
                icon={password}
                textList1="Change Password"
                greaterr={greater}
                handlePress={openModal}
              />
            </View>
            <View style={styles.containerList}>
              <ListText icon={question} textList1="FAQs" greaterr={greater} />
            </View>
            <View style={styles.containerList}>
              <ListText
                icon={notification}
                textList1="Push Notification"
                icon1={onbutton}
              />
            </View>
          </View>
          <View>
            <Errormessage
              text="If you have any other quary you can reach out to us."
              link=" Whatsapp Us"
            />
            <Savebutton handlePress1={openModal} />
          </View>
          <ModalComp
            ismodalVisible={ismodalVisible}
            setIsModalVisible={setIsModalVisible}>
            <View>
              <Text style={styles.container}>Change Password</Text>
              <View style={styles.containerNewPassword}>
                <Text style={styles.containernewpasswordText}>
                  New Password
                </Text>
              </View>
              <View style={styles.containerconfirmPassword}>
                <Text style={styles.containerconfirmText}>
                  Confirm Password
                </Text>
              </View>
              <Savebutton handlePress1={openModal} />
            </View>
          </ModalComp>
        </ScrollView>
      </View>
      <Bottomtab
        home1={home}
        hometext="Home"
        todolist1={todolist}
        todolistText="Things"
        love1={love}
        loveText="Favorites"
        settings1={settings}
        settingsText="Settings"
      />
    </SafeAreaView>
  );
}

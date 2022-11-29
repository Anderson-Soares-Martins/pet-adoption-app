import { Modal, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import * as Animatable from "react-native-animatable";
import Svg, { Path } from "react-native-svg";
import { mdiPaw } from "@mdi/js";

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loading: FC<Props> = (props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => props.setModalVisible(false)}
    >
      <View style={styles.container}>
        <Animatable.View
          animation="rotate"
          iterationCount="infinite"
          style={styles.centeredView}
        >
          <Svg width="50" height="50" viewBox="0 0 25 25">
            <Path d={mdiPaw} fill="black" />
          </Svg>
        </Animatable.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default Loading;

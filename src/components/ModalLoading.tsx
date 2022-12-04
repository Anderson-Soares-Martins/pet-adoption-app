import { Modal, StyleSheet, View, Animated, Easing } from "react-native";
import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { mdiPaw } from "@mdi/js";

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loading: FC<Props> = (props) => {
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <Modal
      testID="ModalActivity"
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => props.setModalVisible(false)}
    >
      <View style={styles.container}>
        <Animated.View
          style={[styles.centeredView, { transform: [{ rotate: spin }] }]}
        >
          <Svg width="50" height="50" viewBox="0 0 25 25">
            <Path d={mdiPaw} fill="black" />
          </Svg>
        </Animated.View>
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

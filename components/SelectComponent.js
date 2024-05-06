import { Pressable, View, Text, StyleSheet, Modal } from "react-native";

import { useEffect, useState } from "react";
import { COLORS } from "../assets/Helper/Constant";
import { createContext } from "react";

export const SelectContext = createContext();

function SelectModal({ children, modalCustomStyles, onPress, updateValue }) {
  function openModal() {
    setModalVisible(() => {
      setModalVisible(true);
    });
  }
  return (
    <Modal transparent={true}>
      <Pressable
        onPress={onPress}
        style={[styles.selectModalContainer, modalCustomStyles]}
      >
        {children}
      </Pressable>
    </Modal>
  );
}

export default function SelectComponent({
  title,
  modalCustomStyles,
  children,
  value,
}) {
  const [selectValue, setSelectValue] = useState(value);
  const [modalVisible, setModalVisible] = useState(false);
  // function updateValue(value) {
  //   console.log(value);
  // }

  return (
    <>
      <SelectContext.Provider value={{ modalVisible, setModalVisible }}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}
          style={[styles.container, { backgroundColor: COLORS.PRIMARY_LIGHT }]}
        >
          <Text>{value ? value : title}</Text>
        </Pressable>
        {modalVisible && (
          <SelectModal
            onPress={() => {
              setModalVisible(false);
            }}
            // updateValue={updateValue}
          >
            <View style={styles.selectContent}>{children}</View>
          </SelectModal>
        )}
      </SelectContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: COLORS.TEXT_SECONDARY,
    borderWidth: 2,
    borderRadius: 10,
  },
  selectModalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  selectContent: {
    maxWidth: 250,
    width: "100%",
    padding: 20,
    backgroundColor: "white",
  },
});

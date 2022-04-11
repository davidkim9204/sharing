import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Animated,
  Pressable,
} from "react-native";

const InputBox = () => {
  const [value, setValue] = useState("");
  const moveText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (value !== "") {
        moveTextTop();
    } else if (value === "") {
        moveTextBottom();
    }
  }, [value])

  const onChangeText = (text) => {
    setValue(text);
  };

  const onFocusHandler = () => {
    if (value !== "") {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    if (value === "") {
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={styles.label}>댓글을 입력하세요.</Text>
      </Animated.View>
      <TextInput
        autoCapitalize={"none"}
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
      />
    </View>
  );
};
export default InputBox;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#fff",
    paddingTop: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 2,
    width: "90%",
    alignSelf: "center",
  },
  icon: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 13,
    height: 35,
    color: "#000",
  },
  label: {
    color: "grey",
    fontSize: 10,
  },
  animatedStyle: {
    top: 5,
    left: 15,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
});
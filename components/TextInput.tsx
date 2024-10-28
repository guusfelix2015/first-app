import { TextInputProps, StyleSheet, TextInput as RNTextInput } from "react-native";

type Props = TextInputProps

export function TextInput(props: Props) {
  return (
    <RNTextInput
      style={styles.textInput}
      placeholderTextColor="#ddd"
      {...props}
    />
  )
}

export const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    width: 250,
    marginTop: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 10,
    color: "#550ab1"
  },
});
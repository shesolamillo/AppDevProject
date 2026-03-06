import { Text, TextInput, View } from 'react-native';

const CustomTextInput = ({
  placeholder,
  label,
  labelStyle,
  value,
  onChangeText,
  containerStyle,
  textStyle,
  secureTextEntry = false,
}) => {
  return (
    <View style={containerStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[
          textStyle,
          {
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            paddingVertical: 8,
            fontSize: 16,
          },
        ]}
      />
    </View>
  );
};

export default CustomTextInput;
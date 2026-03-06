import { Text, TouchableOpacity, View } from 'react-native';

const CustomButton = ({ label, onPress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ backgroundColor: 'blue', borderRadius: 10, padding: 10 }, containerStyle]}
    >
      <Text style={[{ color: 'white', fontSize: 15, textAlign: 'center' }, textStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
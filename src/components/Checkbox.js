import { Text, TouchableOpacity, View } from 'react-native';

const Checkbox = ({ label, checked, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={{
          width: 20,
          height: 20,
          borderWidth: 1,
          borderColor: '#888',
          borderRadius: 4,
          marginRight: 8,
          backgroundColor: checked ? 'blue' : 'transparent',
        }}
      />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
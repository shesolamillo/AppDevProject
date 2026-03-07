import { useState, useEffect } from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Checkbox from '../../components/Checkbox';
import { userRegister, resetRegister } from '../../app/reducers/auth';
import { ROUTES } from '../../utils';

const Register = ({ setIsAuthenticated }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Get auth state from Redux
  const { user, isLoading, isError, errorMessage } = useSelector(state => state.auth);

  const handleRegister = () => {
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (!agree) {
      Alert.alert('Error', 'You must agree to the processing of personal data');
      return;
    }
    dispatch(userRegister({ username: fullName, email, password }));
  };

  // Handle successful registration
  useEffect(() => {
    if (user) {
      Alert.alert(
        'Registration Successful',
        'Thank you for registering! Please log in with your credentials.',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate(ROUTES.LOGIN);
              dispatch(resetRegister());
            },
          },
        ]
      );
    }
  }, [user, navigation, dispatch]);

  // Handle registration errors
  useEffect(() => {
    if (isError && errorMessage) {
      Alert.alert('Registration Error', errorMessage);
    }
  }, [isError, errorMessage]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 24, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 32 }}>Create Account</Text>

      <CustomTextInput
        label="Full Name"
        placeholder="Enter Full Name"
        value={fullName}
        onChangeText={setFullName}
        containerStyle={{ marginBottom: 16 }}
        labelStyle={{ fontSize: 14, fontWeight: '600', marginBottom: 4 }}
        textStyle={{ fontSize: 16 }}
      />

      <CustomTextInput
        label="Email"
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        containerStyle={{ marginBottom: 16 }}
        labelStyle={{ fontSize: 14, fontWeight: '600', marginBottom: 4 }}
        textStyle={{ fontSize: 16 }}
      />

      <CustomTextInput
        label="Password"
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={{ marginBottom: 16 }}
        labelStyle={{ fontSize: 14, fontWeight: '600', marginBottom: 4 }}
        textStyle={{ fontSize: 16 }}
      />

      <View style={{ marginBottom: 24 }}>
        <Checkbox
          label="I agree to the processing of Personal data"
          checked={agree}
          onToggle={() => setAgree(!agree)}
        />
      </View>

      <CustomButton
        label="Sign up"
        onPress={handleRegister}
        loading={isLoading}
        containerStyle={{ marginBottom: 24 }}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
          <Text style={{ color: 'blue', fontWeight: '600' }}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
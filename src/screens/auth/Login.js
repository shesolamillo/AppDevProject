import { useState } from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Checkbox from '../../components/Checkbox';
import { ROUTES } from '../../utils';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState(''); // prefill as in screenshot
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setIsAuthenticated(true)
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 24, backgroundColor: '#fff' }}>
      {/* Welcome header */}
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>Welcome back</Text>
      <Text style={{ fontSize: 18, color: '#666', marginBottom: 32 }}>Welcome Back!</Text>

      {/* Email field */}
      <CustomTextInput
        label="Email"
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        containerStyle={{ marginBottom: 16 }}
        labelStyle={{ fontSize: 14, fontWeight: '600', marginBottom: 4 }}
        textStyle={{ fontSize: 16 }}
      />

      {/* Password field */}
      <CustomTextInput
        label="Password"
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={{ marginBottom: 12 }}
        labelStyle={{ fontSize: 14, fontWeight: '600', marginBottom: 4 }}
        textStyle={{ fontSize: 16 }}
      />

      {/* Remember me & Forgot password row */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Checkbox label="Remember me" checked={rememberMe} onToggle={() => setRememberMe(!rememberMe)} />
        <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Reset link sent')}>
          <Text style={{ color: 'blue', fontWeight: '600' }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign in button */}
      <CustomButton label="Sign in" onPress={handleLogin} containerStyle={{ marginBottom: 24 }} />

      {/* Social sign-in */}
      <View style={{ alignItems: 'center', marginBottom: 24 }}>
        <Text style={{ color: '#888', marginBottom: 16 }}>Sign in with</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '60%' }}>
          <TouchableOpacity style={{ padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 }}><Text>G</Text></TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 }}><Text>F</Text></TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 }}><Text>A</Text></TouchableOpacity>
        </View>
      </View>

      {/* Sign up link */}
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
          <Text style={{ color: 'blue', fontWeight: '600' }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

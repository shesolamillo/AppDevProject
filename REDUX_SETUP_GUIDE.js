/**
 * Redux Setup Complete!
 *
 * Here's how to use Redux in your authentication screens:
 */

/**
 * EXAMPLE: Using Redux in Login Screen
 * 
 * import { View, TextInput, ActivityIndicator, Alert } from 'react-native';
 * import { useDispatch, useSelector } from 'react-redux';
 * import { userLogin, resetLogin } from '../app/reducers/auth';
 * import CustomButton from './CustomButton';
 *
 * const Login = ({ navigation }) => {
 *   const [email, setEmail] = useState('');
 *   const [password, setPassword] = useState('');
 *
 *   const dispatch = useDispatch();
 *   const { isLoading, isError, errorMessage, user } = useSelector(
 *     state => state.auth
 *   );
 *
 *   const handleLogin = () => {
 *     dispatch(userLogin({ email, password }));
 *   };
 *
 *   useEffect(() => {
 *     if (user) {
 *       navigation.navigate('Home');
 *       dispatch(resetLogin());
 *     }
 *   }, [user, navigation, dispatch]);
 *
 *   useEffect(() => {
 *     if (isError) {
 *       Alert.alert('Login Error', errorMessage);
 *     }
 *   }, [isError, errorMessage]);
 *
 *   return (
 *     <View>
 *       <TextInput
 *         placeholder="Email"
 *         value={email}
 *         onChangeText={setEmail}
 *       />
 *       <TextInput
 *         placeholder="Password"
 *         value={password}
 *         onChangeText={setPassword}
 *         secureTextEntry
 *       />
 *       <CustomButton
 *         label="LOGIN"
 *         loading={isLoading}
 *         onPress={handleLogin}
 *       />
 *     </View>
 *   );
 * };
 */

/**
 * EXAMPLE: Using Redux in Register Screen
 *
 * import { View, TextInput, ActivityIndicator, Alert } from 'react-native';
 * import { useDispatch, useSelector } from 'react-redux';
 * import { userRegister, resetRegister } from '../app/reducers/auth';
 * import CustomButton from './CustomButton';
 *
 * const Register = ({ navigation }) => {
 *   const [username, setUsername] = useState('');
 *   const [email, setEmail] = useState('');
 *   const [password, setPassword] = useState('');
 *
 *   const dispatch = useDispatch();
 *   const { isLoading, isError, errorMessage, user } = useSelector(
 *     state => state.auth
 *   );
 *
 *   const handleRegister = () => {
 *     dispatch(userRegister({ username, email, password }));
 *   };
 *
 *   useEffect(() => {
 *     if (user) {
 *       Alert.alert('Success', 'Registration successful');
 *       navigation.navigate('Login');
 *       dispatch(resetRegister());
 *     }
 *   }, [user, navigation, dispatch]);
 *
 *   useEffect(() => {
 *     if (isError) {
 *       Alert.alert('Registration Error', errorMessage);
 *     }
 *   }, [isError, errorMessage]);
 *
 *   return (
 *     <View>
 *       <TextInput
 *         placeholder="Username"
 *         value={username}
 *         onChangeText={setUsername}
 *       />
 *       <TextInput
 *         placeholder="Email"
 *         value={email}
 *         onChangeText={setEmail}
 *       />
 *       <TextInput
 *         placeholder="Password"
 *         value={password}
 *         onChangeText={setPassword}
 *         secureTextEntry
 *       />
 *       <CustomButton
 *         label="REGISTER"
 *         loading={isLoading}
 *         onPress={handleRegister}
 *       />
 *     </View>
 *   );
 * };
 */

/**
 * Redux State Structure:
 * {
 *   auth: {
 *     user: null | { id, email, username, ... },
 *     isLoading: false,
 *     isError: false,
 *     errorMessage: null
 *   }
 * }
 */

/**
 * To use Redux selectors and dispatch:
 *
 * import { useDispatch, useSelector } from 'react-redux';
 * import { userLogin, userRegister, userLogout, resetLogin } from '../app/reducers/auth';
 *
 * const dispatch = useDispatch();
 * const authState = useSelector(state => state.auth);
 * const { user, isLoading, isError, errorMessage } = authState;
 *
 * // Dispatch actions:
 * dispatch(userLogin({ email, password }));
 * dispatch(userRegister({ username, email, password }));
 * dispatch(userLogout());
 * dispatch(resetLogin());
 */

export default {};

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../utils';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const Stack = createStackNavigator();

const AuthNavigation = ({ setIsAuthenticated }) => {
  return (
    //<Stack.Navigator
     // initialRouteName={ROUTES.LOGIN}
     // screenOptions={{ headerShown: false }}
    //>
      //<Stack.Screen name={ROUTES.LOGIN} component={Login} />
      //<Stack.Screen name={ROUTES.REGISTER} component={Register} />
    //</Stack.Navigator>

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.LOGIN}>
        {props => <Login {...props} setIsAuthenticated={setIsAuthenticated} />}
      </Stack.Screen>
      <Stack.Screen name={ROUTES.REGISTER}>
        {props => <Register {...props} setIsAuthenticated={setIsAuthenticated} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
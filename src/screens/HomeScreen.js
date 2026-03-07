import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useSelector } from 'react-redux';
import { ROUTES } from '../utils';

// Sample product data (replace with real data later)
const PRODUCTS = [
  {
    id: '1',
    name: 'Classic White Tee',
    price: '₱299',
    image: 'https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=T-Shirt',
  },
  {
    id: '2',
    name: 'Black Hoodie',
    price: '₱599',
    image: 'https://via.placeholder.com/300x400/4ECDC4/FFFFFF?text=Hoodie',
  },
  {
    id: '3',
    name: 'Slim Fit Jeans',
    price: '₱899',
    image: 'https://via.placeholder.com/300x400/45B7D1/FFFFFF?text=Jeans',
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: '₱1,299',
    image: 'https://via.placeholder.com/300x400/96CEB4/FFFFFF?text=Shoes',
  },
];

const CATEGORIES = ['All', 'T-Shirts', 'Hoodies', 'Jeans', 'Shoes', 'Accessories'];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user } = useSelector(state => state.auth);

  // Get user's first name for greeting
  const getGreeting = () => {
    if (user && user.name) {
      const firstName = user.name.split(' ')[0];
      return `Hello, ${firstName}!`;
    }
    return 'Welcome!';
  };

  const getSubtitle = () => {
    if (user) {
      return 'Ready to shop?';
    }
    return 'Discover your style';
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.PRODUCT_DETAIL, { product: item })}
      style={{
        flex: 1,
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: '100%',
          height: 150,
          borderRadius: 12,
          backgroundColor: '#f5f5f5',
        }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 8, color: '#333' }}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#007AFF', marginTop: 4 }}>
        {item.price}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header with Logo and Greeting */}
      <View style={{ paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/logowithbackground.png')}
            style={{ width: 50, height: 50, borderRadius: 12 }}
            resizeMode="contain"
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>{getGreeting()}</Text>
            <Text style={{ fontSize: 14, color: '#666' }}>{getSubtitle()}</Text>
          </View>
          {/* Profile button - now with onPress */}
          <TouchableOpacity
            style={{ marginLeft: 'auto' }}
            onPress={() => navigation.navigate(ROUTES.PROFILE)}
          >
            <View style={{ padding: 10, backgroundColor: '#f0f0f0', borderRadius: 25 }}>
              <Text style={{ fontSize: 20 }}>👤</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="Search for clothes..."
            placeholderTextColor="#999"
            style={{
              backgroundColor: '#f8f8f8',
              borderRadius: 25,
              paddingHorizontal: 20,
              paddingVertical: 12,
              fontSize: 16,
              borderWidth: 1,
              borderColor: '#eee',
            }}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#333' }}>
            Shop by Category
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {CATEGORIES.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: index === 0 ? '#007AFF' : '#f0f0f0',
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    color: index === 0 ? '#fff' : '#333',
                    fontWeight: '500',
                    fontSize: 14,
                  }}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#333' }}>
            Featured Products
          </Text>
          <FlatList
            data={PRODUCTS}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        </View>

        {/* Your Original Green Button */}
        {/*<View style={{ alignItems: 'center', marginVertical: 30 }}>
          <View style={{ width: 80, height: 2, backgroundColor: '#007AFF', marginBottom: 15 }} />
          <Text style={{ fontSize: 18, color: '#666', marginBottom: 20 }}>
            Explore More
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PROFILE)}>
            <View
              style={{
                padding: 20,
                backgroundColor: 'green',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 6,
              }}
            >
              <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>
                GO TO PROFILE SCREEN
              </Text>
            </View>
          </TouchableOpacity>
        </View> */}

        {/* Footer */}
        <View style={{ paddingBottom: 20, alignItems: 'center' }}>
          <Text style={{ color: '#999' }}>© 2024 Clothing Store. All rights reserved.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
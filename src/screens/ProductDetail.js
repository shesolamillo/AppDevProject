// screens/ProductDetail.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

const ProductDetail = ({ route, navigation }) => {
  // Get product data from navigation params
  const { product } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 50,
          left: 20,
          zIndex: 10,
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 20 }}>←</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <Image
          source={{ uri: product.image }}
          style={{
            width: '100%',
            height: 400,
            resizeMode: 'cover',
          }}
        />

        {/* Product Details Container */}
        <View style={{ padding: 20 }}>
          {/* Product Name */}
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#333' }}>
            {product.name}
          </Text>

          {/* Price */}
          <Text style={{ fontSize: 24, fontWeight: '600', color: '#007AFF', marginTop: 10 }}>
            {product.price}
          </Text>

          {/* Rating (Sample) */}
          <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: '#FFD700' }}>★★★★☆</Text>
            <Text style={{ marginLeft: 8, color: '#666' }}>(24 reviews)</Text>
          </View>

          {/* Description */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>
              Description
            </Text>
            <Text style={{ fontSize: 16, color: '#666', marginTop: 8, lineHeight: 24 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Text>
          </View>

          {/* Size Selection */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>
              Select Size
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              {['S', 'M', 'L', 'XL'].map((size) => (
                <TouchableOpacity
                  key={size}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    borderWidth: 1,
                    borderColor: '#ddd',
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: size === 'M' ? '#007AFF' : '#fff',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: size === 'M' ? '#fff' : '#333',
                    }}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Quantity */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>
              Quantity
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#f0f0f0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>-</Text>
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 20, fontSize: 18 }}>1</Text>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#f0f0f0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#007AFF',
              paddingVertical: 18,
              borderRadius: 30,
              marginTop: 30,
              marginBottom: 20,
              alignItems: 'center',
              shadowColor: '#007AFF',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { ROUTES } from '../utils';

const ProfileScreen = ({ navigation }) => {
  // Sample user data (replace with actual data from your backend/Redux later)
  const user = {
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@email.com',
    memberSince: 'January 2024',
    orders: 12,
    wishlist: 8,
    addresses: 3,
  };

  const MenuItem = ({ icon, title, onPress, badge }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
      }}
    >
      <Text style={{ fontSize: 24, marginRight: 15 }}>{icon}</Text>
      <Text style={{ flex: 1, fontSize: 16, color: '#333' }}>{title}</Text>
      {badge && (
        <View style={{
          backgroundColor: '#007AFF',
          borderRadius: 12,
          paddingHorizontal: 8,
          paddingVertical: 2,
          marginRight: 10,
        }}>
          <Text style={{ color: '#fff', fontSize: 12 }}>{badge}</Text>
        </View>
      )}
      <Text style={{ fontSize: 18, color: '#999' }}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Header with Back Button and Title */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 24, color: '#333' }}>←</Text>
        </TouchableOpacity>
        <Text style={{
          flex: 1,
          fontSize: 20,
          fontWeight: 'bold',
          color: '#333',
          marginLeft: 20,
        }}>
          My Profile
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 22, color: '#333' }}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header with Avatar and User Info */}
        <View style={{
          backgroundColor: '#fff',
          paddingVertical: 30,
          paddingHorizontal: 20,
          alignItems: 'center',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 3,
          marginBottom: 15,
        }}>
          {/* Avatar with edit button */}
          <View style={{ position: 'relative' }}>
            <Image
              source={require('../../assets/logowithbackground.png')}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                borderWidth: 3,
                borderColor: '#007AFF',
              }}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#007AFF',
                width: 36,
                height: 36,
                borderRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#fff',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>✎</Text>
            </TouchableOpacity>
          </View>

          {/* User Name and Email */}
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333', marginTop: 15 }}>
            {user.name}
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginTop: 5 }}>
            {user.email}
          </Text>
          <Text style={{ fontSize: 12, color: '#999', marginTop: 5 }}>
            Member since {user.memberSince}
          </Text>

          {/* Stats Cards */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginTop: 25,
            paddingTop: 20,
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0',
          }}>
            <StatCard number={user.orders} label="Orders" />
            <StatCard number={user.wishlist} label="Wishlist" />
            <StatCard number={user.addresses} label="Addresses" />
          </View>
        </View>

        {/* Menu Sections */}
        <View style={{ backgroundColor: '#fff', marginTop: 10, paddingVertical: 10 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#666',
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
            My Account
          </Text>
          <MenuItem icon="📦" title="My Orders" badge="3" onPress={() => {}} />
          <MenuItem icon="❤️" title="Wishlist" onPress={() => {}} />
          <MenuItem icon="📍" title="Addresses" onPress={() => {}} />
          <MenuItem icon="💳" title="Payment Methods" onPress={() => {}} />
        </View>

        <View style={{ backgroundColor: '#fff', marginTop: 10, paddingVertical: 10 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#666',
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
            Settings & Support
          </Text>
          <MenuItem icon="⚙️" title="Settings" onPress={() => {}} />
          <MenuItem icon="❓" title="Help Center" onPress={() => {}} />
          <MenuItem icon="📝" title="Terms & Conditions" onPress={() => {}} />
          <MenuItem icon="🔒" title="Privacy Policy" onPress={() => {}} />
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#ff3b30',
            marginHorizontal: 20,
            marginVertical: 30,
            paddingVertical: 15,
            borderRadius: 25,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// Reusable Stat Card Component
const StatCard = ({ number, label }) => (
  <View style={{ alignItems: 'center' }}>
    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#007AFF' }}>{number}</Text>
    <Text style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{label}</Text>
  </View>
);

export default ProfileScreen;
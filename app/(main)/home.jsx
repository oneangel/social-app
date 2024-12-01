import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'

const home = () => {
  const {setAuth} = useAuth();

  const onLogout = async () => {
    // setAuth(null);
    const {error} = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Cerrar Sesion", "Error al cerrar sesion!");
    }
  }
  return (
    <ScreenWrapper>
      <Text>home</Text>
      <Button title="logut" onPress={onLogout} />
    </ScreenWrapper>
  )
}

export default home

const styles = StyleSheet.create({})
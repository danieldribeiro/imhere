import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -50,
    gap: 8,
  },
  input:{
    backgroundColor: '#262626',
    height: 54,
    borderRadius: 6,
    flex: 1,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 18,
    borderColor: '#0D0D0D',
  },
  button:{
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: '#FFFFFF',
    fontSize: 18,
  }
})
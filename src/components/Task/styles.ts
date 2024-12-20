import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container:{
    marginHorizontal: 30,
    width: '85%',
    height: 64,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 8,
    padding: 12,
  },
  text:{
    maxWidth: 290,
    fontSize: 16,
    color: '#FFFFFF',
    flexWrap: 'wrap',
    flex: 1,
  },
  checkbox: {
    marginRight: 12,
  },
  checked:{
    color: '#808080',
    textDecorationLine: 'line-through',
  }
})
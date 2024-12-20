import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header:{
    width: '100%',
    height: 180,
    backgroundColor: '#0D0D0D',
    paddingVertical: 100,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 35,
  },
  input:{
    padding: 24,
  },
  tasksInfoContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 30,
    alignItems: 'center',	
    borderBottomColor: '#808080',
    borderBottomWidth: .5,
    paddingBottom: 20,
    width: '85%',
    alignSelf: 'center',
  },
  tasksInfo:{
    flexDirection: 'row',
    alignItems: 'center',	
    gap: 8,
  },
  taskInfoTitle: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  badgeText:{
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main:{
    paddingHorizontal: 24,
    paddingBottom: 150,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    marginBottom: 20,
  },
  mainText:{
    color: '#808080',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text:{
    color: '#808080',
    fontSize: 18,
    textAlign: 'center',
  }
});
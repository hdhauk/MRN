import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 70/*,
    backgroundColor: '#2196F3'*/
  },
  form: {
    backgroundColor: '#FAFAFA',
    margin: 10,
    borderRadius: 4,
    opacity:0.7
  },
  row: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems:'center'
  },
  rowLabel: {
    color: '#757575'
  },
  textInput: {
    height: 40,
    color: '#212121',
    textAlign:'center'
  },
  textInputReadonly: {
    height: 40,
    color: '#9E9E9E',
    opacity:1
  },
  loginRow: {
    paddingBottom: 5,
    paddingHorizontal: 5,
    flexDirection: 'row'
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#2196F3',
    backgroundColor: '#2196F3',
    padding: 6,
    opacity:1
  },
  loginText: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  }
})

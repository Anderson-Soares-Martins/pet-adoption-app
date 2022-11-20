import { StyleSheet, unstable_enableLogBox } from "react-native"

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingStart: '10%',
  },
  message: {
    fontSize: 30,
    paddingTop: '5%',
    fontWeight: 'bold',
  },
  subMessage: {
    fontSize: 20,
  },
  logo: {
    width: 65,
    height: 65,
  },
  form: {
    paddingStart: '10%',
    paddingEnd: '10%',
    paddingTop: '10%',
    flex: 1.5,
  },
  formText: {
    fontSize: 18,
    color: '#cb3ce3',
    paddingBottom: '2%',
    paddingTop: '5%'
  },
  formInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#8bb3bf',
    fontSize: 20,
    paddingBottom: '5%',
  },
  button: {
    backgroundColor: '#cb3ce3',
    borderRadius: 30,
    padding: '5%',
    marginTop: '10%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  registerButton: {
    marginTop: '5%',
    alignItems: 'center',
  },
  registerText: {
    color: '#808080',
    fontSize: 15,
  }

})

export default Styles
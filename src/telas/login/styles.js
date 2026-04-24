import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F4F7F8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 22,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  backText: {
    color: '#253B49',
    fontSize: 12,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 3,
  },
  logo: {
    width: 180,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 18,
  },
  inputBox: {
    height: 52,
    borderWidth: 1.5,
    borderColor: '#253B49',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#111827',
    fontSize: 16,
  },
  forgotText: {
    color: '#253B49',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 18,
  },
  errorText: {
    color: '#B91C1C',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#253B49',
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
  },
});

export default styles;

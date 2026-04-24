import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F4F7F8',
  },
  container: {
    flexGrow: 1,
    padding: 22,
    paddingTop: 44,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logo: {
    width: 150,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    color: '#253B49',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#4B5563',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
  },
  cardTitle: {
    color: '#253B49',
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 8,
  },
  cardText: {
    color: '#4B5563',
    fontSize: 15,
    lineHeight: 22,
  },
  buttonArea: {
    gap: 12,
    marginTop: 12,
  },
  buttonPrimary: {
    backgroundColor: '#253B49',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#03989E',
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
  },
  buttonSecondaryText: {
    color: '#03989E',
    fontWeight: '800',
    fontSize: 15,
  },
});

export default homeStyles;

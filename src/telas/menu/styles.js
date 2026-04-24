import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F4F7F8' },
  container: { padding: 18, paddingBottom: 90 },
  title: { color: '#253B49', fontSize: 24, fontWeight: '800', marginBottom: 6 },
  subtitle: { color: '#6B7280', fontSize: 14, marginBottom: 18 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
  },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12 },
  patientName: { color: '#253B49', fontSize: 17, fontWeight: '800', flex: 1 },
  badge: { backgroundColor: '#E6F7F8', color: '#03989E', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 999, fontWeight: '800', fontSize: 12 },
  meta: { color: '#4B5563', fontSize: 14, marginTop: 8, lineHeight: 20 },
  button: { backgroundColor: '#253B49', borderRadius: 14, paddingVertical: 13, alignItems: 'center', marginTop: 14 },
  buttonSecondary: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#03989E', borderRadius: 14, paddingVertical: 13, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  buttonSecondaryText: { color: '#03989E', fontWeight: '800' },
  detailRow: { borderBottomWidth: 1, borderBottomColor: '#E5E7EB', paddingVertical: 12 },
  label: { color: '#6B7280', fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },
  value: { color: '#253B49', fontSize: 15, fontWeight: '700', marginTop: 3 },
  input: { minHeight: 120, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 14, padding: 14, textAlignVertical: 'top', backgroundColor: '#FFFFFF', color: '#111827' },
});

export default styles;

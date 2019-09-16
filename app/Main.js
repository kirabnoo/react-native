import Header from './components/Header';
const headerTitle = 'To Do';
// after status bar, replace the <Text> with
<View style={styles.centered}>
  <Header title={headerTitle} />
</View>;
// add styles
centered: {
  alignItems: 'center';
}
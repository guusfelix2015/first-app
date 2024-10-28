import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Coffee, coffeeList } from './CoffeeList/data/coffeeList';
import { CoffeeItem } from './CoffeeList/CoffeeItem';
import { CoffeeHeader } from './CoffeeList/CoffeeHeader';
import { SeparatorItem } from './CoffeeList/SeparatorItem';

export default function App() {

  function renderItem({ item }: ListRenderItemInfo<Coffee>) {
    return <CoffeeItem {...item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={SeparatorItem}
        ListHeaderComponent={<CoffeeHeader />}
        data={coffeeList}
        keyExtractor={(coffe) => coffe.name}
        renderItem={renderItem}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

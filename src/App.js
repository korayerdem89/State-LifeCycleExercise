import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, Switch, View} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock`n Code', isFavorite: true},
  {id: 4, name: 'do(drink', isFavorite: false},
  {id: 5, name: 'esc', isFavorite: false},
];

const App = () => {
  const [cafeList, setCafeList] = useState(data); //uygulama ilk açıldığında bütün kafeleri görmemiz için {data} ekleriz.
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected); //bu çalışmada kilit kısım burası. Burayı anlayınca diğerleri de çorap söküğü gibi geliyor. 
    isFavoriteSelected
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }
  return (
    <SafeAreaView>
      <View style={{margin: 10}}>
        <Text>Show Only Favorites</Text>
        <Switch
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            marginTop: 10,
          }}
          value={showOnlyFavorites}
          onValueChange={onFavoritesChange}
        />
      </View>
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text style={{fontSize: 30}}>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default App;

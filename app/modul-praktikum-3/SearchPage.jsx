import { View, TextInput } from 'react-native';
import { useState } from 'react';
import BookCollections from './BookCollections';
import ListBook from '../../constants/list_books';

export default function SearchPage() {
  const [search, setSearch] = useState('');

  const filteredBooks = ListBook.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Search book..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 16,
          borderRadius: 8
        }}
      />

      <BookCollections books={filteredBooks} />
    </View>
  );
}
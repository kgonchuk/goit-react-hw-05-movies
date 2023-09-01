import { useState } from 'react';
import { SearchForm, Input, Button } from './SearchForm.styled';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState();

  const handleSubmit = evt => {
    evt.preventDefault();
    searchMovies(query.toLowerCase());
  };
  const handleInputSearch = evt => {
    setQuery(evt.target.value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputSearch}
      ></Input>
      <Button type="button">Search</Button>
    </SearchForm>
  );
};
export default Form;

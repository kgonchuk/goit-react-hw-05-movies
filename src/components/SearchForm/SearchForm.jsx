import { useState } from 'react';
import { SearchForm, Input, Button } from './SearchForm.styled';

import { Toaster, toast } from 'react-hot-toast';

const Form = ({ value, onSubmit }) => {
  const [query, setQuery] = useState(value);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Sorry, enter something in search line.');
      return;
    }
    onSubmit(query);
  };

  const handleInputChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Toaster />
      <Input
        type="text"
        // debounceTimeout={500}
        value={query}
        onChange={handleInputChange}
        placeholder="Please enter your query"
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};
export default Form;

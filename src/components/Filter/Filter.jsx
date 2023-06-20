import PropTypes from 'prop-types';
import { Input, Label, Wrapper } from './Filter.styled';
import { getFilter, setFilter } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = ({ currentTarget: { value } }) => { dispatch(setFilter(value)) };

  return (
    <Wrapper>
      <Label htmlFor="filter"> Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filterValue}
        onChange={onChangeFilter}
      />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
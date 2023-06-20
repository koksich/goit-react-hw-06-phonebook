import PropTypes from 'prop-types';
import { Input, Label, Wrapper } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor="filter"> Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
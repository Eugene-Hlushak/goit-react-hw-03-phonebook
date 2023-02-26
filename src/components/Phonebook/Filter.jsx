import PropTypes from 'prop-types';
import { FilterLabel, FormInput } from './PhoneBook.styled';

export default function Filter({ handleChange }) {
  return (
    <FilterLabel>
      Find contact by name
      <FormInput type="text" name="filter" onChange={handleChange} />
    </FilterLabel>
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

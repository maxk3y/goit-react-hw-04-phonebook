import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, children }) => {
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      {children}
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

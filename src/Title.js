import PropTypes from 'prop-types';
function Title({ greeting = "W'sup", title }) {
  return (
    <h1>
      {greeting} {title}
    </h1>
  );
}

Title.propTypes = {
  greeting: PropTypes.string,
  title: PropTypes.string,
};

export default Title;

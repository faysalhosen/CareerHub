import PropTypes from 'prop-types'

const PageHeader = ({title}) => {
  return (
    <section className="text-3xl font-semibold py-10 text-center bg-gradient-to-r from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)]">
      <div className="container">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string
}

export default PageHeader;

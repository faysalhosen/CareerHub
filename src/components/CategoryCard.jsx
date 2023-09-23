import PropTypes from 'prop-types';

const CategoryCard = ({category}) => {
  const {logo, category_name, availability} = category;
  
  return (
    <div className='bg-gradient-to-r from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)] p-8 rounded-lg'>
      <img src={logo} alt="Icon" className='block mb-4 w-16' />
      <h4 className='text-xl font-semibold mb-2'>{category_name}</h4>
      <p className='text-gray-400'>{availability}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object
}

export default CategoryCard;
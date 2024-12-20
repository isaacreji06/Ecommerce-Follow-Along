import PropTypes from 'prop-types';

function Card({ title, index }) {
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2jpJZRe_IxS6W-PFk5L1BuqPr8GUZ-r77A&s"
          alt="Product"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          -20%
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title} - {index + 1}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Premium wireless headphones with active noise cancellation and 30-hour
          battery life.
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">$199.99</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;

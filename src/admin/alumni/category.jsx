import { useState } from 'react';
import { FiFilter, FiChevronDown, FiX } from 'react-icons/fi';

function FilterBar() {
  const [showOrderTypeDropdown, setShowOrderTypeDropdown] = useState(false);
  const [selectedOrderType, setSelectedOrderType] = useState([]);

  const orderTypeOptions = ['Akademik', 'Prestasi', 'Event', 'Esktrakulikuler', 'Alumni', 'Kerjasama'];

  const handleOrderTypeSelect = (type) => {
    if (selectedOrderType.includes(type)) {
      setSelectedOrderType(selectedOrderType.filter(item => item !== type));
    } else {
      setSelectedOrderType([...selectedOrderType, type]);
    }
  };

  const resetFilters = () => {
    setSelectedOrderType([]);
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 border rounded-2xl">
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-gray-500">
          <FiFilter className="mr-2" />
          <span>Filter</span>
        </div>

        {/* Order Type Filter */}
        <div className="relative">
          <button
            onClick={() => setShowOrderTypeDropdown(!showOrderTypeDropdown)}
            className="flex items-center px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50"
          >
            <span className="mr-2 text-sm">
              {selectedOrderType.length ? selectedOrderType.join(', ') : 'Category'}
            </span>
            <FiChevronDown className={`transition-transform ${showOrderTypeDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showOrderTypeDropdown && (
            <div className="absolute z-10 mt-2 w-[360px] bg-white rounded-lg shadow-lg border border-gray-200 p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Select Categories</h3>
                <button
                  onClick={() => setSelectedOrderType([])}
                  className="text-xs text-gray-500 hover:text-gray-700 font-medium"
                >
                  Clear all
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4 ">
                {orderTypeOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOrderTypeSelect(option)}
                    className={`px-1 py-1.5 rounded-lg text-sm transition-colors
                      ${selectedOrderType.includes(option)
                        ? 'bg-blue-50 text-blue-600 border border-blue-200 font-medium'
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <div className="text-xs text-gray-500">*You can choose multiple categories</div>
                <button
                  onClick={() => setShowOrderTypeDropdown(false)}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-sm font-medium transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={resetFilters}
        className="text-gray-500 hover:text-gray-700 px-2 py-2 rounded-md hover:bg-gray-50"
      >
        Reset Filter
      </button>
    </div>
  );
}

export default FilterBar;

import { useState } from 'react';
import { FiFilter, FiChevronDown, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function FilterBar() {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showOrderTypeDropdown, setShowOrderTypeDropdown] = useState(false);
  const [showYearMonth, setShowYearMonth] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOrderType, setSelectedOrderType] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const orderTypeOptions = ['Akademik', 'Prestasi', 'Event', 'Esktrakulikuler', 'Alumni', 'Kerjasama'];
  const years = Array.from({ length: 10 }, (_, i) => currentDate.getFullYear() - i);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDateDropdown(false);
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const calendarDays = [];
    const prevMonth = new Date(year, month - 1);
    const daysInPrevMonth = getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());

    // Previous month's days
    for (let i = 0; i < firstDay; i++) {
      const day = daysInPrevMonth - firstDay + i + 1;
      const date = new Date(year, month - 1, day);
      calendarDays.push(
        <button
          key={`prev-${day}`}
          onClick={() => handleDateSelect(date)}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100"
        >
          {day}
        </button>
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        selectedDate?.getDate() === day &&
        selectedDate?.getMonth() === month &&
        selectedDate?.getFullYear() === year;

      calendarDays.push(
        <button
          key={`curr-${day}`}
          onClick={() => handleDateSelect(date)}
          className={`w-8 h-8 flex items-center justify-center rounded-full 
            ${isSelected ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
        >
          {day}
        </button>
      );
    }

    // Next month's days
    let nextDay = 1;
    while (calendarDays.length < 42) {
      const date = new Date(year, month + 1, nextDay);
      calendarDays.push(
        <button
          key={`next-${nextDay}`}
          onClick={() => handleDateSelect(date)}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100"
        >
          {nextDay}
        </button>
      );
      nextDay++;
    }

    return calendarDays;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleOrderTypeSelect = (type) => {
    if (selectedOrderType.includes(type)) {
      setSelectedOrderType(selectedOrderType.filter(item => item !== type));
    } else {
      setSelectedOrderType([...selectedOrderType, type]);
    }
  };

  const resetFilters = () => {
    setSelectedDate(null);
    setSelectedOrderType([]);
  };

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : 'Date';

  return (
    <div className="flex items-center justify-between bg-white p-3 border rounded-2xl">
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-gray-500">
          <FiFilter className="mr-2" />
          <span>Filter</span>
        </div>

        {/* Date Filter */}
        <div className="relative">
          <button
            onClick={() => setShowDateDropdown(!showDateDropdown)}
            className={`flex items-center px-3 py-2 rounded-md border ${
              selectedDate ? 'bg-blue-50 border-blue-200' : 'border-gray-200'
            } hover:bg-gray-50`}
          >
            <span className="mr-2">{formattedDate}</span>
            <FiChevronDown className={`transition-transform ${showDateDropdown ? 'rotate-180' : ''}`} />
            {selectedDate && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDate(null);
                }}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <FiX size={16} />
              </button>
            )}
          </button>

          {showDateDropdown && (
            <div className="absolute z-10 mt-1 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
              <div className="flex justify-between items-center mb-4">
                <button onClick={handlePrevMonth} className="p-1.5 hover:bg-gray-100 rounded-full">
                  <FiChevronLeft className="text-gray-600" />
                </button>
                <button 
                  onClick={() => setShowYearMonth(!showYearMonth)}
                  className="flex items-center gap-1 px-3 py-1.5 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <span className="font-medium text-gray-700">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </span>
                  <FiChevronDown className={`transition-transform ${showYearMonth ? 'rotate-180' : ''}text-gray-500`}/>
                </button>
                <button onClick={handleNextMonth} className="p-1.5 hover:bg-gray-100 rounded-full">
                  <FiChevronRight className="text-gray-600" />
                </button>
              </div>
            
              {showYearMonth ? (
                <div className="mb-4">
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {months.map((month, index) => (
                      <button
                        key={month}
                        onClick={() => {
                          setCurrentDate(new Date(currentDate.getFullYear(), index));
                          setShowYearMonth(false);
                        }}
                        className={`p-2 text-sm rounded-lg transition-colors
                          ${currentDate.getMonth() === index
                            ? 'bg-blue-500 text-white font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {month}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {years.map(year => (
                      <button
                        key={year}
                        onClick={() => {
                          setCurrentDate(new Date(year, currentDate.getMonth()));
                          setShowYearMonth(false);
                        }}
                        className={`p-2 text-sm rounded-lg transition-colors
                          ${currentDate.getFullYear() === year
                            ? 'bg-blue-500 text-white font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-7 gap-1 mb-3">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                      <div key={d} className="w-9 h-9 flex items-center justify-center text-sm font-medium text-gray-500">
                        {d}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">{generateCalendarDays()}</div>
                </>
              )}

              <button
                onClick={() => setShowDateDropdown(false)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Apply
              </button>
            </div>
          )}
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
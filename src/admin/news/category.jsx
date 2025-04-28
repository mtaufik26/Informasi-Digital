import { useState } from 'react';
import { FiFilter, FiChevronDown, FiPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function FilterBar() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // Date picker handlers
  const handleDateClick = (day) => {
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDates(prev => {
      const isSelected = prev.includes(dateString);
      return isSelected ? prev.filter(d => d !== dateString) : [...prev, dateString];
    });
  };

  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = [];

    // Add empty cells for previous month days
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
    }

    // Add current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = selectedDates.includes(dateString);

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`w-8 h-8 rounded-full text-sm flex items-center justify-center
            ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-3">
      <div className="flex items-center gap-4">
        {/* Filter By section */}
        <div className="flex items-center text-gray-600 px-2">
          <FiFilter className="w-4 h-4" />
          <span className="ml-2 text-sm">Filter By</span>
        </div>

        {/* Date Picker */}
        <div className="relative">
          <button 
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="flex items-center px-3 py-1.5 border rounded-md hover:bg-gray-50 transition-all"
          >
            <span className="text-gray-600 text-sm">
              {selectedDates.length > 0 ? `${selectedDates.length} dates selected` : 'Date'}
            </span>
            <FiChevronDown className="w-4 h-4 text-gray-400 ml-2" />
          </button>

          {showDatePicker && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-50 w-64">
              {/* Calendar Header */}
              <div className="flex justify-between items-center mb-4">
                <button onClick={() => setCurrentMonth(m => m === 0 ? 11 : m - 1)}>
                  <FiChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-medium">{months[currentMonth]} {currentYear}</span>
                <button onClick={() => setCurrentMonth(m => m === 11 ? 0 : m + 1)}>
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Calendar Days Header */}
              <div className="grid grid-cols-7 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                  <div key={day} className="text-center text-gray-500 text-xs">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays()}
              </div>

              {/* Footer */}
              <div className="mt-4 text-xs text-gray-500">*You can choose multiple date</div>
              <div className="flex justify-between mt-4">
                <button 
                  onClick={() => setSelectedDates([])}
                  className="text-gray-500 text-sm hover:text-gray-700"
                >
                  Clear
                </button>
                <button 
                  onClick={() => setShowDatePicker(false)}
                  className="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Rest of your existing code... */}
      </div>
    </div>
  );
}

export default FilterBar;
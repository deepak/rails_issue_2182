fooApp.isLeapYear = function(year) {
  // http://en.wikipedia.org/wiki/Leap_year
  // in the gregorian calender
  if(year > 1582) {
    if((year % 400) == 0) {
      return true;
    } else if ((year % 100) == 0) {
      return false;
    } else if ((year % 4) == 0) {
      return true;
    } else {
      return false;
    } 
  } else {
    return false;
  };
};

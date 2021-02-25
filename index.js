// Import stylesheets
import "./style.css";

function stringToDate(_date, _format, _delimiter) {
  var formatLowerCase = _format.toLowerCase();
  var formatItems = formatLowerCase.split(_delimiter);
  var dateItems = _date.split(_delimiter);
  var monthIndex = formatItems.indexOf("mm");
  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var month = parseInt(dateItems[monthIndex]);
  month -= 1;
  var formatedDate = new Date(
    dateItems[yearIndex],
    month,
    dateItems[dayIndex],
    3,
    3,
    4
  );
  return formatedDate.toLocaleString(); //formatedDate.toLocaleDateString() + formatedDate.toLocaleTimeString();
  //return formatedDate;
}
var date = new Date("02/25/2021T10:20:30Z");
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = stringToDate("17/9/2014", "dd/MM/yyyy", "/");
appDiv.innerHTML = stringToDate("02/25/2021", "mm/dd/yyyy", "/");

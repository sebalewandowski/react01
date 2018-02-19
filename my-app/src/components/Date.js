import React from 'react';
import dateFormat from 'dateformat';

function format(data) {
  let now           = now;
  let formattedDate = dateFormat(data, 'shortDate');
  let formattedDay  = formattedDate.split('/')[1];
  let currentDate   = dateFormat(now, 'shortDate');
  let currentDay    = currentDate.split('/')[1];
  let daysDiff      = currentDay - formattedDay;

//   calculating day diff
  if (daysDiff >= 7) {
    return formattedDate;
  } else if (daysDiff === 1) {
    return daysDiff + " day ago";
  } else {
    return daysDiff + " days ago";
  }

 return data;
}


function Date(props) {

    return (
      <div>
        <h5>Date: {format(props.date)}
        </h5>
      </div>
    );
  }

  export default Date;
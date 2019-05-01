import moment from 'moment';
require('moment/locale/pl');

moment.locale(); 

export const getDateInCorrectFormat = (meetingDate) => {

    const date = new Date(meetingDate)
    const newDate = moment(date).format('LL');
    return newDate

}
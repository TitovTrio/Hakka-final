import moment from 'moment';
import 'moment-precise-range-plugin';

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function timer(date1) {
    const date1Format = moment(date1);
    const currentDate = moment(Date.now());
    return moment.preciseDiff(date1Format, currentDate);
}
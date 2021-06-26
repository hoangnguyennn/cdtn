export const toCurrency = (num: number) => {
  return Number(num).toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
};

export const isoDateToNativeDate = (date: number) => {
  const dateObject = new Date(date);

  const currentDate = toNDigits(dateObject.getDate());
  const currentMonth = toNDigits(dateObject.getMonth() + 1);
  const currentYear = toNDigits(dateObject.getFullYear(), 4);
  const dateArr = [currentDate, currentMonth, currentYear];

  const currentHour = toNDigits(dateObject.getHours());
  const currentMin = toNDigits(dateObject.getMinutes());
  const currentSec = toNDigits(dateObject.getSeconds());
  const timeArr = [currentHour, currentMin, currentSec];

  return `${dateArr.join('/')} ${timeArr.join(':')}`;
};

/**
 *
 * Convert a number or string to a new string with specifical length
 * @param num
 * @param numberOfDigits
 * @returns
 */
export const toNDigits = (num: number | string, numberOfDigits = 2) => {
  const zeroBefore = Array.from(new Array(numberOfDigits))
    .fill(0)
    .join('');
  return `${zeroBefore}${num}`.slice(-numberOfDigits);
};

const formatters = {
  toCurrency,
  isoDateToNativeDate
};

export default formatters;

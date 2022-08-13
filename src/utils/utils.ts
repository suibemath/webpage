/**
 * 判断是否为移动设备
 */
import moment from "moment";

export const isMobile = () => {
  const deviceWidth = document.querySelector('body')?.offsetWidth;
  return deviceWidth && deviceWidth < 480;
};

/**
 * 获得格式化日期时间字符串（年-月-日 时-分）
 * @param time
 * @param format
 */
export const formatPartDateTimeStr = (time: any, format = 'YYYY-MM-DD HH:mm') => {
  if (!time) {
    return '';
  }
  return moment(time).format(format);
};

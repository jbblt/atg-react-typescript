export const formatDate = (date: string) => {
  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    return date;
  }

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Intl.DateTimeFormat("sv-SE", options).format(new Date(date));
};

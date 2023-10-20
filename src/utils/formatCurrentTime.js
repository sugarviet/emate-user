export function formatCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours -= 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const formattedTime = `${hours}:${minutes} ${amOrPm}`;

  return formattedTime;
}
export function formatTime(time) {
  const now = new Date(time);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours -= 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const formattedTime = `${hours}:${minutes} ${amOrPm}`;

  return formattedTime;
}

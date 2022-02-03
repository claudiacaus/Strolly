// this function take the MS as argument and return it into time format hh:mm:ss
export function formatTime(ms) {
  if (!ms) throw new Error("ms argument should be > 0");
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return `${hours <= 0 ? "" : hours < 10 ? `0${hours}:` : `${hours}:`}${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

export function msShouldStartFrom(startTime) {
  if (!startTime) throw new Error("startTime argument should be > 0");
  const from = startTime;
  const timeNow = new Date().getTime();
  const totalMs = timeNow - from;
  return totalMs;
}

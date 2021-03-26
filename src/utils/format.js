export const formatNumber = (num = 0) => {
  if (!num || typeof num !== 'number') {
    return 0
  }

  if (num < 1000) {
    return num
  }

  if (num < 1000000) {
    return `${Math.round(num / 100) / 10}k`
  }

  return `${Math.round(num / 100000) / 10}M`
}

export const formatDuration = (totalSeconds) => {
  if (!totalSeconds) {
    return `00:00`
  }

  let seconds = totalSeconds
  let hours = Math.floor(seconds / 3600);
  if (hours > 0 && hours < 10) {
    hours = `0${hours}`
  }
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  seconds = Math.floor(seconds % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  return `${hours ? `${hours}:` : ''}${minutes}:${seconds}`
}
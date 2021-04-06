import swisseph from 'swisseph'

export const utcToJulianUt = (utcDate) => {
  const { julianDayUT } = swisseph.swe_utc_to_jd(
    utcDate.getUTCFullYear(),
    utcDate.getUTCMonth() + 1,
    utcDate.getUTCDate(),
    utcDate.getUTCHours(),
    utcDate.getUTCMinutes(),
    utcDate.getUTCSeconds(),
    swisseph.SE_GREG_CAL
  );

  return julianDayUT;
};

export const degreesToDms = (value) => {
  const { degree: degrees, min: minutes, second: seconds } = swisseph.swe_split_deg(value, swisseph.SE_SPLIT_DEG_ZODIACAL);

  return {
    degrees,
    minutes,
    seconds,
    longitude: value
  };
};

export const zodiacSign = (degrees: number): number => (Math.floor(degrees / 30) % 12) + 1;

export const normalizeDegrees = (degress: number): number => {
  if (degress < -180) {
    return degress + 360;
  }
  if (degress > 180) {
    return degress - 360;
  }

  return degress;
};

// Хоцорсон хоногийн торгууль тооцох функц (жишээ)
const RATE_PER_DAY = 100; // хоног тутмын торгууль (₮) — өөрийнхөөрөө солино

function calcFine(daysLate, ratePerDay = RATE_PER_DAY) {
  if (!Number.isInteger(daysLate) || daysLate < 0) {
    throw new RangeError('daysLate нь 0 эсвэл түүнээс их бүхэл тоо байх ёстой');
  }
  return daysLate * ratePerDay;
}

module.exports = { calcFine, RATE_PER_DAY };

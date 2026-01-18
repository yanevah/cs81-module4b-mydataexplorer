// GitHub Repo URL: https://github.com/yanevah/cs81-module4b-mydataexplorer

// Weekly personal data journal
// Each object represents one day and tracks sleep, screen time, mood, caffeine, and focus.
const weekData = [
  {
    day: "Monday",
    sleepHours: 6.5,
    screenTime: 7,
    mood: "tired",
    caffeineIntake: 2,
    focusLevel: 5
  },
  {
    day: "Tuesday",
    sleepHours: 7,
    screenTime: 6,
    mood: "productive",
    caffeineIntake: 1,
    focusLevel: 7
  },
  {
    day: "Wednesday",
    sleepHours: 6,
    screenTime: 8,
    mood: "stressed",
    caffeineIntake: 2,
    focusLevel: 4
  },
  {
    day: "Thursday",
    sleepHours: 6.5,
    screenTime: 5,
    mood: "focused",
    caffeineIntake: 1,
    focusLevel: 8
  },
  {
    day: "Friday",
    sleepHours: 6,
    screenTime: 7,
    mood: "distracted",
    caffeineIntake: 3,
    focusLevel: 5
  },
  {
    day: "Saturday",
    sleepHours: 8,
    screenTime: 4,
    mood: "relaxed",
    caffeineIntake: 2,
    focusLevel: 7
  },
  {
    day: "Sunday",
    sleepHours: 7.5,
    screenTime: 4,
    mood: "calm",
    caffeineIntake: 2,
    focusLevel: 6
  }
];

// PREDICTION:
// I predict Wednesday will have the highest screen time because it is my busiest workday.
function findHighestScreenTime(data) {
  let maxDay = data[0];

  for (let day of data) {
    if (day.screenTime > maxDay.screenTime) {
      maxDay = day;
    }
  }

  return maxDay;
}

// PREDICTION:
// I expect my average sleep to be just under 7 hours since I sleep more on weekends.
function averageSleep(data) {
  let total = 0;

  for (let day of data) {
    total += day.sleepHours;
  }

  return (total / data.length).toFixed(1);
}

// PREDICTION:
// I think my most frequent mood will be productive due to weekday routines.
function mostFrequentMood(data) {
  const moodCounts = {};

  for (let day of data) {
    moodCounts[day.mood] = (moodCounts[day.mood] || 0) + 1;
  }

  let topMood = null;
  let maxCount = 0;

  for (let mood in moodCounts) {
    if (moodCounts[mood] > maxCount) {
      topMood = mood;
      maxCount = moodCounts[mood];
    }
  }

  return topMood;
}

// PREDICTION:
// I believe higher caffeine intake does NOT improve focus and may actually lower it.
function correlateCaffeineToFocus(data) {
  let highCaffeineFocus = 0;
  let lowCaffeineFocus = 0;
  let highDays = 0;
  let lowDays = 0;

  for (let day of data) {
    if (day.caffeineIntake >= 2) {
      highCaffeineFocus += day.focusLevel;
      highDays++;
    } else {
      lowCaffeineFocus += day.focusLevel;
      lowDays++;
    }
  }

  return highCaffeineFocus / highDays > lowCaffeineFocus / lowDays;
}




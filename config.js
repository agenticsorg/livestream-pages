/*
  Meeting links by day
*/
const THURSDAY_MEETING_URL =
  "https://us06web.zoom.us/meetings/81457783806/invitations?signature=v_gLoqcRTQb5nT4349KydO1NMCuiayMXq9r2I5L9BJU";

const FRIDAY_MEETING_URL =
  "https://us06web.zoom.us/j/83802209294?pwd=O17vytsA1UbZkX3hfvNXrNWIARDRtZ.1&jst=2";

/*
  Determine current day in America/Toronto
*/
function getTorontoDay() {
  const now = new Date();

  const torontoString = now.toLocaleString("en-US", {
    timeZone: "America/Toronto",
    weekday: "short"
  });

  const map = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6
  };

  return map[torontoString];
}

/*
  Optional meeting link (Zoom / Google Meet etc.)

  Thursday  -> THURSDAY_MEETING_URL
  Friday    -> FRIDAY_MEETING_URL
  Other days -> blank (fallback to calendar)
*/
const MEETING_URL = (() => {
  const day = getTorontoDay();

  if (day === 4) return THURSDAY_MEETING_URL;
  if (day === 5) return FRIDAY_MEETING_URL;

  return "";
})();

/* =====================================================
   Livestream configuration
   Edit this file only.
   ===================================================== */

/*
  Temporary arrangement:
  brand assets are currently hosted on the livestream site.

  Current:
    /brand

  Later, when moved to the main site, change to:
    https://agentics.org/brand
*/
const BRAND_BASE_URL = "/brand";

/*
  Default livestream video ID.
  This is used unless overridden by:
    ?v=VIDEO_ID
    ?video=VIDEO_ID
    #VIDEO_ID
*/
const VIDEO_ID_DEFAULT = "jfKfPfyJRdk";

/*
  Optional meeting link (Zoom / Google Meet etc.)

  Example:
  const MEETING_URL = "https://us06web.zoom.us/j/83802209294?pwd=...";

  If left blank, the page will show a "View Calendar" button instead.
*/
const MEETING_URL = "";

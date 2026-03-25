import { liftLibrary } from "./lifts.js"; /* import lift library */

function dailyLift(date = new Date()) { /* test different dates here */
  if (!liftLibrary.length) return null;
/* if array is empty, return null (just a safety check) */
  const seed = Number(date.toISOString().slice(0, 10).replaceAll("-", ""));
/* get date as YYYY-MM-DDTHH:mm:ss.sss, slice off timestamp, remove dashes */
  const index = seed % liftLibrary.length;
/* use seed to get index of lift using modulo operator */
  return liftLibrary[index];
}

document.addEventListener("DOMContentLoaded", injectDailyLift);
/* once page is loaded, inject the daily lift into the element text */
function injectDailyLift() {
  const lift = dailyLift();
  const element = document.getElementById("lift-text");
  element.textContent = lift.name;
}



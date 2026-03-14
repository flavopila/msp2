import { exerciseLibrary } from "./library.js"; /* import exercise library */

function dailyLift(date = new Date()) { /* test different dates here */
  if (!exerciseLibrary.length) return null;
/* if array is empty, return null (just a safety check) */
  const seed = Number(date.toISOString().slice(0, 10).replaceAll("-", ""));
/* get date as YYYY-MM-DDTHH:mm:ss.sss, slice off timestamp, remove dashes */
  const index = seed % exerciseLibrary.length;
/* use seed to get index of exercise using modulo operator */
  return exerciseLibrary[index];
}

document.addEventListener("DOMContentLoaded", injectDailyLift);
/* once page is loaded, inject the daily lift into the element text */
function injectDailyLift() {
  const lift = dailyLift();
  const element = document.getElementById("lift-text");
  element.textContent = lift.name;
}



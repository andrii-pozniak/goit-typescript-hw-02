"use strict";
/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var Day;
(function (Day) {
    Day["Monday"] = "workDay";
    Day["Tuesday"] = "workDay";
    Day["Wensday"] = "workDay";
    Day["Thursday"] = "workDay";
    Day["Friday"] = "workDay";
    Day["Saturday"] = "weekend";
    Day["Sunday"] = "weekend";
})(Day || (Day = {}));
;
function isWeekend(day) {
    const status = Day.Monday;
    return status;
}
//# sourceMappingURL=7.js.map
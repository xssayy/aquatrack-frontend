export const selectMonthly = state => state.water.monthly;
export const selectWaterLoading = state => state.water.loading;
export const selectWaterError = state => state.water.error;
export const selectGetDaily = state => state.water.daily;
export const selectChosenDate = state => state.water.chosenDate;
export const selectTodayWaterAmount = state =>
  state.water.today.reduce((acc, item) => acc + item.amount, 0);
// складний селектор , який витягує дейлі за сьогодні і
// повертає загальну за день

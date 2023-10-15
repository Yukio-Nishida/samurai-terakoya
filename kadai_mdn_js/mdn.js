//本日の日付を取得
const today = new Date();

//本日の年、月、日を取得
const today1 = today.getFullYear();

const today2 = today.getMonth()+1;

const today3 = today.getDate();

//本日の日付を取得
console.log(today1 + "年" + today2 + "月" + today3 + "日")
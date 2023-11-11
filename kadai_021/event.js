//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//HTML要素がクリックされた時にイベントを実行する
btn.addEventListener('click', () => {

const childList = document.getElementById('text');

//作成したtext要素は「ボタンをクリックしました」というテキストに変更する

childList.textContent = 'ボタンをクリックしました';

});
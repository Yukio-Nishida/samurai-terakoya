let num = Math.floor(Math.random() * 30);

//変数numが3と5の倍数の場合、数値と文字列「3と5の倍数です」を出力
if (num % 3 == 0 && num % 5 == 0) {

    console.log(num,'3と5の倍数です');

}

//変数numが3の倍数の場合、数値と文字列「3の倍数です」を出力
else if (num % 3 == 0) {

    console.log(num,'3の倍数です');

}

//変数numが5の倍数の場合、数値と文字列「5の倍数です」を出力
else if (num % 5 == 0) {

    console.log(num,'5の倍数です');

}

// そうでない場合、変数numを出力

else {

    console.log(num);

}

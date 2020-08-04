function displayNumber(number) {
    $('input[name=result]').val($('input[name=result]').val()+number);
}
function equalresult() {
    $('input[name=result]').val(eval( $('input[name=result]').val()));
}
function resetequal() {
    $('input[name=result]').val('');
}
function decimal() {
    $('input[name=result]').val($('input[name=result]').val()+'.');
}
function deleteEqual() {
    var number = $('input[name=result]').val();
    var numberslice = number.slice(0,number.length-1);
    $('input[name=result]').val(numberslice);
}
$(document).ready(function() {
    var history = [];
    $('.equalresult').click(function() {
        history.push($('input[name=result]').val()+"="+eval( $('input[name=result]').val()));
        $('input[name=result]').val(eval( $('input[name=result]').val()));
        $('.history-result').html("");
        if(history.length>10) {
            history.shift();
        }
        for(var i=0;i<history.length;i++) {
            $('.history-result').append('<div>'+history[i]+'</div>');
        }
    });
    $('.clear-history').click(function() {
        $('.history-result').html("");
        history = [];
    });
});
function displayNumber(number) {
    var x = $('input[name=result]').val();
    if(isNaN(number)) {
        var endx = x.slice(x.length-1,x.length);
        if(isNaN(endx)) {
            x = x.slice(0,x.length-1);
        }
    }
    $('input[name=result]').val(x+number);
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
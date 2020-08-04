$(document).ready(function() {
    var history = [];
    $('.equalresult').click(function() {
        var x = $('input[name=result]').val();
        if(isNaN(x.slice(x.length-1,x.length))) {
            history.push($('input[name=result]').val()+eval(x.slice(0,x.length-1))+"="+eval($('input[name=result]').val()+x.slice(0,x.length-1)));
            $('input[name=result]').val(eval( $('input[name=result]').val()+x.slice(0,x.length-1)));
        } else {
            history.push($('input[name=result]').val()+"="+eval( $('input[name=result]').val()));
            $('input[name=result]').val(eval( $('input[name=result]').val()));
        }
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
    $('.number').click(function() {
        var lasthistory = history[history.length-1];
        var equal = lasthistory.substr(lasthistory.indexOf("=")+1);
        var x =  $('input[name=result]').val();
        if(equal == x.slice(0,x.length-1)){
            if($(this).attr('data-number') == '.') {
                
                $('input[name=result]').val('0'+$(this).attr('data-number'));
            }else {
                $('input[name=result]').val($(this).attr('data-number'));
            }
        }
    });
});
function displayNumber(number) {
    var x = $('input[name=result]').val();
    if(x.length==1 && x == "0") {
        x = eval($('input[name=result]').val());
        $('input[name=result]').val(x+number);
    }
    if(isNaN(number)) {
        if(x.length == 0) {
            x='0';
        } else {
            var endx = x.slice(x.length-1,x.length);
            if(isNaN(endx)) {
                x = x.slice(0,x.length-1);
            }
        } 
        $('input[name=result]').val(x+number);
    } 
    $('input[name=result]').val(x+number);
   
}
function resetequal() {
    $('input[name=result]').val('');
}
function decimal() {
    var x = $('input[name=result]').val();
    if(x.indexOf('.') == -1) {
        $('input[name=result]').val($('input[name=result]').val()+'.');
    }
}
function deleteEqual() {
    var number = $('input[name=result]').val();
    var numberslice = number.slice(0,number.length-1);
    $('input[name=result]').val(numberslice);
}
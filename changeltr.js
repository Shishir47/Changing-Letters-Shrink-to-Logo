$(document).ready(function() {
    window.setTimeout(function() {
        $("#box").addClass("one");
    }, 9000);
});
$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr").addClass("fck");
    }, 1000);
});
$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr1").addClass("fck");
    }, 1300);
});
$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr2").addClass("fck");
    }, 1500);
});

$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr3").addClass("fck");
    }, 1100);
});

$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr4").addClass("fck");
    }, 900);
});

$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr5").addClass("fck");
    }, 1200);
});

$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr6").addClass("fck");
    }, 1400);
});

$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr7").addClass("fck");
    }, 1000);
});

$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr8").addClass("fck");
    }, 800);
});

$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr9").addClass("fck");
    }, 1000);
});

$(document).ready(function() {
    window.setTimeout(function() {
        $("#whatevr10").addClass("fck");
    }, 1300);
});

$(document).ready(function() {

    var $randomnbr = $('.nbr');
    var $timer = 50;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["H", "Y", "P", "N", "O", "T", "I", "C", "A", "X", "A"];

    $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
        $(this).attr('data-change', change);

    });

    function random() {
        return Math.round(Math.random() * 9);
    };

    function select() {
        return Math.round(Math.random() * $randomnbr.length + 1);
    };

    function value() {
        $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
        $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
        $data++;

        $randomnbr.each(function() {
            if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                index = $('.ltr').index(this);
                $(this).html(letters[index]);
                $(this).removeClass('nbr');
            }
        });
    };

    $it = setInterval(value, $timer);

});

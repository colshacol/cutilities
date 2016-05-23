// Project finished on 1/05/16.

//Here we go!
$(document).ready(function() {

    var clickerTicker = 0;

    $("#btnLeft").click(function() {

    });

    $("#btnRight").click(function() {

    });

    // Variables we may need.
    var mt, mr, mb, ml, marArr, pt, pr, pb, pl, padArr, cuteArray, cuteString, colr, $tag, thisElem;

    //A function to shorten functions and use arguments as code!
    function evaluate(args) {
        eval(args);
    };

    //This function is as lazy as I am.
    function doNil() {
        //do nothing.
    };

    //My own custom console.log() function.
    function clog(log) {
        console.log(log);
    };

    clog("Cutilities is working!");

    //This function assigns margins to elements.
    function marToVar(arr, i) {
        if (arr[i].includes("mt")) {
            mt = arr[i].substr(2, arr[i].length);
            if (parseInt(mt) >= 0) {
                thisElem.css("margin-top", parseInt(mt));
            } else if (parseInt(mt) < 0) {
                thisElem.css("margin-top", "auto");
            }
        } else if (arr[i].includes("mr")) {
            mr = arr[i].substr(2, arr[i].length);
            if (parseInt(mr) >= 0) {
                thisElem.css("margin-right", parseInt(mr));
            } else if (mr === "auto") {
                thisElem.css("margin-right", "auto");
            }
        } else if (arr[i].includes("mb")) {
            mb = arr[i].substr(2, arr[i].length);
            if (parseInt(mb) >= 0) {
                thisElem.css("margin-bottom", parseInt(mb));
            } else if (parseInt(mb) < 0) {
                thisElem.css("margin-bottom", "auto");
            }
        } else if (arr[i].includes("ml")) {
            ml = arr[i].substr(2, arr[i].length);
            if (parseInt(ml) >= 0) {
                thisElem.css("margin-left", parseInt(ml));
            } else if (ml === "auto") {
                thisElem.css("margin-left", "auto");
            }
        } else {

        }
    }

    //This function assigns padding to classes.
    function padToVar(arr, i) {
        if (arr[i].includes("pt")) {
            pt = arr[i].substr(2, arr[i].length);
            if (parseInt(pt) >= 0) {
                thisElem.css("padding-top", parseInt(pt));
            } else if (parseInt(pt) < 0) {
                thisElem.css("padding-top", "0");
            }
        } else if (arr[i].includes("pr")) {
            pr = arr[i].substr(2, arr[i].length);
            if (parseInt(pr) >= 0) {
                thisElem.css("padding-right", parseInt(pr));
            } else if (pr === "auto") {
                thisElem.css("padding-right", "0");
            }
        } else if (arr[i].includes("pb")) {
            pb = arr[i].substr(2, arr[i].length);
            if (parseInt(pb) >= 0) {
                thisElem.css("padding-bottom", parseInt(pb));
            } else if (parseInt(pb) < 0) {
                thisElem.css("padding-bottom", "0");
            }
        } else if (arr[i].includes("pl")) {
            pl = arr[i].substr(2, arr[i].length);
            if (parseInt(pl) >= 0) {
                thisElem.css("padding-left", parseInt(pl));
            } else if (pl === "auto") {
                thisElem.css("padding-left", "0");
            }
        } else {

        }
    }

    //PROTOTYPE CUTILITY FUNCTION
    function doCuteMarStuff() {
        if ($classes === undefined) {
            return false
        };
        // If the element's classes include cute indicators...
        if ($classes.match(/(mt|mr|mb|ml|MT|MR|MB|ML)([\d]{1,4}|au)/ig)) {
            // Create an cuteArray out of the matched slices.
            cuteArray = $classes.match(/(mt|mr|mb|ml)([\d]{1,4}|au)/g);
            $.each(cuteArray, function(i) {
                cuteArray[i] = cuteArray[i].replace("au", "auto");
                marToVar(cuteArray, i);
            })
        }
    };

    function doCutePadStuff() {
        // If no classes are present, kill this function.
        if ($classes === undefined) {
            return false
        };
        // If the element's classes include cute indicators...
        if ($classes.match(/(pt|pr|pb|pl|PT|PR|PB|PL)([\d]{1,4}|au)/ig)) {
            // Create an cuteArray out of the matched slices.
            cuteArray = $classes.match(/(pt|pr|pb|pl)([\d]{1,4}|au)/g);
            $.each(cuteArray, function(i) {
                cuteArray[i] = cuteArray[i].replace("au", "0");
                padToVar(cuteArray, i);
            })
        };
    };

    function doCuteColStuff() {
        // If no classes are present, kill this function.
        if ($classes === undefined) {
            return false
        };
        // If the element's classes include cute indicators...
        if ($classes.match(/(colr)[\w]{3,6}/ig)) {
            cuteArray = $classes.match(/(colr)[\w]{3,6}/ig);
            clog(cuteArray);
            thisElem.css("color", "#" + cuteArray[0].substr(4, cuteArray[0].length))
        };
    };

    //Clear the console. --For developer convenience.
    // console.clear();

    //Select all elements that are user-created.
    $("*:not(html, head, meta, link, style, script, selector, body)").each(function() {
        thisElem = $(this);
        //Store the tags, just for fun.
        $tag = $(this).prop("tagName");
        //Get the classes of $this element.
        $classes = $(this).attr("class");
        doCuteMarStuff();
        doCutePadStuff();
        doCuteColStuff();
    });

});
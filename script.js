window.onload = Init;

function Init(){
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "no-close"
    });
}

function jQDialog(type, text){
    if(type == "info"){
        $("#dialog").dialog({
            title: "Info",
            buttons: [
                {
                    text: "OK",
                    click: function(){
                        $(this).dialog("close");
                    }
                }
            ]
        });
        $("#dialog").text(text);
        $("#dialog").dialog("open");
    }

    if(type == "confirm"){
        $("#dialog").dialog({
            title: "Confirm",
            buttons: [
                {
                    text: "OK",
                    click: function(){
                        $(this).dialog("close");
                        jQDialog("confirm_end_true");
                    }

                },
                {
                    text: "Cancel",
                    click: function(){
                        $(this).dialog("close");
                        jQDialog("confirm_end_false");
                    }
                }
            ]
        });
        $("#dialog").text(text);
        $("#dialog").dialog("open");
    }

    if(type == "confirm_end_true" || type == "confirm_end_false"){
        $("#dialog").dialog({
            title: "Confirmation Result",
            buttons: [
                {
                    text: "OK",
                    click: function(){
                        $(this).dialog("close");
                    }
                }
            ]
        });
        (type == "confirm_end_true") ? $("#dialog").text("You clicked OK") : $("#dialog").text("You clicked Cancel");
        $("#dialog").dialog("open");
    }

    if(type == "input"){
        $("#dialog").dialog({
            title: "Input",
            buttons: [
                {
                    text: "OK",
                    click: function(){
                        $(this).dialog("close");
                        var txt = $("#inp").val();
                        jQDialog("input_end", txt);
                    }
                }
            ]
        });
        $("#dialog").text("Please enter something in input box below:");
        $("#dialog").append("<br><input id='inp'>");
        $("#dialog").dialog("open");
    }

    if(type == "input_end"){
        $("#dialog").dialog({
            title: "Input Callback",
            buttons:[
                {
                    text: "OK",
                    click: function(){
                        $(this).dialog("close");
                    }
                }
            ]
        });
        $("#dialog").text("You entered the following text:");
        $("#dialog").append("<br>"+text);
        $("#dialog").dialog("open");
    }
}

function startJQDiag(type){
    if(type == "info"){
        var text = "This is an info alert message.";
        jQDialog(type, text);
    }
    if(type == "confirm"){
        var text = "This is a confirm dialog box. Click OK to continue or Cancel to abort.";
        jQDialog(type, text);
    }
    if(type == "input"){
        var text = "This is an input dialog box. What text you enter here will be passed to the next function which will display a dialog with that text";
        jQDialog(type, text);
    }
}
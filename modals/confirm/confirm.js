"use strict";

//Page empty sample and template.
(function () {
    let confirm = new PDC.modal();
    let yesBtn, noBtn;
    confirm.onEnter = function(){
        yesBtn = $('#yes_btn');
        yesBtn.html(confirm.sourceData.yes || 'Yes');
        yesBtn.on('click', yesHandler);

        noBtn = $('#no_btn');
        noBtn.html(confirm.sourceData.no || 'No');
        noBtn.on('click', noHandler);

        $('#title_txt').html(confirm.sourceData.title || 'Confirm');
        $('#message_txt').html(confirm.sourceData.message || 'Default message text');
    }

    function yesHandler(){
        if(confirm.sourceData.callback){
            confirm.sourceData.callback(confirm.sourceData.yes);
        }

        confirm.close();
    }

    function noHandler(){
        if(confirm.sourceData.callback){
            confirm.sourceData.callback(confirm.sourceData.no);
        }

        confirm.close();
    }
}());
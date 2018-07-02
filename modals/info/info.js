"use strict";
//Page empty sample and template.
(function () {
    let info = new PDC.modal();
    let okBtn;
    info.onEnter = function(){
        okBtn = $('#ok_btn');
        info.sourceData.ok = info.sourceData.ok || 'OK';
        okBtn.on('click', okBtnHandler).html(info.sourceData.ok);

        $('#title_txt').html(info.sourceData.title || 'Info');
        $('#message_txt').html(info.sourceData.message || 'Message');
    }

    info.onExit = function(){
        okBtn.off('click', okBtnHandler);
    }

    function okBtnHandler(){
        if(info.sourceData.callback){
            info.sourceData.callback(info.sourceData.ok);
        }

        info.close();
    }
}());
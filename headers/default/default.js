"use strict";

(function () {
    let header = new PDC.header();
    let logoffBtn, configuratorBtn, dashboardBtn;
    header.onEnter = function(){
        logoffBtn = $('#logoff_btn');
        logoffBtn.on('click', logoffBtnHandler);

        configuratorBtn = $('#configurator_btn');
        configuratorBtn.on('click', configuratorBtnHandler);

        dashboardBtn = $('#dashboard_btn');
        dashboardBtn.on('click', dashboardBtnHandler);

        $('#username_info').html(UserName);
    }

    header.onExit = function(){
        logoffBtn.off('click', logoffBtnHandler);
    }

    function logoffBtnHandler(){
        PDC.logoff();
    }

    function configuratorBtnHandler(){
        $('.menu').removeClass('selected');
        $('#configurator_btn').addClass('selected');
        PDC.changePage('configurator');
    }

    function dashboardBtnHandler(){
        $('.menu').removeClass('selected');
        $('#dashboard_btn').addClass('selected');
        PDC.changePage('dashboard');
    }
}());
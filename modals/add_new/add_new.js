"use strict";

(function() {
    let add_new = new PDC.modal();
    let submitBtn;
    let cancelBtn;
    let closeBtn;
    let model;
    let index;
    let new_node = {};


    add_new.onEnter = function(){
        submitBtn = $('#submit');
        cancelBtn = $('#cancel_btn');
        closeBtn = $('#close_btn');

        add_new.sourceData.submit = add_new.sourceData.submit || 'Submit';
        submitBtn.on('click', submitBtnHandler).html(add_new.sourceData.submit);
        
        add_new.sourceData.cancel = add_new.sourceData.cancel || 'Cancel';
        cancelBtn.on('click', cancelBtnHandler).html(add_new.sourceData.cancel);
        closeBtn.on('click', cancelBtnHandler);

        $('#title_txt').html(add_new.sourceData.title || 'Add New');  
        
        model = add_new.sourceData.model;
        index = add_new.sourceData.index;

        main();
    }
    add_new.onExit = function(){
        submitBtn.off('click', submitBtnHandler);
        cancelBtn.off('click', cancelBtnHandler);
        closeBtn.off('click', cancelBtnHandler);

        $('#submit').off('click', onCreateNode);
    }
    function submitBtnHandler(){
        onCreateNode();
        if(add_new.sourceData.callback){
            add_new.sourceData.callback(add_new.sourceData.submit);
        }
        //add_new.close();
    }
    function cancelBtnHandler(){
        add_new.close();
    }

    function main() {
        //$('#content').empty();

        let html = '';
        
        renderCategory();
        renderClassName(model[index].Category);
        renderAttribute(model[index].ClassName);
        $('#Category').val(model[index].Category);
        $('#ClassName').val(model[index].ClassName);
        $('#Attribute').val(model[index].Attribute);

        $('#submit').removeClass('disabled')
        $('.popup').css("{'top','10px'},{'bottom','10px'}");

    }
    function renderCategory(){
        $('#Category').empty();
        let html = '';
        let _cat = [];
        model.forEach(function(e){
            if(_cat.indexOf(e.Category) == -1){
                html += '<option>'+e.Category+'</option>';
                _cat.push(e.Category);
            }
        })
        $('#Category').append(html);
    }
    function renderClassName(d){
        $('#ClassName').empty();
        $('#Attribute').empty();
        let html = '';
        let _class = [];
        model.forEach(function(e){
            if(e.Category == d){   
                if(_class.indexOf(e.ClassName) == -1){
                    html += '<option>'+e.ClassName+'</option>';
                    _class.push(e.ClassName);
                }
            }
        })
        $('#ClassName').append(html);
        
    }
    function renderAttribute(d){
        $('#Attribute').empty();
        let html = '';
        let _at = [];
        model.forEach(function(e){
            if(e.ClassName == d){   
            if(_at.indexOf(e.Attribute) == -1){
                html += '<option>'+e.Attribute+'</option>';
                _at.push(e.Attribute);
            }
        }
        })
        $('#Attribute').append(html);
    }
    $('#Category').change(function(e){
        console.log(e.target.value);
        renderClassName(e.target.value);

    })
    $('#ClassName').change(function(e){
        console.log(e.target.value);
        renderAttribute(e.target.value);

    })
    $('#Attribute').change(function(e){
        console.log(e.target.value);
        //renderClassName(e.target.value);

    })
    function onCreateNode() {
        $('#submit').addClass('disabled');
        console.log(new_node);
        return false;
        PDC.ajax('Configurator', 'POST', JSON.stringify(new_node), function (data) {
            console.log(data);
        });
    }
}());
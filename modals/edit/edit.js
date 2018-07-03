"use strict";

(function() {
    let edit = new PDC.modal();
    let submitBtn;
    let cancelBtn;
    let closeBtn;
    let model;
    let index;
    let new_node = {};


    edit.onEnter = function(){
        submitBtn = $('#submit');
        cancelBtn = $('#cancel_btn');
        closeBtn = $('#close_btn');

        edit.sourceData.submit = edit.sourceData.submit || 'Submit';
        submitBtn.on('click', submitBtnHandler).html(edit.sourceData.submit);
        
        edit.sourceData.cancel = edit.sourceData.cancel || 'Cancel';
        cancelBtn.on('click', cancelBtnHandler).html(edit.sourceData.cancel);
        closeBtn.on('click', cancelBtnHandler);

        $('#title_txt').html(edit.sourceData.title || 'Add New');  
        
        model = edit.sourceData.model;
        index = edit.sourceData.index;

        main();
    }
    edit.onExit = function(){
        submitBtn.off('click', submitBtnHandler);
        cancelBtn.off('click', cancelBtnHandler);
        closeBtn.off('click', cancelBtnHandler);

        $('#submit').off('click', onCreateNode);
    }
    function submitBtnHandler(){
        onCreateNode();
        if(edit.sourceData.callback){
            edit.sourceData.callback(edit.sourceData.submit);
        }
        //edit.close();
    }
    function cancelBtnHandler(){
        edit.close();
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
        $('#TableName').val(model[index].TableName);
        $('#ColumnName').val(model[index].ColumnName);
        new_node.AttributeId = model[index].AttributeId;
        new_node.Priorities = model[index].Priorities;
        new_node.index = index;


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
        new_node.Category = $('#Category').val();
        new_node.ClassName = $('#ClassName').val();
        new_node.Attribute = $('#Attribute').val();
        new_node.TableName = $('#TableName').val();
        new_node.ColumnName = $('#ColumnName').val();
        console.log(new_node);
        edit.sourceData.callback(new_node);
        edit.close();
        return false;
        PDC.ajax('Configurator', 'POST', JSON.stringify(new_node), function (data) {
            console.log(data);
        });
    }
}());
"use strict";

//Dashboard
(function () {
    let datadictionary = new PDC.page();
    let modal = [];


    var selected_ele;
    var selected_att;
    var selectedCategory = 0;
    var selectedClassName = 0;
    datadictionary.onEnter = function () {
        $.getJSON("DataDictionary.json", function (data) {
            modal = data;
            main();
        })
        $(document).on('class_view', renderClassHandler);
        $(document).on('attribute_view', renderAttributeHandler);
        $('#add_new').on('click', addnew);
        


    }

    datadictionary.onExit = function () {
        $(document).off('class_view', renderAttributeHandler);
        $(document).off('attribute_view', renderAttributeHandler);
        $('#add_new').off('click', addnew);
        $('.item-list').off('click', item);
    }
    function main() {
        renderdatadictionary();


    }
    function addnew(e) {
		
        let data = {
            'data': modal,
            'submit': 'Save',
            'cancel': 'Cancel',
            'model':modal,
            'index':e.target.getAttribute('index'),
            'callback': onAddNew


        };
		console.log(data)
        PDC.openModal('add_new', data, function () {
            console.log('come')
            main();
        });

    }
    function onAddNew(data) {
        modal.push(data);
        console.log(modal)
        main();

    }
    function renderdatadictionary() {
        $('#category').empty();
        let card_html = '';
        let category = [];
        modal.forEach(function (data, ind) {
            //card_html +='<div class="add-icon" onclick="event.stopPropagation();PDC.openModal(\'add_new\',this)"></div>'
            if (category.indexOf(data.Category) == -1) {
                category.push(data.Category)

                card_html += '<div class="item-list "onclick="$.event.trigger({type:\'class_view\', message:this})">' + data.Category;
                card_html += '</div>';

            }
        })
        $('#category').append(card_html);
        
		hideBtn();
		
    }

    function renderClassHandler(e) {
        selected_ele = e.message;
        //e.message.classList.add("selected");
        selectedCategory = e.message.innerHTML;
        $('#classname').empty();
        $('#attribute').empty();
        let class_html = '';
        let classname = [];
        modal.forEach(function (data, ind) {
            if (classname.indexOf(data.ClassName) == -1) {
                classname.push(data.ClassName)
                if (selectedCategory == data.Category) {
                    class_html += '<div class="item-list" index="' + ind + '" onclick="$.event.trigger({type:\'attribute_view\', message:this})">' + data.ClassName + '</div>';
                    class_html += '</div>'
                }
            }
        })
        $('#classname').append(class_html);
        if ($(selected_ele).hasClass('item-list')) {
            $('.item-list').removeClass('selected');
            $(selected_ele).addClass('selected');
        }
		
		hideBtn();
    }
    function renderAttributeHandler(e) {
        selected_att = e.message;
        //e.message.classList.add("selected");
        selectedClassName = e.message.innerHTML;
        $('#attribute').empty();
        let attribute = [];
        let attr_html = '';
        console.log(modal);
        modal.forEach(function (data, ind) {
            if (attribute.indexOf(data.Attribute) == -1) {
                attribute.push(data.Attribute)
                if (selectedClassName == data.ClassName) {
                    attr_html += '<div class="item-list" index="' + ind + '">' + data.Attribute + '</div>';
                    attr_html += '</div>'
                }
            }

        })
        $('#attribute').append(attr_html);
        if ($(selected_att).hasClass('item-list')) {
            $('.item-list').removeClass('selected');
            $(selected_att).addClass('selected');
        }
		
		hideBtn();
		
		
		$('#attribute .item-list').on('click', item);
    }
    function hideBtn(){
        $('#edit').attr('index', '').hide();
        $('#add_new').attr('index', '').hide();
    }

    function item(e) {
        let index = e.target.getAttribute('index');
		$('#edit').attr('index', index).show();
		$('#add_new').attr('index', index).show();
		
    }


}());
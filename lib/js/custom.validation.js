var required = [];

$(document).keydown(function(e){
    if(e.keyCode == 13){
        if($('#submit').hasClass('disabled')){
            e.preventDefault();
            return;
        }
    }
});

$(document).keyup(function(e){
    if(e.keyCode == 13){
        if($('#submit').hasClass('disabled')){
            e.preventDefault();
            return;
        }
    }
});

$.fn.required = function () {
    if (required.indexOf(this) == -1) {
        if($(this).val()){
            $(this).attr('valid', true);
        } else {
            $(this).attr('valid', false);
        }
        
        required.push($(this)[0]);
        $(this).prev().addClass('required');
    }

    $(this).keyup(function(event){
        if(this.value){
            $(this).attr('valid', true);
        } else {
            $(this).attr('valid', false);
        }
        check();
    })

    $(this).change(function () {
        
        

        if($(this).prop('tagName') == 'INPUT' || $(this).prop('tagName') == 'TEXTAREA'){
            return;
        }
        var _self = $(this);
        var valid = false;

        var info;

        if (_self.attr('info') == 'true') {
            info = $(_self).next();
        } else {
            info = document.createElement('div');
            _self.attr('info', true);
            $(_self).after(info);
        }

        $(info).addClass('hide');
        $(info).removeClass('box-correct');
        $(info).removeClass('box-error');

        if (this.value) {
            valid = true;
        }
        


        if (valid) {
            $(_self).attr('valid', true);
            $(info).html('Valid');
            $(info).removeClass('hide');
            $(info).addClass('box-correct');
        } else {
            $(_self).attr('valid', false);
            $(info).html('Invalid');
            $(info).removeClass('hide');
            $(info).addClass('box-error');
        }
        check();
    });
}

check = function () {
    let enable = true;

    required.forEach(function (ele, ind) {
        
        if (enable) {
            
            if (ele.getAttribute('valid') == 'false') {
                enable = false;
            }
        }
    });

    
    console.log(enable);

    if (enable) {

        $('.create-btn').removeClass('disabled');
        $('.save-btn').removeClass('disabled');
    } else {
        $('.create-btn').addClass('disabled');
        $('.save-btn').addClass('disabled');
    }
}

$.fn.restrict = function (config) {

    var _self = this;
    var info;

    if (_self.attr('info') == 'true') {
        info = $(_self).next();
    } else {
        info = document.createElement('div');
        _self.attr('info', true);
        $(_self).after(info);
    }

    

    $(_self).keydown(function (e) {
        
        if (e.key.match(/\s/) && this.value == '') {
            _self.val('');
            e.preventDefault();
            return;
        }

        if(e.key == 'Spacebar' && this.value == ''){
            _self.val('');
            e.preventDefault();
            return;
        }
        validate(e);
    });

    $(_self).keyup(function (e, evt) {
        if(e.key == undefined){
            e.key = evt.key;
        }
        if (e.key.match(/^\s/) && this.value == ' ') {
            _self.val('');
            e.preventDefault();
            return;
        }

        if(e.key == 'Spacebar' && this.value == ' '){
            _self.val('');
            e.preventDefault();
            return; 
        }
        validate(e);
    });

    $(_self).focusout(function(e){
        validate(e);
    });

    

    var validate = function (e) {
        var valid = true;
        $(info).addClass('hide');
        $(info).removeClass('box-correct');
        $(info).removeClass('box-error');


        //Restriction to all, automatically added for all
        var message = 'Invalid';
        if (config) {
            config.forEach(function (item) {
                if (_self.val().match(item.reg)) {
                    if (valid) {
                        valid = false;
                        message = item.message;
                    }
                }
            });
        }// else {
            //return;
        //}

        if (valid) {
            $(_self).attr('valid', true);
            $(info).html('Valid');
            $(info).removeClass('hide');
            $(info).addClass('box-correct');
        } else {
            $(_self).attr('valid', false);
            $(info).html(message);
            $(info).removeClass('hide');
            $(info).addClass('box-error');
        }

        if ($(_self).val() == '') {
            $(_self).attr('valid', false);
            $(info).html('');
            $(info).addClass('hide');
            $(info).removeClass('box-correct');
            $(info).removeClass('box-error');
        }
        
        check();
    }


}




$.fn.match = function (config) {

    var _self = this;
    var info;

    if (_self.attr('info') == 'true') {
        info = $(_self).next();
    } else {
        info = document.createElement('div');
        _self.attr('info', true);
        $(_self).after(info);
    }

    $(_self).keydown(function (e) {

        if (e.key.match(/\s/) && this.value == '') {
            _self.val('');
            e.preventDefault();
            return;
        }

        if(e.key == 'Spacebar' && this.value == ''){
            _self.val('');
            e.preventDefault();
            return;
        }
        validate(e);
    });

    var message = '';

    $(_self).keyup(function (e, evt) {
        if(e.key == undefined){
            e.key = evt.key;
        }
        if (e.key.match(/^\s/) && this.value == ' ') {
            _self.val('');
            e.preventDefault();
            return;
        }

        if(e.key == 'Spacebar' && this.value == ' '){
            _self.val('');
            e.preventDefault();
            return;
        }
        validate(e);
    });

    $(_self).focusout(function(e){
        validate(e);
    })

    var validate = function (e) {
        var valid = false;

        $(info).addClass('hide');
        $(info).removeClass('box-correct');
        $(info).removeClass('box-error');



       
        if (config) {
            config.forEach(function (item) {
                if (_self.val().match(item.reg)) {
                    if (!valid) {
                        valid = true;
                        message = item.message;
                    }
                } else {
                    message = item.message;
                }
            });
        } else {
            return;
        }

        if (valid) {
            $(_self).attr('valid', true);
            $(info).html('Valid');
            $(info).removeClass('hide');
            $(info).addClass('box-correct');
        } else {
            $(_self).attr('valid', false);
            $(info).html(message);
            $(info).removeClass('hide');
            $(info).addClass('box-error');
        }

        if ($(_self).val() == '') {
            $(_self).attr('valid', false);
            $(info).html(message);
            $(info).addClass('hide');
            $(info).removeClass('box-correct');
            $(info).removeClass('box-error');
        }

        check();
    }
}


$.fn.unique = function (url) {
    var _self = this;

    var info;

    if (_self.attr('info') == 'true') {
        info = $(_self).next();
    } else {
        info = document.createElement('div');
        _self.attr('info', true);
        $(_self).after(info);
    }

    var oldValue;

    if (_self.val()) {
        oldValue = _self.val();
    }

    $(_self).attr('unique', false);
    $(_self).keyup(function (e) {
        validate();
    });

    $(_self).focusout(function (e) {
        validate();
    });

    var validate = function(){
        //_self.val( _self.val().trim())
        if (_self.val() == '') {
            $(info).addClass('hide');
            return;
        }
        val = _self.val();
        $(info).addClass('hide');
        $(info).removeClass('box-correct');
        $(info).removeClass('box-error');

        if(oldValue == _self.val()){
            check();
            return;
        }
        
        $.ajax({
            url: url,
            contentType: "application/json",
            type: 'POST',
            cache:false,
            data: JSON.stringify({ 'data': val }),
            success: function (data) {
                if (data.statuscode == '200') {
                    $(info).removeClass('hide');
                    $(info).addClass('box-correct');
                    $(info).html(data.status);
                    _self.attr('valid', true);
                } else {
                    $(info).removeClass('hide');
                    $(info).addClass('box-error');
                    $(info).html(data.status);
                    _self.attr('valid', false);
                }

                check();
            }
        });
    }
}


$.fn.shake = function () {
    var _self = this;
    _self.removeClass('shake');
    _self.addClass('shake');
    setTimeout(function () {
        _self.removeClass('shake');
    }, 2000);
}
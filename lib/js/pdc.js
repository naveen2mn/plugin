//This library is dependent on jQuery. jQuery have to be loaded before this library loads 

var PDC = {
    currentPage:'',
    config: function (url) {
        $.ajax({
            dataType: "json",
            url: url,
            success: function (data) {
                PDC.config = data;
                PDC.changePage(PDC.config['home-page'], {});
            }
        });
    },
    
    page: function () {
        let page = {
            _enter: null,
            _exit: null,
            _sourceData: null,
            set onEnter(fn) {
                this._enter = fn;
                $(document).on('on_page_load', this.enterHandler);
            },
            get onEnter() {
                return this._enter;
            },
            set onExit(fn) {
                this._exit = fn;
                $(document).on('on_page_unload', this.exitHandler);
            },
            get onExit() {
                return this._exit;
            },
            set sourceData(data) {
                this._sourceData = data;
            },
            get sourceData() {
                return this._sourceData;
            },
            exitHandler: function () {
                $(document).off('on_page_unload', this.exitHandler);
                if (page._exit) {
                    page._exit();
                }
            },
            enterHandler: function (e) {
                $(document).off('on_page_load', this.enterHandler);
                page.sourceData = e.message;
                if (page._enter) {
                    page._enter();
                }
            }
        };
        return page;
    },
    modal: function () {
        let modal = {
            _enter: null,
            _exit: null,
            _sourceData: null,
            set onEnter(fn) {
                this._enter = fn;
                $(document).on('on_modal_load', this.enterHandler);
            },
            get onEnter() {
                return this._enter;
            },
            set onExit(fn) {
                this._exit = fn;
                $(document).on('on_modal_unload', this.exitHandler);
            },
            get onExit() {
                return this._exit;
            },
            set sourceData(data) {
                this._sourceData = data;
            },
            get sourceData() {
                return this._sourceData;
            },
            close: function () {
                PDC.closeModal();
            },
            exitHandler: function () {
                $(document).off('on_modal_unload', this.exitHandler);
                $('#close_btn').off('click', modal.close);
                if (modal._exit) {
                    modal._exit();
                }
            },
            enterHandler: function (e) {
                $(document).off('on_modal_load', this.enterHandler);
                $('#close_btn').on('click', modal.close);
                modal.sourceData = e.message;
                if (modal._enter) {
                    modal._enter();
                }
            }
        };
        return modal;
    },
    header: function () {
        let header = {
            _enter: null,
            _exit: null,
            set onEnter(fn) {
                this._enter = fn;
                $(document).on('on_header_load', this.enterHandler);
            },
            get onEnter() {
                return this._enter;
            },
            set onExit(fn) {
                this._exit = fn;
                $(document).on('on_header_unload', this.exitHandler);
            },
            get onExit() {
                return this._exit;
            },
            exitHandler: function () {
                $(document).off('on_header_unload', this.exitHandler);
                if (header._exit) {
                    header._exit();
                }
            },
            enterHandler: function (e) {
                $(document).off('on_header_load', this.enterHandler);
                if (header._enter) {
                    header._enter();
                }
            }
        }
        return header;
    },
    footer: function () {
        let footer = {
            _enter: null,
            _exit: null,
            set onEnter(fn) {
                this._enter = fn;
                $(document).on('on_footer_load', this.enterHandler);
            },
            get onEnter() {
                return this._enter;
            },
            set onExit(fn) {
                this._exit = fn;
                $(document).on('on_footer_unload', this.exitHandler);
            },
            get onExit() {
                return this._exit;
            },
            exitHandler: function () {
                $(document).off('on_footer_unload', this.exitHandler);
                if (header._exit) {
                    header._exit();
                }
            },
            enterHandler: function (e) {
                $(document).off('on_footer_load', this.enterHandler);
                if (header._enter) {
                    header._enter();
                }
            }
        }
        return footer;
    },
    changePage: function (url, data) {
        $('#' + PDC.config.container.page).addClass('hide');
        $.event.trigger({
            type: 'on_page_unload'
        });

        $('#' + PDC.config.container.page).load(PDC.config.path.pages + url + '/' + url + '.html', function () {
            $.getScript(PDC.config.path.pages + url + '/' + url + '.js', function (d, s, x) {
                if (s == 'success') {
                    $.event.trigger({
                        type: 'on_page_load',
                        message: data
                    });
                    $('#' + PDC.config.container.page).removeClass('hide');
                    PDC.currentPage = url;
                }
            });
        });
    },
    ajax: function (url , method , data  , cb , auth = true , blocker = true) {
        let headers = new Object();

        if (blocker) {
            PDC.blocker(true);
        }

        if (auth) {
            //if (sessionStorage.token != undefined) {
            headers = { 'authorization': 'Basic ' + btoa(SessionId + ':' + NetworkId) }
            //}
        } else {
            headers = { "content-type": "application/x-www-form-urlencoded" };
        }


        $.ajax({
            url: PDC.config['api-root'] + url,
            method: method,
            data: data,
            headers: headers,
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                PDC.blocker(false);

                if(!res.status){
                    res.status = res.statuscode;
                }


                if (res.status == 200) {
                    cb(res.data);
                }

                if (res.status == 500) {
                    let data = {};
                    data.title = 'Error';
                    data.message = res.message;
                    data.ok = 'OK';
                    data.icon = 'error';
                    //PDC.openModal('info', data);
                    console.log(data);
                }

                if (res.access_token) {
                    sessionStorage.token = JSON.stringify(res);
                    cb({ status: 200, message: 'Success', data: {} });
                }
            }
            // , error: function (err) {
            //     PDC.blocker(false);
            //     console.log(err);
            //     let data = {};
            //     data.title = 'Error';
            //     data.message = '<b>' + err.responseText + '</b> Please check the API documentation.';
            //     data.ok = 'OK';
            //     data.icon = 'error';
            //     PDC.openModal('info', data);
            // }
        });
    },
    loadHeader: function (url) {
        $('#' + PDC.config.container.header).addClass('hide');
        $('#' + PDC.config.container.header).load(PDC.config.path.headers + url + '/' + url + '.html', function (d, s, x) {
            if (s == 'success') {
                $.getScript(PDC.config.path.headers + url + '/' + url + '.js').done(function () {
                    $.event.trigger({
                        type: 'on_header_load'
                    });
                    $('#' + PDC.config.container.header).removeClass('hide');
                }).fail(function () {
                    let data = {};
                    data.title = 'Not found';
                    data.message = '<b>' + url + ' header</b> Missing associated script file. Check documentaion for the correct implementation.';
                    data.ok = 'OK';
                    data.icon = 'error';
                    PDC.openModal('info', data);
                });
            } else {
                let data = {};
                data.title = 'Not found';
                data.message = '<b>' + url + ' header</b> Unable to find html';
                data.ok = 'OK';
                data.icon = 'error';
                PDC.openModal('info', data);
            }

        });
    },
    unloadHeader: function () {
        $.event.trigger({
            type: 'on_header_unload'
        });
        $('#' + PDC.config.container.header).empty();
    },
    loadFooter: function (url) {
        $('#' + PDC.config.container.footer).addClass('hide');
        $('#' + PDC.config.container.footer).load(PDC.config.path.footers + url + '/' + url + '.html', function (d, s, x) {
            if (s == 'success') {
                $.getScript(PDC.config.path.footers + url + '/' + url + '.js').done(function () {
                    $.event.trigger({
                        type: 'on_footer_load'
                    });
                    $('#' + PDC.config.container.footer).removeClass('hide');
                }).fail(function () {
                    let data = {};
                    data.title = 'Not found';
                    data.message = '<b>' + url + ' footer</b> Missing associated script file. Check documentaion for the correct implementation.';
                    data.ok = 'OK';
                    data.icon = 'error';
                    PDC.openModal('info', data);
                });
            } else {
                let data = {};
                data.title = 'Not found';
                data.message = '<b>' + url + ' footer</b> Unable to find html';
                data.ok = 'OK';
                data.icon = 'error';
                PDC.openModal('info', data);
            }

        });
    },
    unloadFooter: function () {
        $.event.trigger({
            type: 'on_footer_unload'
        });
        $('#' + PDC.config.container.footer).empty();
    },
    openModal: function (url, data) {
        $('#' + PDC.config.container.modal).load(PDC.config.path.modals + url + '/' + url + '.html', function () {
            $.getScript(PDC.config.path.modals + url + '/' + url + '.js', function (d, s, x) {
                if (s == 'success') {
                    $.event.trigger({
                        type: 'on_modal_load',
                        message: data
                    });
                    $('#lightbox').removeClass('hide');
                    $('#' + PDC.config.container.modal).removeClass('hide');
                }
            });
        }).removeClass('hide');
    },
    closeModal: function (url) {
        $.event.trigger({
            type: 'on_modal_unload'
        });

        $('#' + PDC.config.container.modal).empty().addClass('hide');
        $('#lightbox').addClass('hide');
    },
    blocker: function (state) {
        if (state) {
            $('#lightbox').removeClass('hide');
            $('#blocker').removeClass('hide');
        } else {
            $('#lightbox').addClass('hide');
            $('#blocker').addClass('hide');
        }
    },
    logoff: function () {
        let data = {};
        data.title = 'Logout';
        data.message = 'Are you sure you want to logout?';
        data.yes = 'Logout';
        data.no = 'Cancel'
        data.icon = 'warning';
        data.callback = function(selected){
            if(selected == data.yes){
                sessionStorage.clear();
                PDC.changePage('login');
            }
        }
        PDC.openModal('confirm', data);
    }
}
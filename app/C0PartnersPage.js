/*
 * JS for C0PartnersPage generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '8d1c3d87-037c-46f1-9d3b-d76370ba131a';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "D0ComplaintPage",
    "location": "D0ComplaintPage.html"
}, {
    "name": "F0AboutUsPage",
    "location": "F0AboutUsPage.html"
}, {
    "name": "B0ShoutoutPage",
    "location": "B0ShoutoutPage.html"
}, {
    "name": "A0IndexPage",
    "location": "A0IndexPage.html"
}, {
    "name": "E0ContactUsPage",
    "location": "E0ContactUsPage.html"
}, {
    "name": "C1BecomePartnerPage",
    "location": "C1BecomePartnerPage.html"
}, {
    "name": "C0PartnersPage",
    "location": "C0PartnersPage.html"
}, {
    "name": "A0HomePage",
    "location": "A0HomePage.html"
}];

function C0PartnersPage_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_6': 'C0PartnersPage_mobilebutton_6',
        'mobilelist_7': 'C0PartnersPage_mobilelist_7',
        'mobilelistitem_8': 'C0PartnersPage_mobilelistitem_8',
        'mobilelistitembutton_9': 'C0PartnersPage_mobilelistitembutton_9',
        'mobilelistitem_12': 'C0PartnersPage_mobilelistitem_12',
        'mobilelistitembutton_13': 'C0PartnersPage_mobilelistitembutton_13',
        'mobilelistitem_14': 'C0PartnersPage_mobilelistitem_14',
        'mobilelistitembutton_15': 'C0PartnersPage_mobilelistitembutton_15',
        'mobilelistitem_16': 'C0PartnersPage_mobilelistitem_16',
        'mobilelistitembutton_17': 'C0PartnersPage_mobilelistitembutton_17',
        'mobilelistitem_18': 'C0PartnersPage_mobilelistitem_18',
        'mobilelistitembutton_19': 'C0PartnersPage_mobilelistitembutton_19',
        'mobilelabel_3': 'C0PartnersPage_mobilelabel_3',
        'mobilelabel_4': 'C0PartnersPage_mobilelabel_4',
        'mobilelabel_5': 'C0PartnersPage_mobilelabel_5'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'C0PartnersPage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var C0PartnersPage_onLoad = function() {
            C0PartnersPage_elementsExtraJS();

            C0PartnersPage_deviceEvents();
            C0PartnersPage_windowEvents();
            C0PartnersPage_elementsEvents();
        };

    // screen window events


    function C0PartnersPage_windowEvents() {

        $('#C0PartnersPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#C0PartnersPage').on({
            pageshow: function(event) {
                var popupElement = Apperyio("PartnersPopupName");
                if (popupElement.popup("option", "positionTo") === "origin") {
                    popupElement.popup("open", {
                        transition: "pop",
                        positionTo: "#" + $(this).attr("id")
                    });
                } else {
                    popupElement.popup("open", {
                        transition: "pop"
                    });
                };
            },
        });

    };

    // device events


    function C0PartnersPage_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function C0PartnersPage_elementsExtraJS() {
        // screen (C0PartnersPage) extra code

        /* mobilelist_7 */

        listView = $("#C0PartnersPage_mobilelist_7");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#C0PartnersPage_mobilelist_7 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_8 */

        /* mobilelistitem_12 */

        /* mobilelistitem_14 */

        /* mobilelistitem_16 */

        /* mobilelistitem_18 */

        /* PartnersPopupName */
        $("#C0PartnersPage_PartnersPopupName").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function C0PartnersPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#C0PartnersPage_mobileheader [name="mobilebutton_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('C1BecomePartnerPage', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        }, '#C0PartnersPage_mobileheader [name="mobilebutton_6"]');

        $(document).off("click", '#C0PartnersPage_mobilecontainer [name="mobilelistitem_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.top.location = 'https://www.instagram.com/_mumbai_meri_jaan_/';

                }
            },
        }, '#C0PartnersPage_mobilecontainer [name="mobilelistitem_8"]');

        $(document).off("click", '#C0PartnersPage_mobilecontainer [name="mobilelistitem_12"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.top.location = 'https://www.instagram.com/mumbaiqueens/';

                }
            },
        }, '#C0PartnersPage_mobilecontainer [name="mobilelistitem_12"]');

        $(document).off("click", '#C0PartnersPage_mobilecontainer [name="mobilelistitem_14"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.top.location = 'https://www.instagram.com/mumbaishoutout99/';

                }
            },
        }, '#C0PartnersPage_mobilecontainer [name="mobilelistitem_14"]');

        $(document).off("click", '#C0PartnersPage_mobilecontainer [name="mobilelistitem_16"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.top.location = 'https://www.instagram.com/indian_shoutout_2016/';

                }
            },
        }, '#C0PartnersPage_mobilecontainer [name="mobilelistitem_16"]');

        $(document).off("click", '#C0PartnersPage_mobilecontainer [name="mobilelistitem_18"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.top.location = 'https://www.instagram.com/mumbaishoutouts111/';

                }
            },
        }, '#C0PartnersPage_mobilecontainer [name="mobilelistitem_18"]');

    };

    $(document).off("pagebeforeshow", "#C0PartnersPage").on("pagebeforeshow", "#C0PartnersPage", function(event, ui) {
        Apperyio.CurrentScreen = "C0PartnersPage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    C0PartnersPage_onLoad();
};

$(document).off("pagecreate", "#C0PartnersPage").on("pagecreate", "#C0PartnersPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    C0PartnersPage_js();
});
/*
 * JS for A0HomePage generated by Appery.io
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
    "name": "F1DeveloperPage",
    "location": "F1DeveloperPage.html"
}, {
    "name": "D0ComplaintPage",
    "location": "D0ComplaintPage.html"
}, {
    "name": "F2DownloadPage",
    "location": "F2DownloadPage.html"
}, {
    "name": "F0AboutUsPage",
    "location": "F0AboutUsPage.html"
}, {
    "name": "B0ShoutoutPage",
    "location": "B0ShoutoutPage.html"
}, {
    "name": "B1CheckShoutoutPage",
    "location": "B1CheckShoutoutPage.html"
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

function A0HomePage_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegroupedbuttons_10': 'A0HomePage_mobilegroupedbuttons_10',
        'mobilebutton_11': 'A0HomePage_mobilebutton_11',
        'mobilebutton_12': 'A0HomePage_mobilebutton_12',
        'mobilebutton_14': 'A0HomePage_mobilebutton_14',
        'mobilebutton_16': 'A0HomePage_mobilebutton_16',
        'mobilebutton_17': 'A0HomePage_mobilebutton_17',
        'mobilelabel_25': 'A0HomePage_mobilelabel_25',
        'mobilelabel_19': 'A0HomePage_mobilelabel_19',
        'mobilelabel_20': 'A0HomePage_mobilelabel_20',
        'mobilelabel_21': 'A0HomePage_mobilelabel_21',
        'mobilelabel_22': 'A0HomePage_mobilelabel_22',
        'mobilelabel_24': 'A0HomePage_mobilelabel_24'
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

    Apperyio.CurrentScreen = 'A0HomePage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var A0HomePage_onLoad = function() {
            A0HomePage_elementsExtraJS();

            A0HomePage_deviceEvents();
            A0HomePage_windowEvents();
            A0HomePage_elementsEvents();
        };

    // screen window events


    function A0HomePage_windowEvents() {

        $('#A0HomePage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#A0HomePage').on({
            pageshow: function(event) {
                var popupElement = Apperyio("WelcomePopupName");
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


    function A0HomePage_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function A0HomePage_elementsExtraJS() {
        // screen (A0HomePage) extra code

        /* WelcomePopupName */
        $("#A0HomePage_WelcomePopupName").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function A0HomePage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#A0HomePage_mobilecontainer [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('B0ShoutoutPage', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        }, '#A0HomePage_mobilecontainer [name="mobilebutton_11"]');
        $(document).off("click", '#A0HomePage_mobilecontainer [name="mobilebutton_12"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('C0PartnersPage', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        }, '#A0HomePage_mobilecontainer [name="mobilebutton_12"]');
        $(document).off("click", '#A0HomePage_mobilecontainer [name="mobilebutton_14"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('D0ComplaintPage', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        }, '#A0HomePage_mobilecontainer [name="mobilebutton_14"]');
        $(document).off("click", '#A0HomePage_mobilecontainer [name="mobilebutton_16"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('E0ContactUsPage', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        }, '#A0HomePage_mobilecontainer [name="mobilebutton_16"]');
        $(document).off("click", '#A0HomePage_mobilecontainer [name="mobilebutton_17"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('F0AboutUsPage', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        }, '#A0HomePage_mobilecontainer [name="mobilebutton_17"]');

    };

    $(document).off("pagebeforeshow", "#A0HomePage").on("pagebeforeshow", "#A0HomePage", function(event, ui) {
        Apperyio.CurrentScreen = "A0HomePage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    A0HomePage_onLoad();
};

$(document).off("pagecreate", "#A0HomePage").on("pagecreate", "#A0HomePage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    A0HomePage_js();
});
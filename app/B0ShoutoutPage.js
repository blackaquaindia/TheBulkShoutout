/*
 * JS for B0ShoutoutPage generated by Appery.io
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

function B0ShoutoutPage_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_5': 'B0ShoutoutPage_mobilebutton_5',
        'html_4': 'B0ShoutoutPage_html_4',
        'PopupLableName': 'B0ShoutoutPage_PopupLableName'
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

    Apperyio.CurrentScreen = 'B0ShoutoutPage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var B0ShoutoutPage_onLoad = function() {
            B0ShoutoutPage_elementsExtraJS();

            B0ShoutoutPage_deviceEvents();
            B0ShoutoutPage_windowEvents();
            B0ShoutoutPage_elementsEvents();
        };

    // screen window events


    function B0ShoutoutPage_windowEvents() {

        $('#B0ShoutoutPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#B0ShoutoutPage').on({
            pageshow: function(event) {
                var popupElement = Apperyio("ShoutoutPopupName");
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


    function B0ShoutoutPage_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function B0ShoutoutPage_elementsExtraJS() {
        // screen (B0ShoutoutPage) extra code

        /* ShoutoutPopupName */
        $("#B0ShoutoutPage_ShoutoutPopupName").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function B0ShoutoutPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#B0ShoutoutPage_mobileheader [name="mobilebutton_5"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('B1CheckShoutoutPage', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        }, '#B0ShoutoutPage_mobileheader [name="mobilebutton_5"]');

    };

    $(document).off("pagebeforeshow", "#B0ShoutoutPage").on("pagebeforeshow", "#B0ShoutoutPage", function(event, ui) {
        Apperyio.CurrentScreen = "B0ShoutoutPage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    B0ShoutoutPage_onLoad();
};

$(document).off("pagecreate", "#B0ShoutoutPage").on("pagecreate", "#B0ShoutoutPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    B0ShoutoutPage_js();
});
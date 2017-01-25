/*
 * JS for C1BecomePartnerPage generated by Appery.io
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

function C1BecomePartnerPage_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {

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

    Apperyio.CurrentScreen = 'C1BecomePartnerPage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var C1BecomePartnerPage_onLoad = function() {
            C1BecomePartnerPage_elementsExtraJS();

            C1BecomePartnerPage_deviceEvents();
            C1BecomePartnerPage_windowEvents();
            C1BecomePartnerPage_elementsEvents();
        };

    // screen window events


    function C1BecomePartnerPage_windowEvents() {

        $('#C1BecomePartnerPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function C1BecomePartnerPage_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function C1BecomePartnerPage_elementsExtraJS() {
        // screen (C1BecomePartnerPage) extra code

    };

    // screen elements handler


    function C1BecomePartnerPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

    };

    $(document).off("pagebeforeshow", "#C1BecomePartnerPage").on("pagebeforeshow", "#C1BecomePartnerPage", function(event, ui) {
        Apperyio.CurrentScreen = "C1BecomePartnerPage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    C1BecomePartnerPage_onLoad();
};

$(document).off("pagecreate", "#C1BecomePartnerPage").on("pagecreate", "#C1BecomePartnerPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    C1BecomePartnerPage_js();
});
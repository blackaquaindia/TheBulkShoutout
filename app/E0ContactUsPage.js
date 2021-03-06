/*
 * JS for E0ContactUsPage generated by Appery.io
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

function E0ContactUsPage_js() {

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

    Apperyio.CurrentScreen = 'E0ContactUsPage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var E0ContactUsPage_onLoad = function() {
            E0ContactUsPage_elementsExtraJS();

            E0ContactUsPage_deviceEvents();
            E0ContactUsPage_windowEvents();
            E0ContactUsPage_elementsEvents();
        };

    // screen window events


    function E0ContactUsPage_windowEvents() {

        $('#E0ContactUsPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function E0ContactUsPage_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function E0ContactUsPage_elementsExtraJS() {
        // screen (E0ContactUsPage) extra code

    };

    // screen elements handler


    function E0ContactUsPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

    };

    $(document).off("pagebeforeshow", "#E0ContactUsPage").on("pagebeforeshow", "#E0ContactUsPage", function(event, ui) {
        Apperyio.CurrentScreen = "E0ContactUsPage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    E0ContactUsPage_onLoad();
};

$(document).off("pagecreate", "#E0ContactUsPage").on("pagecreate", "#E0ContactUsPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    E0ContactUsPage_js();
});
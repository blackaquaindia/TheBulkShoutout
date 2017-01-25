/*
 * JS for A0IndexPage generated by Appery.io
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

function A0IndexPage_js() {

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

    Apperyio.CurrentScreen = 'A0IndexPage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var A0IndexPage_onLoad = function() {
            A0IndexPage_elementsExtraJS();

            A0IndexPage_deviceEvents();
            A0IndexPage_windowEvents();
            A0IndexPage_elementsEvents();
        };

    // screen window events


    function A0IndexPage_windowEvents() {

        $('#A0IndexPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#A0IndexPage').on({
            pageshow: function(event) {
                Apperyio.navigateTo('A0HomePage', {
                    transition: 'pop',
                    reverse: false
                });
            },
        });

    };

    // device events


    function A0IndexPage_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function A0IndexPage_elementsExtraJS() {
        // screen (A0IndexPage) extra code

    };

    // screen elements handler


    function A0IndexPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

    };

    $(document).off("pagebeforeshow", "#A0IndexPage").on("pagebeforeshow", "#A0IndexPage", function(event, ui) {
        Apperyio.CurrentScreen = "A0IndexPage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    A0IndexPage_onLoad();
};

$(document).off("pagecreate", "#A0IndexPage").on("pagecreate", "#A0IndexPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    A0IndexPage_js();
});
var app = {};

app.loadChildren = function () {
    headerPanel.loadChildren();
}

app.createView = function () {
    headerPanel.createView();
    document.getElementById('appContainer').innerHTML = headerPanel.view;
}

app.prepopulate = function () { headerPanel.prepopulate(); }

app.listenEvents = function () { headerPanel.listenEvents(); }

app.setDefaults = function () { headerPanel.setDefaults(); }

app.init = function () {
    app.loadChildren();
    app.createView();
    app.prepopulate();
    app.listenEvents();
    app.setDefaults();
}

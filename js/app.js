(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('contacto', 'contact.html'),
            new Route('variables', 'variables.html')
        ]);
    }
    init();
}());
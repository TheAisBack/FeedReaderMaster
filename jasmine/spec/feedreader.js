/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        /* This test makes sure that the URL is defined and 
         * is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); // Making sure it is defined
            expect(allFeeds.length).not.toBe(0); // Making sure it is not empty
        });
        /* Loops though the allFeeds object and to make sure the name
         * is defined and empty.
         */
        it('is URL defined and URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();  // Making sure feed is defined
                expect(feed.url.length).not.toBe(0); // Making sure feed isn't empty
            });
        });
        it('is name defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined(); // Making sure name is defined
                expect(feed.name.length).not.toBe(0); // Making sure name isn't empty
            });
        }); 
    });
    // new test suite called 'The menu'
    describe('The menu', function() {
        /* Making sure the menu hides by default
         */
        it('Does the menu hide by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true); // making sure the menu hides by default
        });
        /* Making sure the menu changes visibility when the menu icon
         * is clicked.
         */
        it('Does the menu change visibility once it is clicked', function() {
            var clicked = $('.menu-icon-link');
            clicked.click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy(); //Making sure the menu is not hidden
            clicked.click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy(); // Making sure the menu is hidden
        });
    });
    // new test suite called 'Initial Entries'
    describe('Initial Entries', function() { 
        beforeEach(function(done) { //loadFeed() is asynchronous will require the use of Jasmin's beforeEach
            loadFeed(0, done);
        });
        it('Has at least a single .entry element within the .feed container', function(done) {
            expect($('.feed .entry').length).not.toBe(0); // finding a least single .entry element within the .feed container.
            done();
        });
    });
    // new test suite called 'New Feed Selection'
    describe('New Feed Selection', function() {
        /* Making sure the new feed is loaded when the loadFeed 
         * function content actually changes.
         */
        var feed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                feed = $('.feed').html();
                loadFeed(1, done);
            });
        });
        it('when a new feed is loaded by the loadFeed function that the content actually changes.', function() {
            expect($('.feed').html()).not.toEqual(feed);
        });
    });
}());

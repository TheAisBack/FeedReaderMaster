FeedReaderMaster

1. The code written is in the folder - jasmine/spec/feedreader.js
2. For the first code, we must find if feed is defined and not empty. using expect toBeDefined and not.toBe(0).
3. Created a The menu function to find out if the menu is hidden and to see if the visibility changes once it is clicked.
4. Created a Initial Entry function, using the asynchronous and beforeEach function to find that the loadFeed function is called, completes its work and there is at least a single .entry element.
5. Write a New Feed Selection that checks if the new feed is loaded by the loadFeed function actually changes. 
6. Onces code is completed open up the index.html file and the code should give you a test result at the bottom (runned by Jasmine.)

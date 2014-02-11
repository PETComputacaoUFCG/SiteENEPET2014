var feed = new Instafeed({
            	get: 'tagged',
           		tagName: 'ENEPET2013',
           		limit:7,
            	clientId: 'e94d88ecc3314049aabdbbf168a950cb'
            });
            feed.run();
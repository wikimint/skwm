        $(document).ready(function () {
            const feeds = [
                'https://feeds.feedburner.com/wikimintdeveloper',
                'https://feeds.feedburner.com/selvakumaran-krishnan'
                 ];

            let hasInteracted = false;

            // Function to fetch posts from each feed
            function fetchPosts() {
                let allPosts = [];
                let promises = [];

                // Iterate over each feed and get data
                feeds.forEach(feed => {
                    let promise = $.get(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`, function (data) {
                        let posts = data.items.slice(0, 3); // Get the first 6 posts from each feed
                        allPosts = allPosts.concat(posts);
                    });

                    promises.push(promise);
                });

                // After all feeds are fetched
                $.when.apply($, promises).then(function () {
                    // Sort posts by publication date
                    allPosts.sort(function (a, b) {
                        return new Date(b.pubDate) - new Date(a.pubDate);
                    });

                    // Display only the latest 6 posts
                    displayPosts(allPosts.slice(0, 6));
                });
            }

            // Function to display posts in Bootstrap cards
            function displayPosts(posts) {
                let postsContainer = $('#posts-container');
                postsContainer.empty(); // Clear any existing posts

                posts.forEach(post => {
                    let postHTML = `
                        <div class="col-md-4 mb-4">
                            <div class="card">
                            <img src="${post.thumbnail ? post.thumbnail.replace(/\/s\d+-c/, '/s200') : 'default-thumbnail.jpg'}" class="card-img-top" alt="${post.title}">
                                <div class="card-body">
                                    <h3 class="card-title fs-5">${post.title}</h3>
                                    <p class="card-text">${post.description.substring(0, 100)}...</p>
                                    <a href="${post.link}" class="btn btn-outline-secondary" aria-label="${post.title}" target="_blank">Read more</a>
                                </div>
                            </div>
                        </div>
                    `;
                    postsContainer.append(postHTML);
                });
            }

            // Function to trigger fetching after any user interaction
            function handleUserInteraction() {
                if (!hasInteracted) {
                    fetchPosts();
                    hasInteracted = true; // To ensure it only triggers once
                    $(window).off('mousemove click scroll'); // Remove event listeners after the first interaction
                }
            }

            // Add event listeners for interaction
            $(window).on('mousemove click scroll', handleUserInteraction);
        });

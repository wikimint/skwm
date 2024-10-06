(function(d, t, e, m){
    
    // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){
                
        RW.init({
            huid: "497819",
            uid: "2f902687f5c74fbfa0ed65eab4e6d681",
            source: "website",
            options: {
                "advanced": {
                    "layout": {
                        "lineHeight": "20px"
                    }
                },
                "style": "oxygen",
                "isDummy": false
            } 
        });
        RW.render();
    };
        // Append Rating-Widget JavaScript library.
    var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
        l = d.location, ck = "Y" + t.getFullYear() + 
        "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
        f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
        a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
    if (d.getElementById(id)) return;              
    rw = d.createElement(e);
    rw.id = id; rw.async = true; rw.type = "text/javascript";
    rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
    s.parentNode.insertBefore(rw, s);
    }(document, new Date(), "script", "rating-widget.com/"));

$(document).ready(function() {
            // A flag to ensure the script loads only once
            let scriptLoaded = false;

            // Function to load the script (for example, append a new <script> tag or run some code)
            function loadScript() {
                if (!scriptLoaded) {
                    scriptLoaded = true;
                   
                    $(".page_rank").html(`<a href="https://checkpagerank.net/" title="page rank checker" target="_blank"><img src="https://checkpagerank.net/pricon.php?key=de7dc0eed5d24751605f775f0dfd3783" width="135px" height="auto" alt="pagerank checker" class="me-2"/></a>`);
                }
            }

            // Trigger on any user interaction (click, scroll, or keypress)
            $(document).one('click scroll keypress', function() {
                loadScript();
            });
        });


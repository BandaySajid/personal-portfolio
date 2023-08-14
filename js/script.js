$(function () {
    $(".code-icons i").tooltip();

    toggle_things = function (first, second) {
        $("." + first).slideUp("fast", function () {
            $("." + second).slideDown("fast");
        });
    };
});

$(document).ready(async function () {
    const repos = [
        {
            url: "https://github.com/BandaySajid/aadhaar-js",
            name: "aadhaar-js : nodejs library",
            description: "Aadhaar-JS is a NodeJS/JS library that allows developers to easily retrieve a user's Aadhaar data for authentication, KYC (Know Your Customer), and other purposes. The library provides a simple and secure way to access Aadhaar data. It is currently under development."
        },
        {
            url: "https://github.com/BandaySajid/chatgpt-node",
            description: "chatgpt-node is a Node.js library that provides access to the ChatGPT web-API for free. While ChatGPT provides an API to access its model, it is a paid service, making it inaccessible for everyone. The chatgpt-node library aims to bridge this gap by allowing developers to authenticate/login via web-api and start conversations with the ChatGPT model, enabling them to integrate chatbot functionality into their applications, websites, and more.",
            name: "chatgpt-node : nodejs library",
        },
        {
            url: "https://github.com/BandaySajid/collaborator",
            name: "collaborator : realtime code editor",
            description: "A code-collaborator where a user could invite other user to edit code in reatime."
        },
        {
            url: "https://github.com/BandaySajid/data-processing-ratelimiting",
            name: "data-processing-ratelimiting",
            description: "processing large amounts of data by implementing node js streams and rate-limiting strategy."
        },
        {
            url: "https://github.com/BandaySajid/load-balancing-using-nginx",
            name: "load-balancing-using-nginx : round robin implementation",
            description: "This project demonstrates load balancing using NGINX and implementation of the `Round Robin algorithm` for load balancing by utilizing a node js server."
        },
        {
            url: "https://github.com/BandaySajid/node-file-watcher",
            name: "node-file-watcher",
            description: "A simple tool that watches a file and executes commands written in that file by a user."
        },
        {
            url: "https://github.com/BandaySajid/personal-portfolio",
            name: "personal-portfolio",
            description: ''
        },
        {
            url: "https://github.com/BandaySajid/scalable-chat-application",
            name: "scalable-chat-app : realtime chat application",
            description: "This project is a demonstration of backend solution focused on efficient real-time chat communication and load balancing. Uses cutting-edge technologies such as WebSockets, Redis Pub/Sub, authentication, security measures, and caching."
        },
        {
            url: "https://github.com/BandaySajid/tcp-socket-programming",
            name: "tcp-socket-programming",
            description: "Tcp client-server socket programming from scratch using node js ."
        },
        {
            url: "https://github.com/BandaySajid/Twitter-Bot-",
            name: "Image generator : using tweet prompt",
            description: "A twitter bot that generates images based on the reply prompt in tweet using openAi api."
        }
    ];

    const popup = $("#project-popup");
    const popupProjectName = $("#popup-project-name");
    const popupDescription = $("#popup-description");
    const popupLink = $("#popup-link");

    repos.forEach((repo, i) => {
        const container = $("#project-container");
        container.append(`<div class="project col-lg-6 col-md-6 col-sm-6">
              <a style="text-decoration:none; "class="bri_orange project-name">${i + 1}. ${repo.name.toLowerCase()}</a>
          </div>`);

        // Add click event to show popup
        const projectElement = container.find(".project").last();
        projectElement.click(() => openPopup(repo));
    });

    function openPopup(repo) {
        popupProjectName.text(repo.name);
        popupDescription.text(repo.description);
        popupLink.attr("href", repo.url);
        popup.show(); // Display the popup
    }

    popup.click(() => popup.hide()); // Hide the popup when clicked outside
    popup.children().click((e) => e.stopPropagation()); // Prevent popup from closing when clicked inside

});

(function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
        i[r] ||
        function () {
            (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(
    window,
    document,
    "script",
    "//www.google-analytics.com/analytics.js",
    "ga"
);

ga("create", "UA-28939284-3", "auto");
ga("send", "pageview");


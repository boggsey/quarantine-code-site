const config = { 
  siteTitle: "Quarantine Code", // Site title.
  siteTitleShort: "Quarantine Code", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Quarantine Code", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  fbImg: "/logos/product-image-social-media-fb.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://www.quarantinecode.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Teaching people code while in quarantine.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Quarantine Code RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Eric Boggs", // Username to display in the author segment.
  userEmail: "eric@mlemedia.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Cincinnati, Ohio", // User location to display in the author segment.
  userAvatar: "https://res.cloudinary.com/ericboggs/image/upload/v1563397159/author_gtznmy.jpg", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/boggsey/",
      iconClassName: "fa fa-github"
    },
    {
      label: "Linked In",
      url: "https://www.linkedin.com/in/etboggs/",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Email",
      url: "mailto:eric@mlemedia.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#000", // Used for setting manifest and progress theme colors.
  backgroundColor: "#fff" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

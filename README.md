## Website Performance Optimization portfolio project

In this project, I optimized Cameron's online portfolio for speed. In particular, I optimized the critical rendering path and made his pages render as quickly as possible by applying the techniques I picked up in Udacity's [Critical Rendering Path course](https://www.udacity.com/course/ud884). This is the Fourth project of the Front-End Web Development Nanodegree.

### How to Run

Visit [nhadinat.github.io/frontend-nanodegree-mobile-portfolio](http://nhadinat.github.io/frontend-nanodegree-mobile-portfolio "Nate Hadinata's Mobile Portfolio Optimization") on your web browser.

### Part 1: Optimize PageSpeed Insights score for index.html

#### Features

97 Mobile Score on GooglePageSpeed Insights

* Gulp Automation
* gh-pages deployment
* gulp watch
* gulp clean
* Minify HTML, JS, CSS
* CSS Selector optimization (Child Selectors)
* Inline CSS & JS
* PNG optimization
* src/ dist/ Development Organization
* Asynchronous Scripting (Google Analytics, Google Web Font)

#### Theories Implemented

* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api")
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Part 2: Optimize Frames per Second in pizza.html

#### Features

* RAIL (Response, Animation, Idle, Load) performance optimization to eliminate jank
* Forced Synchronous Layout bottleneck fix
* Will-Change Transform to reduce paint costs
* Unlimited Pizza

Optimized views/pizza.html by modifying views/js/main.js until frames per second rate is 60 fps or higher.

Used Timeline Profile JS and FPS Counter/HUD Display in Chrome developer tools: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios Cameron found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
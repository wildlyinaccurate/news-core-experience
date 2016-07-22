# Lightweight responsive news

An attempt at building a super-lightweight progressive news webapp for the BBC News hackday July 2016.

## [News front page](https://wildlyinaccurate.com/lightweight-progressive-news/index.html)

#### Highlights

 * Higher quality lead image (natural resolution versus 200px scaled up)
 * Ability to lazy-load all images
 * 7KB document size versus 36KB on live (**80% smaller**)
 * 58KB total size versus 1.3MB on live (**95% smaller**)
 * 100ms first paint versus 250ms on live (**60% faster**)
 * 460ms load time versus 900ms on live (**50% faster**)
 * Much lower CPU profile than live

**Lightweight CPU profile**

![](lightweight-cpu-profile.png)

**Live CPU profile**

![](live-cpu-profile.png)

## [Video page](https://wildlyinaccurate.com/lightweight-progressive-news/video.html)

#### Highlights

 * Significant less data usage
 * Ability to load in full video
 * Enables a cheap alternative to dubbing video

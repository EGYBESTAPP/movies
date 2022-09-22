---
title: Scraping tutorial
parent: For extension developers
order: 3
---

# Requests based scraping tutorial

You want to start scraping? Well this guide will teach you, and not some baby selenium scraping. This guide only uses raw requests and has examples in both python and kotlin. Only basic programming knowlege in one of those languages is required to follow along in the guide. 

If you find any aspect of this guide confusing please open an issue about it and I will try to improve things.

If you do not know programming at all then this guide will __not__ help you, learn programming! first Real scraping cannot be done by copy pasting with a vauge understanding.

0. [Starting scraping from zero](../starting.md)
1. [Properly scraping JSON apis often found on sites](../using_apis.md)
2. [Evading developer tools detection when scraping](../devtools_detectors.md)
3. [Why your requests fail and how to fix them](../disguising_your_scraper.md)
4. [Finding links and scraping videos](../finding_video_links.md)

Once you've read and understood the concepts behind scraping take a look at [a provider for CloudStream](https://github.com/recloudstream/cloudstream-extensions/blob/master/VidstreamBundle/src/main/kotlin/com/lagradost/VidEmbedProvider.kt#L4). I added tons of comments to make every aspect of writing CloudStream providers clear. Even if you're not planning on contributing to Cloudstream looking at the code may help. 
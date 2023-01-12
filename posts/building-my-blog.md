---
title: 'Building my blog'
date: '18/12/2021'
slug: 'building-my-blog'
description: 'The process of how I build my first blog, and my development story.'
image: '/building-my-blog.jpg'
---

# Introduction
Welcome to the first post of this site. (And hopefully not the last). This post will be the story of how I built this blog, from development to deployment, and even content management.

This project has been made because I recently made the acquisition of my domain name [theopoette.me](https://theopoette.me). I played around with the DNS, and I figured it was very easy to create subdomains, so I made a project for which it would be useful to use a subdomain.

This project wasn't as easy as I thought it would be, I mean a blog? Yeah, what an easy side project... At first sight, compared to a complete social media app, it looks fairly easy.

-----

# Tech stack
To create this blog, I first went with Next as I wanted to have the best SEO and referencing possible, so I needed to build a static site to accomplish this goal. I ended up being very frustrated, and it wasn't as easy as using create-react-app for example. The framework kept breaking on me, and the amount of time I had to re-install the packages was unbearable.

-----

# Tech stack v2
When I finally had enough with Next, and so I made the decision to switch to Gatsby, which is still a static site generator, with which I had far less problems. One point on which I had the most problems with Gatsby was with the image handling, and the graphql in-built API, other than that, the experience was as smooth as creating a normal react application.

-----

# Content Management
As for content management, I've opted for Strapi which is one of the most documented processes for Gatsby. The deployment of the Strapi instance was a little bit more painful, but I eventually opted for a dockerized version of my Strapi instance, running on a VPS.

-----

# Deployment
The deployment was a way more streamlined process, as I'm getting more and more familiar with server administration and deployment. At the time of writing these lines, I've not yet put in motion the Github actions to build and then deploy the production files, but I may be getting to it if I'm bored one day. As of now, I'm building the production files on my own machine, and just transferring the files to my server, which is only 2 commands so that's not that complicated.

-----

# Conclusion
The idea of this website came because I just discovered something new, and I thought it would be easy + I would develop my skills. It turned out that it was a painful task, and that I would have been better of challenging myself on some other project, with technologies I know would be more compatible. I wouldn't recommend building a blog if the only thing you want is to develop your skills, but it's always a nice thing to showcase for potential recruiters, and it improves your presence online. On this note, thanks for reading me, you can find the code for my blog [here](https://github.com/sisypheus/blogv2), have a good day/night.

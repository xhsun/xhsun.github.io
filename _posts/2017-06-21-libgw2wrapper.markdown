---
layout: post
raw-title: "Guild Wars 2 API Wrapper Library"
title: "Hannah Sun - Guild Wars 2 API Wrapper Library"
date: "2017-06-21 13:23:39 -0600"
permalink: /projects/2016-2017/gw2wrapper/
sourceLink: "https://github.com/xhsun/gw2wrapper"
sections:
  - tag: motive
    name: Motivation
    content:
      - To be honest, making this library was never on the table for me. Yet, here I am with a library, which covers over a hundred Guild Wars 2 API endpoints. The turns of events that caused me to create this library is truly unfortunate. See, back when I was planning to create an android companion application, I knew there is a list of Guild Wars 2 API Wrapper on the Guild Wars 2 official wiki and I found one that is made for Java. I knew the difference between android and Java might cause me unable to use that library. So, I create a simple unit test to see if that library will work in android environment, I thought it was working. Thus, I go on implementing my android application without worrying much about the API wrapper library.
      - However, when I was at the point where I need that library to access the API, I learned that I was wrong about the library. It wasn’t working, it uses javax, it probably will never work in android environment. At that time, I thought I have other libraries to use. But no, all other libraries are way too outdated for me to use. So, I was faced with three choices, somehow put javax API in my app, abandon the app, or make my own wrapper library. Putting javax in my app will bog it down too much, therefore that is not a choice. Abandoning it is the easiest way to go, however there is no way I’m abandon a project, so that is out of picture as well. Thus, the only choice I’m left with is to create my own library that will work for android. And that is how I create a Guild Wars 2 API wrapper library. Since I don’t want other people to go through what I went through, I released my library on both JCenter and Maven Central.
  - tag: desc
    name: Overview
    subContent:
      - content:
        - This library grants user access to Guild Wars 2 HTTP API without the need to implement any underlying structures. The library uses Retrofit 2 as a HTTP client to connect with the API and JSON reply from the API is parsed using Gson converter.
      - name: How To Use
        specialContent: gw2wrapper/htu.html
      - name: Data Classe
        specialContent: gw2wrapper/dc.html
---

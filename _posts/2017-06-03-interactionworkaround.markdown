---
layout: post
raw-title: "Smart Phone Interaction Workarounds"
title: "Hannah Sun - Smart Phone Interaction Workarounds"
date: "2015-10-16 15:47:34 -0600"
last_modified_at: "2017-06-03 15:47:34 -0600"
permalink: /projects/2015-2016/interactionWorkaround/
sourceLink: "https://bitbucket.org/xhsun/interactionworkarounds"

m-img-size: &m-img-size
  - 5
s-img-size: &s-img-size
  - 3
vid-size: &vid-size
  - 6
sections:
  - tag: touch
    name: Touch Base
    subContent:
      - name: Sketch &amp; Refine
        content:
          - At first I want to focus on something simple and easy to use for touch base unlock. But I soon discovered that all the simple one are been &#34;patented&#34; (unusable) and the supposing simple ones I came up are either not feasible or too boring to take a look.
          - Thus I decided to shift my focus to locks. By that I mean to create a touch base unlock that provide customizable level of security and (hopefully) interest to play with. So I came up with the design labelled 12 (can be seen on the initial sketch image).
          - The idea for design 12 come from combination lock. User moves the arrow, which only able to move in circle, to point at the number they want. Once the arrow is pointing at the desired number, user need to make a turn (ie, backtrack) to next number in order to &#34;record&#34; the desired number. So the lock only get the key at every turn point, like how combination lock works.
          - But there is an inherited problem with the design number 12. Since the design is based on a combination lock, it have the same level of confusion as a real combination lock (if not more). So I decided I might need to come up with some different ideas. Hence design version 4, the color palette design (can be seen on refined sketch image).
          - So the color palette design is loosely based on the combination lock idea (they are all roundish). Unlocking in this design is simple, you connect dots (I mean colors). There is a few different color on the color palette, user can choose how many color they wish to have (2 to 5 colors), which colors shall be connected, and in what order. For example, one can have red connect with blue then green connect with red as their combination. The one good thing with this design is that a user can have a really simple combination if they so choose (ie, red to green and the end).
        images:
          - url: projects/unlock/touch_sketch.png
            clickable: true
            size: *m-img-size
            name: Initial Sketch
          - url: projects/unlock/touch_refine.png
            clickable: true
            size: *m-img-size
            name: Refinement
      - name: Prototype
        content:
          - To unlock phone, user need to combine color in the correct order. In this example, the correct combination is pink to green then pink to orange then orange to blue. When a wrong combination is given, the phone will vibrate and clear the canvas.
        isContentContained: true
        images:
          - url: projects/unlock/touch_init.png
            clickable: false
            size: *s-img-size
          - url: projects/unlock/touch_path.png
            clickable: false
            size: *s-img-size
          - url: projects/unlock/touch_error.png
            clickable: false
            size: *s-img-size
          - url: projects/unlock/touch_pass.png
            clickable: false
            size: *s-img-size
      - isContentContained: true
        videos:
        - url: https://www.youtube.com/embed/YAi-unuCA_w
          size: *vid-size
        - url: https://www.youtube.com/embed/FLhupvbntQ4
          size: *vid-size
  - tag: sensor
    name: Sensor Base
    subContent:
      - name: Sketch &amp; Refine
        content:
          - I try to use the accelerometer and make something that would feel cool. Yet I tried and failed. So I focus on other sensors, like the microphone. I always want to make something that would listen to my command, like tell the phone to unlock itself then it unlock. But with that element only does not feel very fun and that is when I remember some quote about rose, it goes something like &#34;What&#39;s in a name? That which we call a rose by any other name would smell as sweet.&#34; So I thought that could be something… And that is how I get idea for design number 9 (can be seen on initial sketch image)
          - For design number 9 or code name that, the basic idea is the user give a new name to the image they provided and that will be their key. For example, I provide an image of an apple and call it router, which would be my key to unlock my phone. I deiced that the user need to say the key to their phone to unlock because what else would be cooler?
          - I decided I like the idea of code name that, so I did not change the fundamental part. Instead, I made a few change to the presentation and layout to make it more user friendly. For instance, if user choose to have multiple items as their key, they will have them all in one screen. Instead of the old design, where they need to go those multiple screens for each item. Now they can arrange the item location to where they see fit. Instead of the old design where I do it for them (so much work). And the item will &#39;light&#39; up in order that is set by user to remind them the order they need to say their key word(s). Ohh did I mention now they can only have up to three items as key because I don&#34;t want them start chatting with their phone.
        images:
        - url: projects/unlock/sensor_sketch.png
          clickable: true
          size: *m-img-size
          name: Initial Sketch
        - url: projects/unlock/sensor_refine.png
          clickable: true
          size: *m-img-size
          name: Refinement
      - name: Prototype
        content: To unlock phone, user need to say the hint word that is corresponding to the icon that is currently highlighted. In this example, the correct combination is apple:rock, cat:paper, fox:scissors (in order). When a wrong combination is given, the phone will show a red X.
        isContentContained: true
        images:
          - url: projects/unlock/sensor_init.png
            clickable: false
            size: *s-img-size
          - url: projects/unlock/sensor_listen.png
            clickable: false
            size: *s-img-size
          - url: projects/unlock/sensor_error.png
            clickable: false
            size: *s-img-size
          - url: projects/unlock/sensor_pass.png
            clickable: false
            size: *s-img-size
      - isContentContained: true
        videos:
        - url: https://www.youtube.com/embed/fkKAtX59swI
          size: *vid-size
        - url: https://www.youtube.com/embed/iqRfDGoreLY
          size: *vid-size
---

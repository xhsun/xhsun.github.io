---
layout: post
raw-title: "The Proxemic Display"
title: "Hannah Sun - The Proxemic Display"
date: "2015-12-16 16:09:37 -0600"
last_modified_at: "2017-06-03 16:09:37 -0600"
permalink: /projects/2015-2016/proxemicDisplay/
sourceLink: "https://bitbucket.org/xhsun/theproxemicdisplay"
s-img-size: &s-img-size
  - 3
vid-size: &vid-size
  - 6
sections:
  - tag: sketch
    name: Sketch &amp; Refine
    content:
      - One day as I play game, I thought to myself, &#34;hmm… having a split personality sarcastic personal robot assistant sounds fun.&#34; So that is where the sketch comes from and the idea is quite simple to understand, the robot will move around freely when user is at public space or not present. When there is an event coming up, the robot will speak to notify user about it. If the user comes close to the social space, the robot will act as a mouse pointer, so user know where they are pointing at and they can move around freely to select the things they want to view.
      - The other sketch that inspired my final prototype&#39;s visual aspect is the &#34;caller&#34;. Basically this proxemics display is a huge phone for calling others only. When user is at pubic space, they can view their contact list. Then when they are at the social space, the user can select the person they want to call. To call that person, user can simply step into the personal space. Once the call is started, the Kinect will act as a full body camera, so that the user can enjoy video call without the need to hold a phone.
      - Due to some event happened in real life, I wasn&#39;t able to make some satisfy refinement before the initial prototype demo. So I just took the two sketch I mentioned above, fuse them together and I get something I am somewhat happy about. A phone notification notify-er, since my persona Alice don&#39;t like the constant sound notification from the phone and she need something to notify her about the event she would otherwise forget. A more visual notification would be what she need.
      - Operating the display is not too hard. At public space, the screen will display all unread notification and ongoing event like a timer. If the user step into social space, more detail will be shown and user can select between item by using simple hand gesture like close hand. Once a notification is selected, user can step into the personal space to see full detail of that notification. If there is no device connect to the display, a no device found message will be present and the display will not respond to proximity input.  As you can tell, this prototype is thematically very close to robot assistant idea. Minus the robot of course, since Alice probably will not enjoy a sarcastic robot talking to her all the time.
      - After gathered some feedback from first prototype demo, I come up with this idea of two mode. One mode is no device connected to the display, the device will be more generalized where user will not get any notification from their phone, but they will be able to listen to music, change their home security mode and use the display as a clock, etc (basically a smart home). The proximity input will get processed in this mode, thus eliminate the problem in the first prototype where the display will not be a proxemics display for almost half of the time, since the user probably will not connect their phone to the display 24/7. When the phone is connected to the display, user will be able to receive notification from their phone like the first prototype.
      - Other than the difference I mentioned above, this refinement works the same way as first prototype. At public space, they will get a more generalized overview of their notifications. When the user step into social space, they will get more detailed information. Each notification is separated into different categories, thus eliminated the need for the user to cycle thought a lot of notification just to get to the one they want to see. User can close their hand to cycle between categories and wave hand to change between notifications in the same categories. When the use find the notification they want to see more detail, they can simply walk into personal space to view it.
      - "Side note: As for the final prototype, the last screen (personal space screen) is been removed. Since the need for it for my design is quite small (it would not be utilized a side for maybe change music volume). The social space screen actually give enough information to the user to let them judge if they want to act to the notification. Thus for the prototype demonstration you will not see any mention of that screen. However if you download and run the prototype yourself, you will find the personal space screen is actually still there, which is because I don&#39;t have enough time to remove it from the code. But if I have the time, I will eliminate all trace of that screen from my code."
    images:
      - url: projects/proxemic/sketch.png
        clickable: true
        size: *s-img-size
        name: Initial Sketch
      - url: projects/proxemic/first_prototype.png
        clickable: true
        size: *s-img-size
        name: First Prototype
      - url: projects/proxemic/refine1.png
        clickable: true
        size: *s-img-size
        name: No Connection Mode
      - url: projects/proxemic/refine2.png
        clickable: true
        size: *s-img-size
        name: Connected Mode
  - tag: persona
    name: Persona &amp; Context of Use
    subContent:
      - images:
        - url: projects/proxemic/Persona.png
          clickable: false
          size: 12
      - name: Context of Use
        content:
          - The proxemic display will be mainly used in a living room where the chance of phone always near Alice is small because Alice is eating or she is cooking. The display will be projected onto the wall between TV and the table, so that it can be easily viewed on almost all angle in the living room. Also it will be the least &#34;in the way&#34;, since people will rarely move toward that wall, thus the chance of people accidentally approaching the display would be quite small.
        images:
          - url: projects/proxemic/living_room_layout.png
            clickable: false
            size: 5
  - tag: visual
    name: Visual Project Summary
    subContent:
      - name: No Connection Mode
        content:
          - Person that is standing at public space will see the following screen. People can close their right hand to start music and close right hand gain to pause it.
        isContentContained: true
        images:
          - url: projects/proxemic/person_far.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/noConnect_far.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/musicStart_far.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/musicPause_far.png
            clickable: false
            size: *s-img-size
      - content:
        - If people come within the social space, more information will be present, one can wave their left/right hand to change information shown.
        isContentContained: true
        images:
          - url: projects/proxemic/person_mid.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/change_item.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/change_item2.png
            clickable: false
            size: *s-img-size
      - name: Pairing Device
        content:
          - When a phone is detected, user can step closer to the screen to pair the device with the screen.
        isContentContained: true
        images:
          - url: projects/proxemic/pairing_far.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/pairing_mid.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/pairing_close.png
            clickable: false
            size: *s-img-size
      - name: Connected Mode
        content:
          - Person that is standing at public space will see the following screen when a device is paired with the screen.
        isContentContained: true
        images:
          - url: projects/proxemic/person_far.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/connected_far.png
            clickable: false
            size: *s-img-size
      - content:
          - When there is a new notification coming from the phone, corresponding icon will light up on the screen. User can walk closer to view detailed information or use gestures to change information shown.
        isContentContained: true
        images:
          - url: projects/proxemic/newEvent_far.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/newEvent_mid.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/change_item.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/change_item2.png
            clickable: false
            size: *s-img-size
      - name: Incoming Call
        content:
          - When there is an incoming call, user will get a pop up notification for it. If they want to pick up or reject the call, they need to close right hand to pick up or close left hand to reject. when they want to hang up they can go to public space and cancel call by close left hand.
        isContentContained: true
        images:
          - url: projects/proxemic/incoming_far.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/incoming_mid.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/call_far.png
            clickable: false
            size: *s-img-size
          - url: projects/proxemic/call_mid.png
            clickable: false
            size: *s-img-size
  - tag: prototype
    name: Video Demonstration
    isContentContained: true
    videos:
      - url: https://www.youtube.com/embed/LZahwCm-lcM
        size: *vid-size
      - url: https://www.youtube.com/embed/x7igLy6AhnY
        size: *vid-size
      - url: https://www.youtube.com/embed/xnFM7rVOkl0
        size: *vid-size
      - url: https://www.youtube.com/embed/oZjbj1gEwGE
        size: *vid-size
---

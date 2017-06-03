---
layout: post
raw-title: "Physically Augmenting Mobile Devices"
title: "Hannah Sun - Physically Augmenting Mobile Devices"
date: "2015-12-16 15:00:27 -0600"
last_modified_at: "2017-06-03 15:00:27 -0600"
permalink: /projects/2015-2016/augmentingMobile/
sourceLink: "https://bitbucket.org/xhsun/augmenting-mobile-devices"
l-img-size: &l-img-size
  - 5
m-img-size: &m-img-size
  - 4
s-img-size: &s-img-size
  - 3
vid-size: &vid-size
  - 4
sections:
- tag: sketch
  name: Sketch &amp; Refine
  content:
    - The main premise of this idea is to let user using their phone in the winter without the need to take off the glove. So I decided to make a glove that will let that happen! The main idea is that on the thumb of the glove is a control button. Whenever it touches the other button on the different finger, it will trigger an action that is mapped to a phone interaction. For example, touching thumb and index finger will open map. But user can touch two fingers at same time for a different action. For example, use thumb to touch index and middle finger will open message app on the phone. To scroll or selecting between apps, user can use the joystick on the side of index finger.
    - For the initial refinement, I was thinking to move the button to few different medium and see how they fair. Thus I did few sketches on different items. But they all have their own special limitations. For instance, a bracelet might look cool. But it can be hard to find the button, since they probably will move around. Thus starting a simple task might become difficult. Then I thought why not a bracer? It will have the space I need to put the necessary buttons, the button will not move around and user don&#39;t need to do complicated hand acrobat just to open an app.
    - When I was sketching my idea, I wasn&#39;t sure with what to put in all the space I have. So I just tossing in a few buttons here than there. I even put a slider in just because I can. And it turn out I like the bracer idea the most.
    - The bracer idea did get the most positive feedback from the classmate. So I find myself a grid paper and start drawing my refinement sketch for the bracer idea (in the actual size and dimension). The area marked as screen is where the phone will be slide in. The button labelled with B is the ones user can customized to map to any action they want. The button with arrow pointing to the left is the back button and the one with arrow pointing right is the select button. In the center of the two button is the voice command button, user can use this button to do complicated task that cannot be done with the buttons present on the bracer (for example write a text message). On the bottom right corner is a D-pad for moving around the apps and scrolling. All the control buttons (select, back, voice command, and D-pad) will be tilted down so that it will be comfortable to reach and use those buttons.
  images:
    - name: Initial Sketch
      size: *m-img-size
      clickable: true
      url: "projects/phone/sketch1.png"
    - name: Initial Refinement
      size: *m-img-size
      clickable: true
      url: "projects/phone/sketch2.png"
    - name: Second Refinement
      size: *m-img-size
      clickable: true
      url: "projects/phone/sketch2.5.png"
- tag: physical
  name: Physical Medium Sketch
  content:
    - The physical medium sketch let me realize some significant weakness of glove design. First, you can&#39;t write a message when using the glove. Sure, the user can map each character in the alphabet in different gesture. Let along the problem of whether or not user can remember all the gestures, all of those hand acrobat just to type a message? No thank you! Well yes, I can use the voice command to make the user say the message. So writing the message is really not the problem. The problem is when user is using the glove, both of their hand will be occupied (one for glove and the other holding the phone), which means the user will not be able to hold any stuff if they want to make use of the glove. Another problem with the glove is the hand acrobat. User sometime might need to do some seriously complicated hand acrobat just to get to an action that is easily done on a phone, which sucks. And did I mention the fact that user might forget what gesture will do what? So yeah, there is quite a lot of learning and memorizing associated with the glove idea. Thus it can make it quite unfavorable to the user.
    - After ditching my glove idea, I make a simple &quot;alpha&quot; version prototype for my bracer idea. I find a few problems. First, there is too much customizable buttons. User probably will never use that many customizable buttons and those buttons take quite some space which make the bracer looks bulky. Second of all, the select button is in a very inconvenient place. User probably would not want to move their fingers all the way over to the selection button after they focus on the right app with the D-pad. Thus I decided to move the select button in the center of the D-pad to make it easily accessible.
    - I made a home screen for the bracer prototype. The idea of this home screen is that user can put their important/frequent used app in the home screen for easy access with the bracer. The infrequent or not important ones can be used by the voice command or not with the bracer.
    - Moving around in this screen can only be done by the D-pad, nothing will happen by touching the screen. Since the main goal for this design is to use the bracer with a glove on and as most people know, touch screen will not recognize a finger with glove. Maybe it would be a good idea to enable the user to use the touch screen as well, but it kind of defeat the purpose of the bracer.
    - Customizable buttons will open user assigned app or do a special task. Do note some app will override the function of those button for additional control.
  images:
    - name: Physical Medium Sketch
      size: *m-img-size
      clickable: true
      url: "projects/phone/physical1.png"
    - name: Mobile with Physical Augmentation
      size: *m-img-size
      clickable: true
      url: "projects/phone/physical2.png"
    - name: Mobile Interface
      size: *m-img-size
      clickable: true
      url: "projects/phone/physical3.png"
- tag: storyboard
  name: Narrative Storyboard
  subContent:
    - name: Answer Call
      content:
        - To answer incoming call, press the select button. To end call, press arrow button.
      isContentContained: true
      images:
        - url: projects/phone/story1.0.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Phone ringing
        - url: projects/phone/story1.1.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Pick up call
        - url: projects/phone/story1.2.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Hang up
        - url: projects/phone/story1.3.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Call ended
    - name: Reply Text Message
      content:
        - To reply to a message, press and hold on the oval button, device will now listen to your message. Once you are done, press select button to send message.
      isContentContained: true
      images:
        - url: projects/phone/story1.0.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Phone ringing
        - url: projects/phone/story2.1.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: New message
        - url: projects/phone/story2.2.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Open message
        - url: projects/phone/story2.3.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Speak to reply
        - url: projects/phone/story2.4.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Send message
    - name: Open Map
      content:
        - To open an app, use the button around select button to move between app. Once the app you wish to open is highlighted, press select button to open it.
      isContentContained: true
      images:
        - url: projects/phone/story3.0.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Wish to open map
        - url: projects/phone/story3.1.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Move to the next app
        - url: projects/phone/story3.2.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Move to map
        - url: projects/phone/story3.3.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Select map to open
        - url: projects/phone/story3.4.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Map open
    - name: Open Map Using Quick Access
      content: User can also set up a quick access button that map to different apps. In this instance, user use the quick access button to open the map.
      isContentContained: true
      images:
        - url: projects/phone/story3.0.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Wish to open map
        - url: projects/phone/story4.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Use quick access
        - url: projects/phone/story3.4.png
          clickable: false
          size: *s-img-size
          mobileSize: *l-img-size
          name: Map open
- tag: prototype
  name: Prototype
  isContentContained: true
  videos:
    - url: https://www.youtube.com/embed/U2jFcoWdtPo
      size: *vid-size
    - url: https://www.youtube.com/embed/Vh1w98CKCng
      size: *vid-size
    - url: https://www.youtube.com/embed/o6r4H6nhqy4
      size: *vid-size
    - url: https://www.youtube.com/embed/MueFCXBNsH0
      size: *vid-size
    - url: https://www.youtube.com/embed/irEconoTDT8
      size: *vid-size
---

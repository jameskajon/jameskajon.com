---
title: NASA USLI
subtitle: Competed with other WPI students in USLI 2018-2019.
description: In this NASA competition, my team planned to launch a rocket to about 4683 ft before breaking into sections and releasing its payload, which held a beacon. Upon landing, the payload was to open up and deliver the beacon to a marked destination. Per NASA's requirements, all disjointed parts of the rocket needed to be tracked by GPS. I worked with ECE team members to develop a GPS module for each of the three sections being tracked (electronics bay, nose cone, and payload retention system). Using C++, I programmed the modules so they would continuously transmit GPS coordinates. The modules consisted of an Arduino Nano, a NEO&#8209;6MV2 GPS, and an Adafruit RFM96W LoRa radio transceiver. Using another module, we built a base station with a large antenna. The module in the payload retention system had four motors, which would release the payload upon receipt of a command from the base station. The modules were successful in testing. However, during launch, the rocket failed before the modules could be operated.
type: ''
date: 2019-03-01
links:
  'FRR Document': /assets/usli/FRR.pdf
  'FRR Presentation': /assets/usli/FRR_Slides.pdf
  'FRR Addendum': /assets/usli/FRR_Addendum.pdf
---
In this NASA competition, my team planned to launch a rocket to about 4683 ft before breaking into sections and releasing its payload, which held a beacon. Upon landing, the payload was to open up and deliver the beacon to a marked destination. Per NASA's requirements, all disjointed parts of the rocket needed to be tracked by GPS.

I worked with ECE team members to develop a GPS module for each of the three sections being tracked: electronics bay, nose cone, and payload retention system. Using C++, I programmed the modules so they would continuously transmit GPS coordinates. The modules consisted of an Arduino Nano, a NEO&#8209;6MV2 GPS, and an Adafruit RFM96W LoRa radio transceiver. Using another module, we built a base station with a large antenna. The module in the payload retention system had four motors, which would release the payload upon receipt of a command from the base station.

The modules were successful in testing. However, during launch, the rocket failed before the modules could be operated.


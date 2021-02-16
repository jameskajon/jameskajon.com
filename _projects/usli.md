---
title: NASA USLI
subtitle: Competed with other WPI students in USLI 2018-2019.
description: In this NASA competition, my team planned to launch a rocket to about 4683 ft before breaking into sections and releasing its payload, which held a beacon. Upon landed, the payload was to open up and deliver the beacon to a marked destination. Per NASA's requirements, all disjointed parts of the rocket must be tracked by GPS. I worked with ECE team members to develop a GPS module for each of the three sections being tracked (electronics bay, nose cone, and payload retention system). Using C++ I programmed the Arduino Nano of the modules which integrated NEO-6MV2 GPS, and an Adafruit RFM96W LoRa radio transceiver so the modules would continuously transmitted GPS coordinates. We built a receiving station with another module but with a larger antenna. The module in the payload retention system also had four motors which could release the payload on recite of a command from the receiving station. The modules were successful in testing. However, during launch, the rocket failed before the modules could be operated.
type: ''
date: 2019-03-01
links:
  'FRR Document': /assets/usli/FRR.pdf
  'FRR Presentation': /assets/usli/FRR_Slides.pdf
  'FRR Addendum': /assets/usli/FRR_Addendum.pdf
---
In this NASA competition, my team planned to launch a rocket to about 4683 ft before breaking into sections and releasing its payload, which held a beacon. Upon landed, the payload was to open up and deliver the beacon to a marked destination. Per NASA's requirements, all disjointed parts of the rocket must be tracked by GPS. I worked with ECE team members to develop a GPS module for each of the three sections being tracked: electronics bay, nose cone, and payload retention system. Using C++ I programmed the Arduino Nano of the modules which integrated NEO-6MV2 GPS, and an Adafruit RFM96W LoRa radio transceiver so the modules would continuously transmitted GPS coordinates. We built a receiving station with another module but with a larger antenna. The module in the payload retention system also had four motors which could release the payload on recite of a command from the receiving station. The modules were successful in testing. However, during launch, the rocket failed before the modules could be operated.



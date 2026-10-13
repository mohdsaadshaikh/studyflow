import type { Topic } from "@/content/types";

const LEC1 = "Lec 1 · Introduction to IoT";
const LEC2 = "Lec 2 · Telecommunication & Networks";
const LEC3 = "Lec 3 · Physical Design of IoT";
const LEC4 = "Lec 4 · Logical Design of IoT";

export const topics: Topic[] = [
  // ---------------------------------------------------------------------------
  // Lec 1 · Introduction to IoT
  // ---------------------------------------------------------------------------
  {
    id: "iot-what-is-iot",
    number: 1,
    chapter: LEC1,
    title: "What IoT Is: Things, the Physical World and the Traditional Internet",
    summary:
      "The class definition of IoT, what counts as a \"thing\", why it is called the Internet of Things, how IoT links the physical and digital worlds, and the IoT vs traditional internet comparison from the notes.",
    content: `## The definition from class

Our notes define it like this: **IoT means connecting physical things to computing and communication networks so that they can sense, communicate, process information and act.**

Learn that sentence as it is. The four verbs at the end (sense, communicate, process, act) come back in almost every later lecture. The term "Internet of Things" is usually credited to Kevin Ashton, who used it in 1999 while working on RFID tracking for supply chains.

## What is a "thing"?

The notes say the word "thing" is extremely important. A thing is **a physical or logical entity that can participate in an IoT system**. It can be as small as a single sensor or as big as an industrial machine.

Examples from the notes:

- temperature sensor
- smart watch
- smart refrigerator
- vehicle
- industrial machine
- security camera
- medical device

What makes something an IoT device? It generally has at least one way to interact with the physical world (a **sensor** or an **actuator**) and a **network interface** through which it can talk to the digital world. A normal fridge has neither. A smart fridge that reports its inside temperature to your phone has both.

## Why "Internet of Things"?

We already had an internet. It connected computing devices and people. IoT extends that idea by connecting physical objects to communication networks. The notes show it with two chains:

\`\`\`
Traditional internet:
  Computer -> Internet -> Computer

IoT:
  Temperature sensor -> Internet -> Server -> Application
  Smartphone -> Internet -> Smart bulb -> ON/OFF
\`\`\`

So IoT extends network connectivity into the physical world. In the first IoT chain, data comes out of the physical world. In the second, a command goes back into it and a real bulb changes state.

## IoT and the physical world

A normal software application works only with digital information: files, records, messages. IoT builds a link between the **physical world** and the **digital world**, and the link runs both ways. The notes use a room temperature example:

\`\`\`
Physical world: temperature of a room
        |
      Sensor
        |
Digital world: Temperature = 30 C
        |
    Processing
        |
     Decision
        |
     Actuator
        |
Physical world: air conditioner turned ON
\`\`\`

The data starts as heat in a room, becomes a number, gets processed, and ends up as a physical change (cold air). This is why the notes say IoT is closely related to **cyber-physical systems (CPS)**, which are systems where computational parts and physical parts interact with each other.

## IoT vs traditional internet

This table is straight from the class notes and is a likely short question.

| Traditional internet | Internet of Things |
|---|---|
| Mainly connects computing systems and users | Connects physical objects and computing systems |
| Human interaction is often central | Devices can interact automatically |
| Deals mainly with digital information | Connects digital information with physical processes |
| PCs, servers and smartphones are common endpoints | Sensors, actuators, machines and smart devices are endpoints |
| Physical-world interaction is usually indirect | Physical-world interaction is a fundamental characteristic |

The notes end with one line worth quoting in an answer: IoT represents an extension of networking and computing into physical environments.

## Common mistakes

- Calling any device with Wi-Fi an IoT device. A laptop browsing YouTube is on the internet, but it isn't sensing or acting on the physical world. An IoT device needs a sensor or actuator plus a network interface.
- Saying a "thing" must be physical. The notes say physical **or logical** entity, so a software service that takes part in the system also counts.
- Forgetting the reverse direction. Through actuators, IoT changes the physical world as well as monitoring it.

## How this shows up in the mid

Expect "Define IoT", "What is a thing in IoT? Give examples", and "Differentiate between IoT and the traditional internet" (write at least four rows of the table). A short note on "IoT and the physical world" with the room temperature chain is also a good bet.`,
    mcqs: [
      {
        q: "According to the class notes, IoT means connecting physical things to computing and communication networks so that they can:",
        options: [
          "store files in the cloud",
          "sense, communicate, process information and act",
          "browse the web without a human",
          "replace all computers",
        ],
        answer: 1,
        explain: "The class definition ends with four verbs: sense, communicate, process information and act.",
      },
      {
        q: "In IoT, a \"thing\" is best described as:",
        options: [
          "only a computer connected to the internet",
          "only a sensor",
          "a physical or logical entity that can participate in an IoT system",
          "any object in a house",
        ],
        answer: 2,
        explain: "The notes define a thing as a physical or logical entity that can participate in an IoT system.",
      },
      {
        q: "An IoT device generally has at least one way to interact with the physical world and:",
        options: [
          "a network interface to communicate with the digital world",
          "a touchscreen",
          "a hard disk",
          "a keyboard",
        ],
        answer: 0,
        explain: "A sensor or actuator links it to the physical world, and a network interface links it to the digital world.",
      },
      {
        q: "Which chain shows IoT rather than the traditional internet?",
        options: [
          "Computer -> Internet -> Computer",
          "Laptop -> Email server -> Laptop",
          "Phone -> Web server -> Phone",
          "Temperature sensor -> Internet -> Server -> Application",
        ],
        answer: 3,
        explain: "The sensor chain starts in the physical world. The others only move data between computers.",
      },
      {
        q: "IoT is closely related to which kind of system, in which computational and physical components interact?",
        options: ["Database management systems", "Cyber-physical systems", "Operating systems", "Expert systems"],
        answer: 1,
        explain: "The notes link IoT to cyber-physical systems (CPS).",
      },
      {
        q: "In the traditional internet, the common endpoints are:",
        options: [
          "PCs, servers and smartphones",
          "sensors and actuators",
          "valves and motors",
          "RFID tags only",
        ],
        answer: 0,
        explain: "Sensors, actuators and machines are the typical IoT endpoints. PCs, servers and phones are the traditional ones.",
      },
      {
        q: "In the room temperature example, which component turns the digital decision back into a physical change?",
        options: ["Sensor", "Server", "Actuator", "Network"],
        answer: 2,
        explain: "The actuator switches the air conditioner on, so the decision becomes a physical action.",
      },
      {
        q: "Which statement about physical-world interaction is correct?",
        options: [
          "It is a fundamental characteristic of the traditional internet",
          "IoT avoids it",
          "It is usually indirect in both",
          "It is a fundamental characteristic of IoT",
        ],
        answer: 3,
        explain: "In the comparison table, physical-world interaction is usually indirect for the traditional internet and fundamental for IoT.",
      },
      {
        q: "Who is usually credited with coining the term \"Internet of Things\" in 1999?",
        options: ["Tim Berners-Lee", "Kevin Ashton", "Vint Cerf", "Claude Shannon"],
        answer: 1,
        explain: "Kevin Ashton used the phrase in 1999 while working on RFID in supply chains.",
      },
    ],
    fillBlanks: [
      {
        q: "IoT extends network connectivity into the ___ world.",
        answer: "physical",
        explain: "That is the line the notes use to sum up why it is called the Internet of Things.",
      },
      {
        q: "A thing is a physical or ___ entity that can participate in an IoT system.",
        answer: "logical",
      },
      {
        q: "IoT is closely related to cyber-___ systems.",
        answer: "physical",
        alt: ["physical systems"],
      },
      {
        q: "In traditional internet, ___ interaction is often central, while IoT devices can interact automatically.",
        answer: "human",
      },
      {
        q: "An IoT device talks to the digital world through a network ___.",
        answer: "interface",
        alt: ["interface card"],
      },
    ],
    trueFalse: [
      {
        q: "Every device with Wi-Fi is an IoT device.",
        answer: false,
        explain: "It also needs a way to sense or act on the physical world. A laptop on Wi-Fi isn't an IoT thing just for being online.",
      },
      {
        q: "IoT can both monitor the physical world and change it.",
        answer: true,
        explain: "Sensors monitor it and actuators change it, for example switching on an AC.",
      },
      {
        q: "In IoT, a thing must always be a physical object.",
        answer: false,
        explain: "The notes say a thing is a physical or logical entity.",
      },
      {
        q: "The traditional internet mainly deals with digital information.",
        answer: true,
        explain: "IoT connects that digital information with physical processes.",
      },
      {
        q: "A smart bulb switched from a phone app is an example of the digital world acting on the physical world.",
        answer: true,
        explain: "The command starts as data in the app and ends as the bulb physically turning on or off.",
      },
    ],
    flashcards: [
      { front: "Define IoT (class definition)", back: "Connecting physical things to computing and communication networks so that they can sense, communicate, process information and act." },
      { front: "What is a \"thing\" in IoT?", back: "A physical or logical entity that can participate in an IoT system, e.g. a sensor, smart watch, vehicle, industrial machine, security camera." },
      { front: "Two things every IoT device generally has", back: "A way to interact with the physical world (sensor or actuator) and a network interface to communicate with the digital world." },
      { front: "Why is it called the Internet of Things?", back: "The internet already connected computers and people. IoT extends it by connecting physical objects, so connectivity reaches the physical world." },
      { front: "Traditional internet chain vs IoT chain", back: "Computer -> Internet -> Computer, vs Temperature sensor -> Internet -> Server -> Application." },
      { front: "Cyber-physical system (CPS)", back: "A system in which computational components and physical components interact. IoT is closely related to CPS." },
      { front: "Room temperature example (IoT and physical world)", back: "Room heat -> sensor -> \"30 C\" -> processing -> decision -> actuator -> AC turned on." },
      { front: "Endpoints: traditional internet vs IoT", back: "Traditional: PCs, servers, smartphones. IoT: sensors, actuators, machines, smart devices." },
      { front: "Who coined \"Internet of Things\" and when?", back: "Kevin Ashton, 1999, while working on RFID for supply chains." },
    ],
    examples: [
      {
        title: "Things you could name in an answer",
        items: [
          "Temperature sensor in a cold-storage room for vaccines",
          "Smart watch counting steps and heart rate",
          "Smart refrigerator reporting its inside temperature",
          "Security camera on a shop in Saddar that sends motion alerts",
          "A vehicle with a GPS tracker reporting its location",
        ],
      },
      {
        title: "Physical world to digital world and back",
        items: [
          "Water tank on the roof -> level sensor -> \"tank 20% full\" -> app decides -> motor (pump) switched on",
          "Dark street -> light sensor (LDR) -> \"light low\" -> controller -> street light switched on",
        ],
      },
    ],
    exercises: [
      {
        problem: "Define the Internet of Things. What is meant by a \"thing\" in IoT? Give four examples.",
        solution: `Definition (class notes):
IoT means connecting physical things to computing and communication
networks so that they can sense, communicate, process information and act.

Thing:
A thing is a physical or logical entity that can participate in an IoT
system. It may be a simple sensor, a household appliance, a vehicle, an
industrial machine or a medical device.
An IoT device generally has:
  - at least one way to interact with the physical world
    (a sensor or an actuator), and
  - a network interface to communicate with the digital world.

Examples:
1. Temperature sensor
2. Smart watch
3. Smart refrigerator
4. Security camera
(also: vehicle, industrial machine)`,
      },
      {
        problem: "Differentiate between the traditional internet and the Internet of Things.",
        solution: `Traditional internet               | Internet of Things
-----------------------------------|-----------------------------------
Mainly connects computing systems  | Connects physical objects and
and users                          | computing systems
Human interaction is often central | Devices can interact automatically
Mainly digital information         | Connects digital information with
                                   | physical processes
Endpoints: PCs, servers,           | Endpoints: sensors, actuators,
smartphones                        | machines, smart devices
Physical-world interaction is      | Physical-world interaction is a
usually indirect                   | fundamental characteristic

Chains:
Traditional: Computer -> Internet -> Computer
IoT:         Temperature sensor -> Internet -> Server -> Application

So IoT is an extension of networking and computing into physical
environments.`,
      },
      {
        problem: "Explain with a diagram how IoT connects the physical world and the digital world.",
        solution: `A normal software application works only with digital information.
IoT creates a two-way link: Physical world <-> Digital world.

Example: controlling room temperature

  Physical world: temperature of a room
          |
        Sensor            (measures the heat)
          |
  Digital world: Temperature = 30 C
          |
      Processing          (controller / server)
          |
       Decision           (30 C is above the set limit)
          |
       Actuator           (relay / switch)
          |
  Physical world: air conditioner turned ON

The sensor turns a physical quantity into data. The actuator turns a
decision back into a physical action. Because computing and physical
parts interact like this, IoT is closely related to cyber-physical
systems (CPS).`,
      },
    ],
  },
  {
    id: "iot-basic-components",
    number: 2,
    chapter: LEC1,
    title: "Basic Components of IoT and How IoT Works",
    summary:
      "The five basic components from the notes (sensor, processing unit, communication network, actuator, application), the extra components listed on the slides (cloud, analytics, user interface, security), and the sense-process-act loop with the smart agriculture and smart home examples.",
    content: `## Basic components of an IoT system

An IoT system is made of several interconnected components. The class notes list five.

### 1. Sensors

A sensor is **a device that detects or measures a physical quantity and converts it into a form that can be processed electronically**. Examples: temperature, humidity, pressure, light, motion, gas. A temperature sensor, for instance, measures the temperature of its surroundings.

### 2. Processing unit

The collected data normally needs processing. The processing unit may be a microcontroller, a microprocessor, an embedded computer, an edge computer or a cloud computing system. It turns raw sensor measurements into meaningful information.

### 3. Communication network

The IoT device must communicate with another device or computing system. Technologies include Wi-Fi, Bluetooth, Zigbee, Ethernet, cellular networks and other IoT-oriented technologies.

### 4. Actuator

An actuator is **a component that converts a control signal into a physical action**. Examples: motor, relay, valve, buzzer, smart lock.

Notes example: temperature sensor detects high temperature -> controller processes the data -> actuator switches on a cooling system. The notes call this the fundamental **sense -> process -> act** cycle of IoT.

### 5. Application

The application provides a useful service to the user. Examples: a mobile app showing temperature, a smart-home control system, a hospital monitoring system, an industrial monitoring dashboard, a smart agriculture app.

## The slide version: main components of IoT

The "Components of IoT" slides group things a little differently. Know both lists.

| Slide component | What it does |
|---|---|
| Sensors and actuators (things) | Collect live data (temperature, motion, light) or perform physical actions on command |
| Connectivity (networks) | Carries the data to the cloud or a gateway: Wi-Fi, Bluetooth, cellular, satellite |
| IoT cloud | Servers and platforms that store and manage the data |
| IoT analytics and data management | Collect, store, organise and analyse the huge data volumes, using analytics or machine learning |
| User interface (UI) | Dashboard, mobile app or alert system that shows results and lets users monitor or control |
| Security | Encryption and authentication protecting hardware, data streams and networks |

If a question just says "list the components of IoT", write the notes' five and then mention cloud, analytics, UI and security from the slides.

## How does IoT work?

The notes draw a basic IoT operation as eight steps:

\`\`\`
1. Physical environment
        |
2. Sensor
        |
3. Data collection
        |
4. Communication network
        |
5. Processing / analysis
        |
6. Decision
        |
7. Actuator / application
        |
8. Physical action
\`\`\`

## Example: smart agriculture (from the notes)

An IoT irrigation system. A soil-moisture sensor measures the moisture level. If the soil becomes too dry:

1. Sensor detects low moisture.
2. Controller processes the measurement.
3. Network communicates the information if necessary.
4. Application / cloud / edge system determines that irrigation is required.
5. Actuator activates the water pump.

Picture a wheat field near Faisalabad. Nobody has to walk the field to check the soil, and water isn't wasted on soil that's already wet. The notes make the point that the system influences the physical environment as well as monitoring it.

## Example: smart home temperature control (from the notes)

| Step | What happens |
|---|---|
| 1. Sensing | A temperature sensor measures room temperature |
| 2. Data acquisition | The sensor produces a measurement |
| 3. Processing | A controller checks if the temperature is above the desired threshold |
| 4. Communication | The information is sent through a network |
| 5. Decision | The system decides cooling is required |
| 6. Actuation | An actuator or control mechanism switches on the cooling system |
| 7. Monitoring | The user views the system's condition through an application |

The notes summarise it as a loop:

\`\`\`
Environment -> Sensor -> Controller -> Network -> Processing
     ^                                              |
     |                                              v
Environment <------- Actuator <-------------- Decision
\`\`\`

The notes call this loop the core idea behind IoT.

## Common mistakes

- Mixing up sensor and actuator. A sensor is input (it measures). An actuator is output (it acts). A buzzer and a relay are actuators, not sensors.
- Thinking processing only happens in the cloud. It can be on the device (microcontroller), at the edge, or in the cloud.
- Leaving out the application. Without it, the user gets no service out of the data.

## How this shows up in the mid

"List and explain the basic components of IoT" is almost certain. Give a definition and one example for each. "Explain how IoT works with an example" wants the step diagram plus the irrigation or smart-home example.`,
    mcqs: [
      {
        q: "A device that detects or measures a physical quantity and converts it into a form that can be processed electronically is a:",
        options: ["actuator", "gateway", "sensor", "router"],
        answer: 2,
        explain: "That is the notes' definition of a sensor.",
      },
      {
        q: "Which of these is an actuator?",
        options: ["Humidity sensor", "Relay", "LDR", "PIR sensor"],
        answer: 1,
        explain: "A relay switches a circuit on command, so it converts a control signal into an action. The others measure things.",
      },
      {
        q: "An actuator converts:",
        options: [
          "a physical quantity into an electrical signal",
          "analog data into digital data",
          "a control signal into a physical action",
          "raw data into a dashboard",
        ],
        answer: 2,
        explain: "Actuators act on the environment, e.g. a motor turning or a valve opening.",
      },
      {
        q: "Which is NOT listed in the notes as a possible processing unit?",
        options: ["Microcontroller", "Edge computer", "Cloud computing system", "Buzzer"],
        answer: 3,
        explain: "A buzzer is an actuator. The notes list microcontroller, microprocessor, embedded computer, edge computer and cloud.",
      },
      {
        q: "The fundamental cycle of IoT named in the notes is:",
        options: ["sense -> process -> act", "store -> forward -> delete", "request -> wait -> close", "input -> print -> exit"],
        answer: 0,
        explain: "Sensor detects, controller processes, actuator acts.",
      },
      {
        q: "In the smart irrigation example, which component activates the water pump?",
        options: ["Soil-moisture sensor", "Network", "Actuator", "Application"],
        answer: 2,
        explain: "The application decides irrigation is needed; the actuator actually switches the pump.",
      },
      {
        q: "On the slides, the dashboard, mobile app or alert system that shows insights to end users is called the:",
        options: ["IoT cloud", "User interface", "Connectivity", "Security layer"],
        answer: 1,
        explain: "The UI presents processed insights and lets users monitor or control the system.",
      },
      {
        q: "In the 8-step IoT operation from the notes, what comes right after \"Communication network\"?",
        options: ["Physical action", "Sensor", "Decision", "Processing / analysis"],
        answer: 3,
        explain: "Order: environment, sensor, data collection, communication network, processing/analysis, decision, actuator/application, physical action.",
      },
      {
        q: "Encryption and authentication protecting hardware, data streams and networks belong to which slide component?",
        options: ["Security", "Analytics", "Connectivity", "Sensors"],
        answer: 0,
        explain: "The slides list security as its own component.",
      },
    ],
    fillBlanks: [
      {
        q: "An ___ converts a control signal into a physical action.",
        answer: "actuator",
      },
      {
        q: "The basic cycle of IoT is sense -> process -> ___.",
        answer: "act",
        alt: ["action"],
      },
      {
        q: "In smart irrigation, a soil-___ sensor measures how wet the soil is.",
        answer: "moisture",
      },
      {
        q: "The processing system transforms raw sensor measurements into meaningful ___.",
        answer: "information",
      },
      {
        q: "The ___ provides a useful service to the user, e.g. a mobile app showing temperature.",
        answer: "application",
        alt: ["app"],
      },
      {
        q: "In the smart home example, step 7 is ___: the user views the system's condition through an app.",
        answer: "monitoring",
      },
    ],
    trueFalse: [
      {
        q: "A buzzer is a sensor.",
        answer: false,
        explain: "A buzzer produces sound on command, so it is an actuator.",
      },
      {
        q: "Processing in an IoT system can happen on the device, at the edge or in the cloud.",
        answer: true,
        explain: "The notes list microcontroller, embedded computer, edge computer and cloud as processing options.",
      },
      {
        q: "Zigbee, Wi-Fi, Bluetooth and Ethernet are examples of communication technologies used by IoT devices.",
        answer: true,
        explain: "All four appear in the notes under the communication network component.",
      },
      {
        q: "In the irrigation example, the system only monitors the soil and cannot influence it.",
        answer: false,
        explain: "The notes stress the opposite: the system switches the pump on, so it influences the environment.",
      },
      {
        q: "The slides list IoT cloud and IoT analytics as components of IoT.",
        answer: true,
        explain: "Along with sensors/actuators, connectivity, user interface and security.",
      },
    ],
    flashcards: [
      { front: "Five basic components (class notes)", back: "Sensors, processing unit, communication network, actuator, application." },
      { front: "Sensor (definition)", back: "A device that detects or measures a physical quantity and converts it into a form that can be processed electronically." },
      { front: "Actuator (definition + examples)", back: "Converts a control signal into a physical action. Motor, relay, valve, buzzer, smart lock." },
      { front: "Processing unit options", back: "Microcontroller, microprocessor, embedded computer, edge computer, cloud computing system." },
      { front: "Slide list of IoT components", back: "Sensors & actuators, connectivity, IoT cloud, IoT analytics & data management, user interface, security." },
      { front: "8 steps of how IoT works", back: "Physical environment -> sensor -> data collection -> communication network -> processing/analysis -> decision -> actuator/application -> physical action." },
      { front: "Smart irrigation chain", back: "Sensor detects low moisture -> controller processes -> network sends -> app/cloud/edge decides irrigation needed -> actuator starts pump." },
      { front: "7 steps of the smart home example", back: "Sensing, data acquisition, processing, communication, decision, actuation, monitoring." },
      { front: "Core idea behind IoT (the loop)", back: "Environment -> sensor -> controller -> network -> processing -> decision -> actuator -> environment." },
    ],
    examples: [
      {
        title: "Component spotting: smart rooftop water tank",
        items: [
          "Sensor: ultrasonic level sensor on the tank lid",
          "Processing unit: ESP32 board that converts distance to \"% full\"",
          "Communication network: home Wi-Fi",
          "Actuator: relay that switches the water motor",
          "Application: phone app showing the level and a \"tank full\" alert",
        ],
      },
      {
        title: "Sense, process, act in daily life",
        items: [
          "Gas leak in a kitchen: gas sensor -> controller -> buzzer sounds and exhaust fan turns on",
          "Hospital ward: pulse sensor -> processing finds abnormal reading -> alert on nurse's dashboard",
          "Factory: vibration sensor on a motor -> analytics spots unusual pattern -> machine stopped",
        ],
      },
    ],
    exercises: [
      {
        problem: "List and explain the basic components of an IoT system with one example of each.",
        solution: `1. Sensors
   Detect or measure a physical quantity and convert it into a form
   that can be processed electronically.
   Example: temperature sensor measuring room temperature.

2. Processing unit
   Processes the collected data and turns raw readings into meaningful
   information. Can be a microcontroller, microprocessor, embedded
   computer, edge computer or cloud system.
   Example: a microcontroller checking if temperature > 30 C.

3. Communication network
   Lets the device communicate with other devices or computing systems.
   Example: Wi-Fi, Bluetooth, Zigbee, Ethernet, cellular.

4. Actuator
   Converts a control signal into a physical action.
   Example: relay switching on a cooling fan; motor, valve, buzzer,
   smart lock.

5. Application
   Provides a useful service to the user.
   Example: mobile app showing temperature; hospital monitoring system.

(Slides also list: IoT cloud, IoT analytics & data management,
user interface and security.)`,
      },
      {
        problem: "Explain how IoT works. Draw the basic IoT operation and explain it with the smart agriculture example.",
        solution: `Basic IoT operation:

 Physical environment (1)
        |
 Sensor (2)
        |
 Data collection (3)
        |
 Communication network (4)
        |
 Processing / analysis (5)
        |
 Decision (6)
        |
 Actuator / application (7)
        |
 Physical action (8)

Smart agriculture (IoT irrigation system):
A soil-moisture sensor measures the moisture level. If the soil
becomes too dry:
 - Sensor: detects low moisture
 - Controller: processes the measurement
 - Network: communicates the information if necessary
 - Application / cloud / edge: determines that irrigation is required
 - Actuator: activates the water pump

So the physical environment is not merely monitored; the IoT system
can also influence it.`,
      },
      {
        problem: "Describe the seven steps of a smart home temperature-control system and draw the IoT loop.",
        solution: `Step 1 Sensing: temperature sensor measures room temperature.
Step 2 Data acquisition: the sensor produces a measurement.
Step 3 Processing: a controller checks whether the temperature is
       above the desired threshold.
Step 4 Communication: the information is transmitted through a network.
Step 5 Decision: the system determines cooling is required.
Step 6 Actuation: an actuator / control mechanism switches on the
       cooling system.
Step 7 Monitoring: the user views the system's condition through an
       application.

Loop:
 Environment -> Sensor -> Controller -> Network -> Processing
      ^                                              |
      |                                              v
 Environment <------- Actuator <-------------- Decision

This loop is the core idea behind IoT.`,
      },
      {
        problem: "Differentiate between a sensor and an actuator with two examples each.",
        solution: `Sensor                               | Actuator
-------------------------------------|-------------------------------------
Observes the environment             | Acts on the environment
Input device                         | Output / action device
Converts a physical quantity into    | Converts a control signal into a
a signal                             | physical action
e.g. humidity sensor, motion sensor  | e.g. water valve, door lock, motor

Easy way to remember (notes):
Sensors = eyes / ears of the IoT system
Actuators = hands of the IoT system`,
      },
    ],
  },
  {
    id: "iot-characteristics-applications",
    number: 3,
    chapter: LEC1,
    title: "Characteristics and Applications of IoT",
    summary:
      "The nine major characteristics of IoT from the notes (connectivity, sensing, data processing, intelligence, actuation, heterogeneity, scalability, dynamic nature, security and privacy) and the main application areas from the slides.",
    content: `## Major characteristics of IoT

The notes list nine. Each one has a short definition and an example, so learn them as pairs.

### 1. Connectivity

Connectivity is a fundamental characteristic. IoT devices must be able to communicate with other devices, systems, networks or services. Without communication a sensor may still collect information, but it can't take part effectively in a distributed IoT system.

### 2. Sensing

IoT systems use sensors to observe the physical environment: temperature, pressure, humidity and so on. Sensing gives the system information about the physical world.

### 3. Data processing

Raw sensor data often isn't directly useful. The system processes it to get meaningful information.

\`\`\`
Raw data:              39.8 C
Processed information: "Temperature exceeds the defined threshold"
\`\`\`

Processing may happen on the device, at the edge, or in the cloud.

### 4. Intelligence

IoT systems can use software, rules, algorithms and data analysis to make decisions. Notes example: motion detected -> decide whether the room is occupied -> control the lighting. The notes say this is why IoT is more than simply connecting devices.

### 5. Actuation

IoT systems can also perform actions on the environment they observe.

\`\`\`
Sensor detects abnormal condition -> Processing -> Actuator changes the physical state
\`\`\`

This creates the connection between the digital world and the physical world.

### 6. Heterogeneity

IoT environments contain different types of devices, hardware, operating systems, networks, communication technologies and applications. All of them must cooperate inside one overall system. Example: a smart city may have traffic cameras, vehicles, parking systems and environmental sensors, all using different technologies.

### 7. Scalability

An IoT system may contain a very large number of connected devices. The architecture and communication mechanisms must handle more and more devices being added without unacceptable degradation of the system.

### 8. Dynamic nature

IoT environments change continuously. Devices may connect, disconnect, move, change their operating conditions, generate different amounts of data, and change their state. IoT systems must accommodate this.

### 9. Security and privacy

IoT devices collect and exchange potentially sensitive information. Security means protecting devices, communication, data, services and users. Privacy matters too, because IoT systems can collect information about people's activities, locations or environments.

(This page of the scanned notes is very faint. The list above is what can be read; the last item in the "protect" list looks like "users".)

## Quick table for revision

| Characteristic | One-line meaning | Example |
|---|---|---|
| Connectivity | Devices can communicate | Sensor sends readings over Wi-Fi |
| Sensing | Observe the physical world | Temperature, humidity sensors |
| Data processing | Raw data -> useful information | 39.8 C -> "above threshold" |
| Intelligence | Rules and analysis make decisions | Motion -> room occupied -> lights on |
| Actuation | System acts on the world | Valve opens, AC turns on |
| Heterogeneity | Many kinds of devices and networks | Smart city cameras, cars, parking sensors |
| Scalability | Grows to many devices without breaking | Thousands of smart meters |
| Dynamic nature | Devices join, leave, move | A delivery van moving between cell towers |
| Security and privacy | Protect devices, data and people | Encrypted health data from a wearable |

## Applications of IoT

The slides and notes give these areas (the slides call them IoT verticals):

| Area | What IoT does there |
|---|---|
| Smart home | Smart meters, heating/cooling, motion, temperature and lighting sensors, smart appliances, security |
| Smart healthcare | Wearables, hospital patient monitoring, alerts to doctors |
| Smart agriculture | Soil-moisture based irrigation, weather and humidity monitoring |
| Smart city | Traffic cameras, parking, street lights, public safety, environment sensors |
| Smart transportation | Vehicle tracking, connected vehicles, traffic management |
| Smart energy | Smart meters, renewable energy sent over a smart grid |
| Smart industry | Industrial monitoring dashboards, machine health, automation |
| Smart buildings / living | Access control, lighting, HVAC |

Local examples that fit well in an answer: Safe City camera networks in Lahore and Islamabad (smart city), drip and tube-well irrigation controlled by soil sensors in Punjab (agriculture), rooftop water-tank level sensors (smart home), and GPS trackers on delivery bikes and buses (transportation).

## Common mistakes

- Writing "connectivity" and "communication" as two separate characteristics. They are the same point.
- Confusing scalability (handles more devices) with heterogeneity (handles different kinds of devices).
- Treating intelligence as the same thing as data processing. Processing produces information; intelligence uses it to make a decision.

## How this shows up in the mid

"Explain any five characteristics of IoT" is a standard long question. Give the heading, a two-line explanation and the example from the notes for each. "List applications of IoT" or "Explain any two applications" also shows up; use the irrigation and smart home examples from the previous topic.`,
    mcqs: [
      {
        q: "Which characteristic means IoT environments contain different types of devices, hardware, operating systems and networks?",
        options: ["Scalability", "Heterogeneity", "Dynamic nature", "Connectivity"],
        answer: 1,
        explain: "Heterogeneity is about variety. Scalability is about numbers.",
      },
      {
        q: "Turning the raw reading 39.8 C into \"Temperature exceeds the defined threshold\" is an example of:",
        options: ["actuation", "connectivity", "data processing", "heterogeneity"],
        answer: 2,
        explain: "The notes use this exact example under data processing.",
      },
      {
        q: "\"The architecture must handle the addition of many devices without unacceptable degradation\" describes:",
        options: ["scalability", "security", "sensing", "intelligence"],
        answer: 0,
        explain: "Scalability means the system can grow.",
      },
      {
        q: "Devices connecting, disconnecting, moving and changing state describes which characteristic?",
        options: ["Heterogeneity", "Actuation", "Privacy", "Dynamic nature"],
        answer: 3,
        explain: "IoT environments change continuously, so the system must accommodate a dynamic environment.",
      },
      {
        q: "According to the notes, why is IoT \"more than simply connecting devices\"?",
        options: [
          "Because it uses expensive hardware",
          "Because of intelligence: using rules, algorithms and analysis to make decisions",
          "Because it needs the cloud",
          "Because it uses Bluetooth",
        ],
        answer: 1,
        explain: "The motion -> occupied -> lighting example is given under intelligence.",
      },
      {
        q: "Which characteristic is called fundamental, because without it a sensor cannot participate effectively in a distributed IoT system?",
        options: ["Actuation", "Scalability", "Connectivity", "Privacy"],
        answer: 2,
        explain: "Without communication the sensor only collects data locally.",
      },
      {
        q: "Privacy is important in IoT mainly because systems may collect information about:",
        options: [
          "people's activities, locations or environments",
          "only machine temperatures",
          "network cable lengths",
          "operating system versions",
        ],
        answer: 0,
        explain: "That is the reason given in the notes.",
      },
      {
        q: "A smart city with traffic cameras, vehicles, parking systems and environmental sensors using different technologies is the notes' example of:",
        options: ["dynamic nature", "actuation", "sensing", "heterogeneity"],
        answer: 3,
        explain: "Different kinds of components must cooperate in one system.",
      },
      {
        q: "Smart meters and renewable energy sent over a smart grid belong to which IoT vertical?",
        options: ["Smart health", "Smart energy", "Smart transportation", "Smart agriculture"],
        answer: 1,
        explain: "Smart energy is one of the verticals on the architecture slides.",
      },
    ],
    fillBlanks: [
      {
        q: "IoT environments containing different devices, operating systems and networks is called ___.",
        answer: "heterogeneity",
        alt: ["heterogenity"],
      },
      {
        q: "Processing may occur on the device, at the ___, or in the cloud.",
        answer: "edge",
      },
      {
        q: "The ability to add many devices without unacceptable degradation is ___.",
        answer: "scalability",
      },
      {
        q: "Actuation creates a connection between the digital world and the ___ world.",
        answer: "physical",
      },
      {
        q: "IoT devices collect potentially sensitive information, so security and ___ are major characteristics.",
        answer: "privacy",
      },
    ],
    trueFalse: [
      {
        q: "Raw sensor data is always directly useful without processing.",
        answer: false,
        explain: "The notes say raw data is often not directly useful; it must be processed into meaningful information.",
      },
      {
        q: "Scalability and heterogeneity mean the same thing.",
        answer: false,
        explain: "Scalability is about the number of devices; heterogeneity is about different types of devices and technologies.",
      },
      {
        q: "In IoT, devices may connect, disconnect and move, so the system must handle a dynamic environment.",
        answer: true,
        explain: "That is the dynamic nature characteristic.",
      },
      {
        q: "IoT systems can only observe the environment; they cannot perform actions.",
        answer: false,
        explain: "Actuation lets them change the physical state, e.g. switching on a pump.",
      },
      {
        q: "Smart healthcare, smart cities and smart agriculture are all IoT application areas.",
        answer: true,
        explain: "All three appear in the slides' and notes' lists.",
      },
    ],
    flashcards: [
      { front: "Nine characteristics of IoT (notes)", back: "Connectivity, sensing, data processing, intelligence, actuation, heterogeneity, scalability, dynamic nature, security & privacy." },
      { front: "Connectivity", back: "Devices must communicate with other devices, systems, networks or services. Without it a sensor can't take part effectively in a distributed IoT system." },
      { front: "Data processing example", back: "Raw: 39.8 C. Processed: \"Temperature exceeds the defined threshold\". Can happen on device, edge or cloud." },
      { front: "Intelligence example", back: "Motion detected -> decide whether the room is occupied -> control lighting." },
      { front: "Heterogeneity", back: "Different devices, hardware, OS, networks, communication technologies and applications must cooperate in one system." },
      { front: "Scalability", back: "Architecture and communication must handle many more devices being added without unacceptable degradation." },
      { front: "Dynamic nature", back: "Devices connect, disconnect, move, change operating conditions, generate different amounts of data, change state." },
      { front: "Security protects...", back: "Devices, communication, data, services and users. Privacy matters because IoT collects data on people's activities, locations, environments." },
      { front: "IoT verticals on the slides", back: "Smart cities, smart energy, smart health care, smart buildings/homes, smart living, smart transportation, smart industry." },
    ],
    examples: [
      {
        title: "Match the characteristic",
        items: [
          "A fitness band losing Bluetooth when you leave your phone at home and reconnecting later: dynamic nature",
          "A city adding 5,000 more parking sensors without the system slowing down: scalability",
          "A smart home with a Zigbee bulb, a Wi-Fi camera and a Bluetooth lock working in one app: heterogeneity",
          "A thermostat deciding to switch the AC off because nobody is in the room: intelligence",
        ],
      },
      {
        title: "Applications with a Pakistani flavour",
        items: [
          "Smart city: Safe City camera networks in Lahore and Islamabad",
          "Smart agriculture: soil-moisture sensors deciding when to run a tube-well",
          "Smart home: rooftop water-tank level sensor that starts and stops the motor",
          "Smart transportation: GPS trackers on delivery bikes and intercity buses",
          "Smart healthcare: wearable that alerts family when an elderly patient's heart rate is abnormal",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain any five characteristics of IoT with examples.",
        solution: `1. Connectivity
   IoT devices must communicate with other devices, systems, networks
   or services. Without communication a sensor may collect data but
   cannot participate effectively in a distributed IoT system.
   e.g. a temperature sensor sending readings over Wi-Fi.

2. Sensing
   Sensors observe the physical environment (temperature, pressure,
   humidity). Sensing gives the system information about the world.

3. Data processing
   Raw data is often not directly useful.
   Raw data: 39.8 C -> Processed: "Temperature exceeds the threshold".
   Processing may happen on the device, at the edge or in the cloud.

4. Intelligence
   Software, rules, algorithms and data analysis make decisions.
   e.g. motion detected -> room occupied? -> control lighting.
   This is why IoT is more than simply connecting devices.

5. Actuation
   The system can perform actions, not only observe.
   Sensor detects abnormal condition -> processing -> actuator changes
   physical state. This connects the digital and physical worlds.

(Others: heterogeneity, scalability, dynamic nature, security and
privacy.)`,
      },
      {
        problem: "Differentiate between scalability and heterogeneity in IoT.",
        solution: `Scalability                          | Heterogeneity
-------------------------------------|-------------------------------------
About the NUMBER of devices          | About the VARIETY of devices
System must handle many more devices | Different devices, hardware, OS,
being added without unacceptable     | networks, technologies and apps must
degradation                          | cooperate in one system
e.g. a utility adding thousands of   | e.g. smart city with traffic cameras,
smart meters                         | vehicles, parking systems and
                                     | environmental sensors using
                                     | different technologies`,
      },
      {
        problem: "Why are security and privacy major concerns in IoT? What does IoT security need to protect?",
        solution: `IoT devices collect and exchange potentially sensitive information,
and many of them can also act on the physical world (locks, valves,
motors). A hacked device can leak data or cause physical harm.

Security involves protecting:
 - devices
 - communication
 - data
 - services
 - users

Privacy is important because IoT systems may collect information about
people's activities, locations or environments, e.g. a smart watch
knows where you go and how you sleep; a home camera sees inside your
house.`,
      },
      {
        problem: "List any six application areas of IoT and give one example for each.",
        solution: `1. Smart home: motion/temperature/lighting sensors, smart appliances,
   smart locks.
2. Smart healthcare: hospital patient monitoring, wearables sending
   heart rate alerts.
3. Smart agriculture: soil-moisture based automatic irrigation.
4. Smart city: traffic cameras, smart parking, smart street lights.
5. Smart transportation: vehicle tracking, traffic management.
6. Smart industry: industrial monitoring dashboards, machine health
   monitoring.
(Also: smart energy / smart grid, smart buildings, smart living.)`,
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // Lec 2 · Telecommunication & Networks
  // ---------------------------------------------------------------------------
  {
    id: "iot-telecom-networks",
    number: 4,
    chapter: LEC2,
    title: "Telecommunication, Data Communication and Networks",
    summary:
      "What telecommunication and data communication mean, the five components of a data communication system and its four effectiveness characteristics, what a network is, why we use networks, and the media and hardware that carry data.",
    content: `## Telecommunication

**Telecommunication** means communication at a distance. "Tele" is Greek for far. Telephone, telegraph, television and today's mobile networks are all telecommunication.

**Data communication** is the exchange of data between two devices through some form of transmission medium, such as a wire cable or radio waves. For data communication to happen, the devices must be part of a communication system made of hardware and software.

Every IoT system depends on this. A soil sensor in a field is useless if its reading can't get to the controller or the cloud.

## Five components of a data communication system

\`\`\`
              Protocol                       Protocol
   +--------+   rules   +------------------+   rules   +----------+
   | Sender | --------> | Transmission     | --------> | Receiver |
   +--------+  message  | medium           |  message  +----------+
                        +------------------+
\`\`\`

| Component | Meaning | IoT example |
|---|---|---|
| Message | The information (data) to be communicated: text, numbers, images, audio, video | "Temperature = 32 C" |
| Sender | The device that sends the message | The temperature sensor node |
| Receiver | The device that receives the message | Gateway or cloud server |
| Transmission medium | The physical path the message travels on | Wi-Fi radio waves, Ethernet cable |
| Protocol | The set of rules that governs the communication | MQTT, HTTP, Zigbee |

Without a protocol, two devices can be connected and still not understand each other, just as a Punjabi speaker and a Pashto speaker can sit together without a common language.

## How effective is the communication?

A data communication system is judged on four characteristics:

1. **Delivery**: data must reach the correct destination, and only the intended receiver.
2. **Accuracy**: data must arrive without errors. Altered data is unusable.
3. **Timeliness**: data must arrive on time. Late data is useless for real-time work like a fire alarm or live video.
4. **Jitter**: the variation in packet arrival time. Uneven delay in video or audio packets makes the playback choppy.

## What is a network?

From the slides: **a network is a set of devices (often called nodes) connected by communication links.** A node can be a computer, printer, or any other device capable of sending and/or receiving data generated by other nodes. In IoT, nodes include sensors, actuators, gateways and servers.

A network connects devices so they can communicate, exchange information and share resources.

## Uses of a network (slides)

| Use | Explanation |
|---|---|
| Simultaneous access | Many users can use the same shared data or programs stored on a central server (a file server). Managers assign access rights, e.g. some users read only, others read/write |
| Shared peripheral devices | Expensive devices like printers are shared. Print jobs from many users are stored on the server and printed in turn |
| Personal communication | Email, teleconferencing and videoconferencing |
| Easier backup | Administrators back up shared files on the server, and can use the network to back up users' PCs too |

## Network media and hardware

The **media** are the wires, cables and other means by which data travels from source to destination. The most common media are:

- twisted-pair cable
- coaxial cable
- fibre-optic cable
- wireless links (radio, infrared, microwave)

Each node uses a **network interface card (NIC)**, which connects to the medium and controls the flow of data. In an IoT board like the ESP32, the Wi-Fi radio built into the chip plays the NIC's role.

Networks move data by breaking it into small pieces called **packets**, and every network uses a **protocol**, a set of rules for how packets are formatted and transmitted.

## Common mistakes

- Treating telecommunication and data communication as the same thing. Telecommunication is any communication at a distance (voice, TV). Data communication is specifically about exchanging data between devices.
- Listing "network" as one of the five components. The five are message, sender, receiver, medium, protocol.
- Mixing up jitter and delay. Delay is how long a packet takes; jitter is how much that delay varies from packet to packet.

## How this shows up in the mid

Expect "Define telecommunication and data communication", "Explain the components of a data communication system with a diagram", and "What is a network? Write its uses". The four characteristics (delivery, accuracy, timeliness, jitter) make good MCQs.`,
    mcqs: [
      {
        q: "The word \"tele\" in telecommunication means:",
        options: ["data", "far", "wire", "fast"],
        answer: 1,
        explain: "Tele is Greek for far, so telecommunication is communication at a distance.",
      },
      {
        q: "Which is NOT one of the five components of a data communication system?",
        options: ["Message", "Protocol", "Router", "Transmission medium"],
        answer: 2,
        explain: "The five are message, sender, receiver, transmission medium and protocol.",
      },
      {
        q: "The set of rules that governs data communication is the:",
        options: ["protocol", "medium", "message", "packet"],
        answer: 0,
        explain: "A protocol is a set of rules that governs data communication.",
      },
      {
        q: "The variation in packet arrival time is called:",
        options: ["accuracy", "delivery", "bandwidth", "jitter"],
        answer: 3,
        explain: "Jitter is uneven delay between packets, which makes audio and video choppy.",
      },
      {
        q: "A fire alarm reading that arrives five minutes late fails which characteristic?",
        options: ["Timeliness", "Accuracy", "Delivery", "Jitter"],
        answer: 0,
        explain: "The data is correct and delivered, but too late to be useful.",
      },
      {
        q: "According to the slides, a network is:",
        options: [
          "a single computer with many programs",
          "a set of devices (nodes) connected by communication links",
          "only the internet",
          "a cable between two printers",
        ],
        answer: 1,
        explain: "That is the slide definition.",
      },
      {
        q: "Which device connects a node to the network medium and controls the flow of data?",
        options: ["Monitor", "Hard disk", "Network interface card (NIC)", "Power supply"],
        answer: 2,
        explain: "Each node uses a NIC.",
      },
      {
        q: "Sending multiple documents to one networked printer, stored on the server and printed in turn, is an example of:",
        options: ["easier backup", "personal communication", "simultaneous access", "shared peripheral devices"],
        answer: 3,
        explain: "Expensive peripherals like printers are shared over the network.",
      },
      {
        q: "Networks transmit data by breaking it into small pieces called:",
        options: ["frames of video", "packets", "tokens", "channels"],
        answer: 1,
        explain: "The LAN slide says data is broken into packets.",
      },
    ],
    fillBlanks: [
      {
        q: "Telecommunication means communication at a ___.",
        answer: "distance",
      },
      {
        q: "The five components of data communication are message, sender, receiver, transmission medium and ___.",
        answer: "protocol",
      },
      {
        q: "In a network, the connected devices are often called ___.",
        answer: "nodes",
        alt: ["node"],
      },
      {
        q: "The uneven variation in packet arrival time is called ___.",
        answer: "jitter",
      },
      {
        q: "A server that stores shared data files may be called a ___ server.",
        answer: "file",
      },
      {
        q: "Each node uses a network interface card, abbreviated ___.",
        answer: "NIC",
        alt: ["nic"],
      },
    ],
    trueFalse: [
      {
        q: "Telecommunication and data communication are exactly the same thing.",
        answer: false,
        explain: "Telecommunication is any communication at a distance; data communication is the exchange of data between devices over a medium.",
      },
      {
        q: "Accuracy means data must arrive without errors.",
        answer: true,
        explain: "Altered or corrupted data is unusable.",
      },
      {
        q: "Twisted-pair, coaxial and fibre-optic cables are all network media.",
        answer: true,
        explain: "Along with wireless links.",
      },
      {
        q: "Two devices connected by a cable can always understand each other, even without a common protocol.",
        answer: false,
        explain: "Without agreed rules (a protocol) they can exchange signals but not meaningful communication.",
      },
      {
        q: "Easier backup is one of the uses of a network listed on the slides.",
        answer: true,
        explain: "The four uses are simultaneous access, shared peripherals, personal communication and easier backup.",
      },
    ],
    flashcards: [
      { front: "Telecommunication", back: "Communication at a distance (tele = far). E.g. telephone, TV, mobile networks." },
      { front: "Data communication", back: "Exchange of data between two devices via some form of transmission medium (cable, radio)." },
      { front: "Five components of data communication", back: "Message, sender, receiver, transmission medium, protocol." },
      { front: "Four effectiveness characteristics", back: "Delivery, accuracy, timeliness, jitter." },
      { front: "Jitter", back: "Variation in packet arrival time. Uneven delay makes audio/video choppy." },
      { front: "Network (slide definition)", back: "A set of devices (nodes) connected by communication links." },
      { front: "Four uses of a network (slides)", back: "Simultaneous access, shared peripheral devices, personal communication, easier backup." },
      { front: "Common network media", back: "Twisted-pair cable, coaxial cable, fibre-optic cable, wireless links." },
      { front: "NIC", back: "Network interface card: connects the node to the media and controls the flow of data." },
    ],
    examples: [
      {
        title: "Five components in an IoT setting",
        items: [
          "Smart water tank: message = \"tank 85% full\", sender = ESP32 on the tank, receiver = phone app server, medium = Wi-Fi radio waves, protocol = MQTT over TCP/IP",
          "Hospital: message = patient heart rate, sender = bedside monitor, receiver = nurse station dashboard, medium = Ethernet cable, protocol = HTTP",
        ],
      },
      {
        title: "Which characteristic failed?",
        items: [
          "Sensor reading meant for Farm A shows up on Farm B's dashboard: delivery",
          "Reading of 32 C arrives as 82 C because of noise on the line: accuracy",
          "Smoke alarm alert arrives after the fire brigade is already there: timeliness",
          "Security camera feed freezes and jumps because packets arrive unevenly: jitter",
        ],
      },
    ],
    exercises: [
      {
        problem: "Define data communication. Explain the five components of a data communication system with a diagram.",
        solution: `Data communication is the exchange of data between two devices via
some form of transmission medium such as a wire cable or radio waves.

            Protocol                      Protocol
 +--------+  (rules)  +--------------+  (rules)  +----------+
 | Sender |---------->| Transmission |---------->| Receiver |
 +--------+  message  |   medium     |  message  +----------+
                      +--------------+

1. Message: the information to be sent (text, numbers, images, audio,
   video). e.g. "Temperature = 32 C".
2. Sender: device that sends the message, e.g. a sensor node.
3. Receiver: device that receives it, e.g. a gateway or server.
4. Transmission medium: physical path, e.g. twisted-pair cable,
   fibre, radio waves.
5. Protocol: the set of rules governing the communication. Without
   it, connected devices cannot understand each other.`,
      },
      {
        problem: "What are the four fundamental characteristics that decide the effectiveness of a data communication system?",
        solution: `1. Delivery: data must be delivered to the correct destination and
   received only by the intended device or user.
2. Accuracy: data must be delivered without errors; altered data is
   unusable.
3. Timeliness: data must arrive on time. Late data is useless for
   real-time uses (alarms, live video).
4. Jitter: the variation in packet arrival time. Uneven delay in
   audio/video packets gives poor, choppy quality.`,
      },
      {
        problem: "What is a network? Explain the uses of a network.",
        solution: `A network is a set of devices (nodes) connected by communication
links. A node can be a computer, printer or any device capable of
sending and/or receiving data generated by other nodes.

Uses:
1. Simultaneous access: many users use the same data/programs stored
   on a central (file) server. Managers assign access rights, e.g.
   read-only for some users, read/write for others.
2. Shared peripheral devices: expensive devices such as printers are
   shared. Print jobs are stored on the server and printed in turn.
3. Personal communication: email, teleconferencing, videoconferencing.
4. Easier backup: administrators back up shared files on the server
   and can back up users' PCs over the network.`,
      },
    ],
  },
  {
    id: "iot-connection-types-topologies",
    number: 5,
    chapter: LEC2,
    title: "Types of Network Connection, Topologies and Network Sizes",
    summary:
      "Point-to-point vs multipoint connections, the four LAN topologies (bus, star, ring, mesh) with their pros and cons, the IoT topologies from the communication-parameters slides, and LAN, WAN and GAN.",
    content: `## Types of network connection

A network is two or more devices connected through links. A **link** is the communication path that carries data from one device to another. There are two possible types of connection.

### Point-to-point

A **dedicated link** between exactly two devices. The entire capacity of the link is reserved for transmission between those two.

\`\`\`
[ Device A ] =================== [ Device B ]
              dedicated link
\`\`\`

Examples: a TV remote and the TV (infrared), a Bluetooth earbud paired with your phone, a cable between a sensor and its microcontroller.

### Multipoint (multidrop)

**More than two devices share a single link.** The link's capacity is shared, either:

- **spatially**: several devices use the link at the same time, each taking part of the capacity, or
- **temporally**: devices take turns (time-sharing).

\`\`\`
[ A ]      [ B ]      [ C ]
  |          |          |
==+==========+==========+====  shared link
\`\`\`

Examples: many Wi-Fi devices sharing one access point's channel, several sensors on one shared bus wire.

| Point-to-point | Multipoint |
|---|---|
| Exactly two devices | More than two devices |
| Dedicated link | Shared link |
| Whole capacity for the pair | Capacity shared spatially or by time |
| e.g. remote control to TV | e.g. many devices on one Wi-Fi channel |

## Physical topology

The topology is **the layout of the cables and devices that connect the nodes**. The slides give four for LANs.

### Bus

Each node is connected in series along a single wire (the backbone).

\`\`\`
 [A]   [B]   [C]   [D]
  |     |     |     |
==+=====+=====+=====+==  backbone
\`\`\`

- Advantages: works well for small networks, relatively cheap, easy to add to.
- Disadvantages: management costs can be high, congestion with heavy traffic, and a break in the backbone stops the whole network.

### Ring

Each node connects to its two nearest nodes, so the whole network forms a circle. Data can be passed by **token passing**. It is an active topology: each workstation retransmits the data it receives.

- Advantages: easier to manage, easier to find a faulty node or cable, good for long distances on a LAN, reliable communication.
- Disadvantages: expensive, needs more cable and equipment at the start, not as widely used as bus, fewer equipment options and fewer options for expansion to high-speed communication.

### Star

Every node connects through a **central device** (hub or switch).

\`\`\`
      [A]   [B]
        \\   /
 [E] -- [HUB] -- [C]
          |
         [D]
\`\`\`

- Advantages: good option for modern networks, low startup cost, easy to manage, room for expansion, most popular topology with a wide variety of equipment.
- Disadvantages: the hub is a **single point of failure**, and it needs more cable than a bus.

### Mesh

Each node has a separate connection to every other node.

- Advantages: multiple links, so if one route is blocked another can be used; privacy and security because each message travels on a dedicated link; easy troubleshooting; performance not affected by heavy load.
- Disadvantages: very expensive because of the large number of cables and I/O ports, and difficult to install.

For a fully connected mesh of n nodes, you need **n(n - 1)/2 links** and each node needs **n - 1 ports**. With 5 nodes: 5 x 4 / 2 = 10 links, and each node has 4 ports.

## Topologies in IoT

The IoT communication-parameters slides list the topologies IoT systems use:

| Topology | How it works | IoT example |
|---|---|---|
| Star | Devices talk through a central node | Wi-Fi devices through one router; LoRaWAN sensors to a gateway |
| Mesh | Nodes communicate with multiple other nodes, so messages can hop | Zigbee smart bulbs relaying for each other |
| Point-to-point | Two nodes talk directly | Fitness band to phone over Bluetooth |
| Point-to-multipoint | One central node talks to many nodes | One gateway polling 50 field sensors |

In IoT, the mesh is usually wireless, so the "too many cables" problem goes away. Nodes relay each other's messages, which extends range and survives one node failing.

## How networks are structured by size

| Type | Coverage | Notes from slides |
|---|---|---|
| LAN (Local Area Network) | Computers relatively near one another: a room, building, campus | Connected by cable, infrared or small transmitters. Uses a protocol for packets |
| WAN (Wide Area Network) | Two or more LANs connected together, possibly many miles apart | Uses leased high-speed phone lines or wireless links such as satellites. LANs are joined by bridges, routers or gateways |
| GAN (Global Area Network) | Worldwide | The internet is a heterogeneous network of many WANs and LANs, organised hierarchically |

Textbooks also mention a **MAN** (metropolitan area network, about a city) and a **PAN** (personal area network, a few metres around one person, like Bluetooth between your phone and watch).

## Common mistakes

- Confusing connection type with topology. Point-to-point/multipoint describes one link; topology describes the layout of the whole network.
- Saying a star's failure point is "any node". Only the hub is the single point of failure; one dead node doesn't affect the rest.
- Using n(n + 1)/2 for mesh links. The formula is n(n - 1)/2.

## How this shows up in the mid

"Differentiate between point-to-point and multipoint connections" and "Explain any two topologies with diagrams, advantages and disadvantages" are standard. A numerical like "how many links does a fully connected mesh of 6 devices need?" (6 x 5 / 2 = 15) is an easy MCQ.`,
    mcqs: [
      {
        q: "A connection in which the entire capacity of a dedicated link is reserved for two devices is:",
        options: ["multipoint", "point-to-point", "broadcast", "ring"],
        answer: 1,
        explain: "Point-to-point means a dedicated link between exactly two devices.",
      },
      {
        q: "In a multipoint connection, the link capacity is shared:",
        options: [
          "only spatially",
          "never",
          "spatially or temporally",
          "only by the hub",
        ],
        answer: 2,
        explain: "Devices either use the link at the same time (spatial) or take turns (temporal).",
      },
      {
        q: "Which topology has a single point of failure at the central device?",
        options: ["Star", "Mesh", "Ring", "Bus"],
        answer: 0,
        explain: "If the hub fails, every node loses connection.",
      },
      {
        q: "How many links does a fully connected mesh of 6 devices need?",
        options: ["30", "12", "36", "15"],
        answer: 3,
        explain: "n(n - 1)/2 = 6 x 5 / 2 = 15.",
      },
      {
        q: "Token passing is a common method for sending data in which topology?",
        options: ["Bus", "Ring", "Star", "Point-to-point"],
        answer: 1,
        explain: "The ring slides mention token passing.",
      },
      {
        q: "Which topology is described on the slides as the most popular, with a wide variety of equipment?",
        options: ["Mesh", "Bus", "Ring", "Star"],
        answer: 3,
        explain: "Star: low startup cost, easy to manage and the most popular in use.",
      },
      {
        q: "Zigbee smart bulbs that relay messages for each other form which topology?",
        options: ["Mesh", "Bus", "Point-to-point", "Ring"],
        answer: 0,
        explain: "Nodes communicate with multiple other nodes and messages hop between them.",
      },
      {
        q: "A WAN is best described as:",
        options: [
          "computers in one room",
          "two or more LANs connected together, possibly far apart",
          "a single cable",
          "a Bluetooth link",
        ],
        answer: 1,
        explain: "The slides define a WAN as two or more LANs connected together, often many miles apart.",
      },
      {
        q: "Which is a disadvantage of mesh topology?",
        options: [
          "One blocked route stops all traffic",
          "Poor privacy",
          "Large amount of cabling and I/O ports makes it expensive",
          "Hard to troubleshoot",
        ],
        answer: 2,
        explain: "Mesh is reliable and private but expensive and hard to install.",
      },
    ],
    fillBlanks: [
      {
        q: "A connection where more than two devices share a single link is called ___.",
        answer: "multipoint",
        alt: ["multidrop", "multi-point"],
      },
      {
        q: "The layout of cables and devices connecting the nodes is the network's ___.",
        answer: "topology",
      },
      {
        q: "A fully connected mesh with n nodes needs n(n - 1)/2 ___.",
        answer: "links",
        alt: ["link", "cables"],
      },
      {
        q: "In a ___ topology, each node is connected in series along a single wire.",
        answer: "bus",
      },
      {
        q: "In a mesh of 5 nodes, each node needs ___ ports.",
        answer: "4",
        alt: ["four"],
      },
      {
        q: "Two or more LANs connected together form a ___.",
        answer: "WAN",
        alt: ["wan", "wide area network"],
      },
    ],
    trueFalse: [
      {
        q: "In a star topology, the failure of one ordinary node brings the whole network down.",
        answer: false,
        explain: "Only the hub is a single point of failure. Other nodes keep working if one node fails.",
      },
      {
        q: "A Bluetooth earbud paired with a phone is an example of a point-to-point connection.",
        answer: true,
        explain: "Two devices on a dedicated link.",
      },
      {
        q: "Bus topology is relatively inexpensive and works well for small networks.",
        answer: true,
        explain: "Those are the advantages on the slides.",
      },
      {
        q: "Point-to-point and multipoint describe the physical layout of the whole network.",
        answer: false,
        explain: "They describe the type of a connection (link). Layout of the whole network is topology.",
      },
      {
        q: "Mesh topology offers security because every message travels along a dedicated link.",
        answer: true,
        explain: "Listed as an advantage on the mesh slide.",
      },
      {
        q: "The internet is a heterogeneous network made of many WANs and LANs.",
        answer: true,
        explain: "The slides show it as a hierarchy of WANs and LANs.",
      },
    ],
    flashcards: [
      { front: "Point-to-point connection", back: "Dedicated link between exactly two devices; whole capacity reserved for them. e.g. remote to TV, earbud to phone." },
      { front: "Multipoint connection", back: "More than two devices share one link; capacity shared spatially (at once) or temporally (taking turns)." },
      { front: "Topology", back: "The layout of the cables and devices that connect the nodes." },
      { front: "Bus: pros / cons", back: "Pros: cheap, good for small networks, easy to add. Cons: high management cost, congestion, backbone break stops everything." },
      { front: "Ring: main facts", back: "Each node connects to two neighbours forming a circle; token passing; active topology. Easy fault finding, but expensive and less used." },
      { front: "Star: pros / cons", back: "Pros: cheap to start, easy to manage, expandable, most popular. Cons: hub is single point of failure, more cable than bus." },
      { front: "Mesh: links and ports", back: "n(n - 1)/2 links, n - 1 ports per node. Reliable and secure but expensive and hard to install." },
      { front: "IoT topologies (slides)", back: "Star, mesh, point-to-point, point-to-multipoint." },
      { front: "LAN / WAN / GAN", back: "LAN: nearby computers. WAN: two or more LANs connected over distance. GAN: global, e.g. the internet." },
    ],
    examples: [
      {
        title: "Mesh link calculations",
        items: [
          "4 nodes: 4 x 3 / 2 = 6 links, 3 ports each",
          "5 nodes: 5 x 4 / 2 = 10 links, 4 ports each",
          "8 nodes: 8 x 7 / 2 = 28 links, 7 ports each",
        ],
      },
      {
        title: "Name the topology",
        items: [
          "Home router with phone, laptop, smart TV and camera all connected to it: star",
          "Zigbee bulbs in a house relaying commands through each other: mesh",
          "LoRaWAN gateway on a tower receiving from 200 soil sensors across farms: point-to-multipoint (star)",
          "Smart watch paired to one phone: point-to-point",
        ],
      },
    ],
    exercises: [
      {
        problem: "Differentiate between point-to-point and multipoint connections with diagrams.",
        solution: `Point-to-point:
 [A] ==================== [B]
        dedicated link

Multipoint:
 [A]     [B]     [C]
  |       |       |
==+=======+=======+==   shared link

Point-to-point                     | Multipoint
-----------------------------------|-----------------------------------
Exactly two devices                | More than two devices
Dedicated link                     | Single shared link
Whole capacity reserved for the    | Capacity shared spatially (at the
two devices                        | same time) or temporally (turns)
e.g. TV remote and TV, Bluetooth   | e.g. many devices on one Wi-Fi
earbud and phone                   | channel, sensors on one bus wire`,
      },
      {
        problem: "Explain star and mesh topologies with diagrams. Give advantages and disadvantages of each.",
        solution: `STAR: every node connects through a central device (hub/switch).

        [A]   [B]
          \\   /
  [E] -- [HUB] -- [C]
            |
           [D]

Advantages: good for modern networks, low startup cost, easy to
manage, easy expansion, most popular, wide variety of equipment.
Disadvantages: hub is a single point of failure; needs more cable
than bus.

MESH: each node has a separate link to every other node.

   [A]-----[B]
    | \\   / |
    |  \\ /  |
    |  / \\  |
    | /   \\ |
   [D]-----[C]

Advantages: multiple routes, so if one is blocked another is used;
privacy/security (dedicated links); easy troubleshooting;
performance not affected by heavy load.
Disadvantages: very expensive (many cables and I/O ports); difficult
to install.
Links needed = n(n - 1)/2; ports per node = n - 1.`,
      },
      {
        problem: "A building has 7 IoT controllers. If they are connected in a fully connected wired mesh, how many cables and how many ports per controller are needed? Why do IoT systems prefer wireless mesh?",
        solution: `Links = n(n - 1)/2 = 7 x 6 / 2 = 21 cables
Ports per controller = n - 1 = 6

A wired mesh grows quickly in cost and installation effort. In a
wireless mesh (e.g. Zigbee) there are no cables: each node relays
messages for its neighbours, which extends range and lets traffic go
around a failed node, while avoiding the cabling cost.`,
      },
      {
        problem: "Explain LAN, WAN and GAN.",
        solution: `LAN (Local Area Network): computers located relatively near one
another (room, building, campus). Nodes connected by cable, infrared
link or small transmitters. Data is broken into packets and a
protocol governs how packets are configured and transmitted.

WAN (Wide Area Network): two or more LANs connected together; the
LANs can be many miles apart. Uses leased high-speed phone lines or
wireless links such as satellites. LANs are connected using bridges,
routers or gateways.

GAN (Global Area Network): a network spanning the world. The
internet is a heterogeneous network of many WANs and LANs organised
in a hierarchy.`,
      },
    ],
  },
  {
    id: "iot-data-flow-direction",
    number: 6,
    chapter: LEC2,
    title: "Data Flow Direction: Simplex, Half-Duplex and Full-Duplex",
    summary:
      "The three transmission modes, how each uses the channel, everyday and IoT examples of each, and how to pick the right mode for an IoT device.",
    content: `## Data flow between two devices

When two devices communicate, data can flow in one of three ways. This is called the **direction of data flow** or the **transmission mode**.

## Simplex

Communication is **unidirectional**, like a one-way street. Only one of the two devices can transmit; the other can only receive.

\`\`\`
[ Sender ] ----------------> [ Receiver ]
           one direction only
\`\`\`

- The sender can use the entire capacity of the channel.
- Everyday examples: keyboard to computer (traditional keyboard), computer to monitor, FM radio and TV broadcast.
- IoT examples: a transmit-only temperature beacon that broadcasts readings and never listens; a wireless doorbell button sending to the chime.

## Half-duplex

Each device **can both transmit and receive, but not at the same time**. When one sends, the other only receives, and then they swap.

\`\`\`
[ A ] ----------------> [ B ]    (time 1: A sends)
[ A ] <---------------- [ B ]    (time 2: B sends)
\`\`\`

- The entire capacity of the channel goes to whichever device is transmitting at that moment.
- Everyday example: walkie-talkies. You press the button to talk and release it to listen, and you say "over" when you finish.
- IoT examples: many low-power radios such as Zigbee and LoRa nodes work this way, because one radio on one channel can't send and listen at the same moment. Classic Wi-Fi on a channel is also half-duplex.

## Full-duplex

**Both devices can transmit and receive at the same time.** Also simply called duplex.

\`\`\`
[ A ] ----------------> [ B ]
[ A ] <---------------- [ B ]    (at the same time)
\`\`\`

- The channel capacity is shared between the two directions. This is done with two physically separate paths (one to send, one to receive) or by dividing the capacity between signals going in both directions.
- Everyday example: a telephone or mobile call, where both people can talk and hear at once.
- IoT examples: switched Ethernet links; a WebSocket connection between a live IoT dashboard and its server, where sensor updates flow down while commands go up.

## Comparison

| Feature | Simplex | Half-duplex | Full-duplex |
|---|---|---|---|
| Direction | One way only | Both ways, one at a time | Both ways at the same time |
| Who can send | Only one fixed device | Either, taking turns | Both together |
| Channel capacity | All used in one direction | All used by the current sender | Shared between both directions |
| Speed of conversation | n/a (no reply) | Slower, must wait for turn | Fastest |
| Everyday example | TV broadcast, keyboard to computer | Walkie-talkie | Telephone call |
| IoT example | Transmit-only sensor beacon | Zigbee / LoRa node radio | WebSocket dashboard link, switched Ethernet |

## Picking a mode for an IoT device

- A battery sensor that only reports values and never needs commands can be simplex. It saves power because its radio never has to listen.
- A device that sends data and sometimes gets a command back (a smart irrigation valve) needs at least half-duplex.
- A real-time control or monitoring link where both sides talk constantly (a remote-controlled robot, a live dashboard) is best as full-duplex.

## Common mistakes

- Saying half-duplex is "one-way". It is two-way, just not at the same instant.
- Giving a walkie-talkie as full-duplex. It is the textbook half-duplex example.
- Thinking full-duplex doubles the cable for free. The capacity is shared between the two directions, or it needs two separate paths.

## How this shows up in the mid

Almost always as "Explain simplex, half-duplex and full-duplex with examples" or a three-column difference table. Draw the arrows, give one everyday and one IoT example each, and you're done.`,
    mcqs: [
      {
        q: "In simplex mode, communication is:",
        options: ["two-way at the same time", "two-way, one at a time", "unidirectional", "impossible"],
        answer: 2,
        explain: "Only one device sends; the other only receives.",
      },
      {
        q: "A walkie-talkie is the standard example of:",
        options: ["half-duplex", "simplex", "full-duplex", "multipoint broadcast"],
        answer: 0,
        explain: "Both sides can talk, but only one at a time.",
      },
      {
        q: "Which mode lets both devices transmit and receive simultaneously?",
        options: ["Simplex", "Half-duplex", "Point-to-point", "Full-duplex"],
        answer: 3,
        explain: "Full-duplex, e.g. a telephone call.",
      },
      {
        q: "A traditional keyboard sending data to a computer is an example of:",
        options: ["full-duplex", "simplex", "half-duplex", "mesh"],
        answer: 1,
        explain: "Data only goes from keyboard to computer.",
      },
      {
        q: "In half-duplex, the entire channel capacity is:",
        options: [
          "split equally all the time",
          "used by whichever device is transmitting at that time",
          "never used",
          "reserved for the receiver",
        ],
        answer: 1,
        explain: "Devices take turns, so the current sender gets the whole channel.",
      },
      {
        q: "In full-duplex, how is the channel capacity handled?",
        options: [
          "It is shared between both directions, or two separate paths are used",
          "Only one device ever uses it",
          "Devices take turns",
          "It is doubled automatically",
        ],
        answer: 0,
        explain: "Two physically separate links, or capacity divided between the two directions.",
      },
      {
        q: "A WebSocket link where a dashboard receives sensor updates while also sending commands works as:",
        options: ["simplex", "half-duplex", "full-duplex", "broadcast only"],
        answer: 2,
        explain: "Both sides send at the same time over a persistent connection.",
      },
      {
        q: "A battery sensor beacon that only broadcasts readings and never listens is:",
        options: ["full-duplex", "half-duplex", "exclusive pair", "simplex"],
        answer: 3,
        explain: "Data flows one way only.",
      },
      {
        q: "Which statement about half-duplex is correct?",
        options: [
          "Data flows in one direction only",
          "Both devices can send, but not at the same time",
          "Both devices always send at once",
          "It needs a hub",
        ],
        answer: 1,
        explain: "Half-duplex is two-way, alternating.",
      },
    ],
    fillBlanks: [
      {
        q: "A TV broadcast is an example of ___ transmission.",
        answer: "simplex",
      },
      {
        q: "Walkie-talkies use ___ mode.",
        answer: "half-duplex",
        alt: ["half duplex", "halfduplex"],
      },
      {
        q: "A telephone call is an example of ___ mode.",
        answer: "full-duplex",
        alt: ["full duplex", "fullduplex", "duplex"],
      },
      {
        q: "The direction of data flow between two devices is also called the transmission ___.",
        answer: "mode",
      },
      {
        q: "In simplex mode, communication is ___, like a one-way street.",
        answer: "unidirectional",
        alt: ["one-way", "one way"],
      },
    ],
    trueFalse: [
      {
        q: "Half-duplex communication is one-way only.",
        answer: false,
        explain: "It is two-way, but only one side transmits at a time.",
      },
      {
        q: "In simplex mode the sender can use the entire capacity of the channel.",
        answer: true,
        explain: "There is no traffic in the other direction.",
      },
      {
        q: "A walkie-talkie is a full-duplex device.",
        answer: false,
        explain: "You press to talk and release to listen, so it is half-duplex.",
      },
      {
        q: "Full-duplex can be achieved with two physically separate transmission paths.",
        answer: true,
        explain: "One path for each direction, or a shared channel with capacity divided.",
      },
      {
        q: "A transmit-only sensor saves power because its radio never has to listen.",
        answer: true,
        explain: "That is the main reason some battery beacons are simplex.",
      },
    ],
    flashcards: [
      { front: "Simplex", back: "One direction only (unidirectional). Sender uses whole channel. e.g. keyboard to computer, TV/radio broadcast." },
      { front: "Half-duplex", back: "Both can send and receive, but not at the same time. Current sender uses whole channel. e.g. walkie-talkie." },
      { front: "Full-duplex", back: "Both send and receive at the same time. Capacity shared between directions or two separate paths. e.g. telephone." },
      { front: "IoT simplex example", back: "Transmit-only temperature beacon; wireless doorbell button to chime." },
      { front: "IoT half-duplex example", back: "Zigbee or LoRa node radio: one radio on one channel can't send and listen at once." },
      { front: "IoT full-duplex example", back: "WebSocket link between live dashboard and server; switched Ethernet." },
      { front: "Which mode is fastest for conversation?", back: "Full-duplex: no waiting for a turn." },
      { front: "Common mistake about half-duplex", back: "Calling it one-way. It's two-way, alternating." },
    ],
    examples: [
      {
        title: "Classify the data flow",
        items: [
          "FM radio station to your car radio: simplex",
          "Police walkie-talkie: half-duplex",
          "WhatsApp voice call: full-duplex",
          "CCTV camera that only streams video to a recorder: simplex",
          "Smart irrigation valve that reports status and occasionally receives open/close commands over LoRa: half-duplex",
          "Remote-controlled inspection robot sending live video while receiving steering commands: full-duplex",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain the three types of data flow (transmission modes) with diagrams and examples.",
        solution: `1. Simplex: unidirectional. Only one device transmits; the other
   only receives. The sender uses the full channel capacity.

   [Sender] ---------------> [Receiver]

   e.g. keyboard to computer, monitor, TV/radio broadcast;
   IoT: transmit-only sensor beacon.

2. Half-duplex: both devices can transmit and receive, but not at
   the same time. The current sender uses the full channel.

   [A] ---------------> [B]   (time 1)
   [A] <--------------- [B]   (time 2)

   e.g. walkie-talkie; IoT: Zigbee/LoRa node radio.

3. Full-duplex: both devices transmit and receive simultaneously.
   Capacity is shared between the two directions, or two separate
   paths are used.

   [A] ---------------> [B]
   [A] <--------------- [B]   (same time)

   e.g. telephone call; IoT: WebSocket dashboard link, switched
   Ethernet.`,
      },
      {
        problem: "Differentiate between simplex, half-duplex and full-duplex in tabular form.",
        solution: `Feature        | Simplex          | Half-duplex       | Full-duplex
---------------|------------------|-------------------|-------------------
Direction      | One way only     | Both, one at a    | Both at the same
               |                  | time              | time
Who sends      | One fixed device | Either, in turns  | Both together
Channel use    | Whole channel,   | Whole channel to  | Shared between
               | one direction    | current sender    | directions / 2 paths
Example        | TV broadcast,    | Walkie-talkie     | Telephone
               | keyboard         |                   |
IoT example    | Sensor beacon    | Zigbee/LoRa node  | WebSocket dashboard`,
      },
      {
        problem: "An IoT engineer is designing (a) a soil sensor that only reports moisture every hour, (b) a smart valve that reports status and receives open/close commands, (c) a remote-controlled robot streaming live video. Suggest a transmission mode for each with a reason.",
        solution: `(a) Simplex. The sensor only sends; it never needs commands. Its
    radio never listens, which saves battery.

(b) Half-duplex (at least). It must send status and receive commands,
    but not at the same instant, so taking turns on one channel is
    enough and keeps the radio simple.

(c) Full-duplex. Video must flow to the operator while steering
    commands flow to the robot at the same time; waiting for turns
    would make control laggy.`,
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // Lec 3 · Physical Design of IoT
  // ---------------------------------------------------------------------------
  {
    id: "iot-physical-design-sensors-actuators",
    number: 7,
    chapter: LEC3,
    title: "Physical Design of IoT: Sensors and Actuators",
    summary:
      "What physical design means, the types of sensors from the notes with their example parts (LM35, DHT11/DHT22, LDR, PIR), the other sensors and actuators on the slides, and the sensor vs actuator comparison.",
    content: `## What is physical design?

From the notes: **the physical design of IoT describes the actual physical components and devices that participate in an IoT system and how they interact with the physical environment.**

In simple words (also from the notes):

\`\`\`
Physical design = what hardware exists in an IoT system
                  and how that hardware senses, processes,
                  communicates and acts.
\`\`\`

The physical design covers the "things" themselves: sensors, actuators, controllers, communication interfaces and gateways. This topic does sensors and actuators; the next one does the rest.

## Types of sensors

Sensors can be classified according to what they measure. The notes give five types with real part names.

| Type | Example parts | Used in |
|---|---|---|
| Temperature sensors | LM35, thermistor | Weather stations, air conditioners |
| Humidity sensors | DHT11, DHT22 | Agriculture, weather monitoring |
| Light sensors | LDR (light dependent resistor) | Smart lighting: decide if surroundings are bright or dark |
| Motion sensors | PIR (passive infrared) sensor | Security systems, automatic lights |
| Pressure sensors | e.g. barometric pressure modules | Industrial monitoring, automotive systems |

A few facts about the parts that help in MCQs:

- **LM35** gives an analog voltage that rises 10 mV for every 1 C.
- **DHT11 and DHT22** each measure both temperature and humidity. The DHT22 is the more accurate one with a wider range.
- An **LDR**'s resistance drops as light falls on it, so the circuit can tell bright from dark.
- A **PIR** sensor detects the infrared (body heat) given off by people and animals moving in front of it. "Passive" means it only receives infrared; it doesn't emit any.

The slides add more sensor types: proximity, ultrasonic (distance), vibration, tilt, level (liquid in tanks), touch, soil moisture, gyroscope, gas, smoke, flow and infrared. The architecture slides give uses for some of them:

- temperature: household water heating, refrigerators, computers, vehicles
- humidity: keeping the right humidity level when making certain products
- pressure: measuring the flow of air or liquids
- level: amount of liquid in tanks or gas in the air (cars, fridges, homes)
- infrared: detecting motion, mainly for security

## Actuators

An actuator converts a control signal into a physical action. The slides show motor, valve, pump, LED and speaker; the notes add relay, buzzer and smart lock. Control signals for actuators can be analog or digital, in the form of a voltage or current.

## Sensors vs actuators

This table is from the notes.

| Sensor | Actuator |
|---|---|
| Observes the environment | Acts on the environment |
| Input device | Output / action device |
| Converts a physical quantity into a signal | Converts a control signal into a physical action |
| e.g. humidity sensor, motion sensor | e.g. water valve, door lock |

The notes' memory trick:

\`\`\`
Sensors   = eyes / ears of the IoT system
Actuators = hands of the IoT system
\`\`\`

## Putting it together: smart room

A PIR sensor notices someone entering an office at night. An LDR says the room is dark. The controller switches on a relay (actuator) that powers the lights. If the DHT22 reads above 28 C, a second relay starts the fan. Three sensors and two actuators: that's the physical side of a small IoT system.

## Common mistakes

- Calling the PIR an active sensor. It is passive: it only picks up infrared from warm bodies.
- Writing the DHT11 as a temperature-only sensor. It gives humidity and temperature.
- Listing LED, buzzer or relay under sensors. They are actuators (outputs).

## How this shows up in the mid

"What is the physical design of IoT?" (write the definition and the simple-words line), "Explain types of sensors with examples" (use the table with part names), and "Differentiate between sensors and actuators" are all likely.`,
    mcqs: [
      {
        q: "The physical design of IoT describes:",
        options: [
          "how software components exchange messages",
          "the actual physical components and devices in an IoT system and how they interact with the physical environment",
          "the business model of an IoT company",
          "only the cloud servers",
        ],
        answer: 1,
        explain: "That is the notes' definition. The software side is logical design.",
      },
      {
        q: "Which part is given in the notes as a temperature sensor?",
        options: ["LM35", "PIR", "LDR", "Relay"],
        answer: 0,
        explain: "LM35 and the thermistor are the temperature examples.",
      },
      {
        q: "DHT11 and DHT22 are mainly used as:",
        options: ["motion sensors", "light sensors", "humidity (and temperature) sensors", "actuators"],
        answer: 2,
        explain: "The notes list them under humidity sensors; both also report temperature.",
      },
      {
        q: "A smart lighting system decides whether the surroundings are bright or dark using a(n):",
        options: ["PIR sensor", "LM35", "pressure sensor", "LDR"],
        answer: 3,
        explain: "Light dependent resistor: its resistance changes with light.",
      },
      {
        q: "A PIR sensor is mostly used in:",
        options: [
          "weather stations",
          "security systems and automatic lights",
          "measuring soil moisture",
          "measuring liquid pressure",
        ],
        answer: 1,
        explain: "PIR detects motion of warm bodies.",
      },
      {
        q: "Which is an actuator?",
        options: ["Water valve", "Humidity sensor", "Motion sensor", "Thermistor"],
        answer: 0,
        explain: "A valve acts on the environment. The others observe it.",
      },
      {
        q: "In the notes' memory trick, actuators are the ___ of the IoT system.",
        options: ["eyes", "brain", "ears", "hands"],
        answer: 3,
        explain: "Sensors are eyes/ears, actuators are hands.",
      },
      {
        q: "Pressure sensors are used in:",
        options: [
          "smart lighting",
          "fitness trackers only",
          "industrial monitoring and automotive systems",
          "TV remotes",
        ],
        answer: 2,
        explain: "That is the use listed in the notes.",
      },
      {
        q: "The LM35 output rises by about how much for every 1 C rise in temperature?",
        options: ["1 mV", "10 mV", "100 mV", "1 V"],
        answer: 1,
        explain: "The LM35 has a 10 mV per degree Celsius scale factor.",
      },
    ],
    fillBlanks: [
      {
        q: "LDR stands for light ___ resistor.",
        answer: "dependent",
      },
      {
        q: "PIR stands for ___ infrared.",
        answer: "passive",
      },
      {
        q: "Sensors are input devices; actuators are ___ devices.",
        answer: "output",
        alt: ["action", "output/action"],
      },
      {
        q: "DHT11 and DHT22 are ___ sensors used in agriculture and weather monitoring.",
        answer: "humidity",
      },
      {
        q: "Physical design = what ___ exists in an IoT system and how it senses, processes, communicates and acts.",
        answer: "hardware",
      },
    ],
    trueFalse: [
      {
        q: "A PIR sensor emits infrared light to detect motion.",
        answer: false,
        explain: "It is passive: it only detects infrared given off by warm bodies.",
      },
      {
        q: "Sensors can be classified according to what they measure.",
        answer: true,
        explain: "Temperature, humidity, light, motion, pressure and so on.",
      },
      {
        q: "A buzzer and a relay are sensors.",
        answer: false,
        explain: "Both are actuators.",
      },
      {
        q: "A sensor converts a physical quantity into a signal; an actuator converts a control signal into a physical action.",
        answer: true,
        explain: "That is the core row of the comparison table.",
      },
      {
        q: "Control signals for actuators can be analog or digital, as a voltage or current.",
        answer: true,
        explain: "Stated on the Components of IoT slides.",
      },
    ],
    flashcards: [
      { front: "Physical design of IoT", back: "The actual physical components and devices in an IoT system and how they interact with the physical environment (what hardware exists and how it senses, processes, communicates, acts)." },
      { front: "Temperature sensor examples", back: "LM35 (10 mV per C), thermistor. Used in weather stations, air conditioners." },
      { front: "Humidity sensor examples", back: "DHT11, DHT22 (also measure temperature). Used in agriculture, weather monitoring." },
      { front: "Light sensor example", back: "LDR (light dependent resistor): smart lighting decides bright or dark." },
      { front: "Motion sensor example", back: "PIR (passive infrared): security systems, automatic lights." },
      { front: "Pressure sensor uses", back: "Industrial monitoring, automotive systems, measuring flow of air or liquids." },
      { front: "Actuator examples", back: "Motor, valve, pump, relay, buzzer, LED, speaker, smart lock." },
      { front: "Sensor vs actuator (memory trick)", back: "Sensors = eyes/ears; actuators = hands of the IoT system." },
    ],
    examples: [
      {
        title: "Pick the sensor",
        items: [
          "Turn on the porch light when it gets dark: LDR",
          "Alarm when someone walks into the shop after closing: PIR",
          "Greenhouse in Murree that needs humidity kept in range: DHT22",
          "Cold-storage room for medicines: LM35 or a thermistor",
          "Monitor oil pressure in a factory pipeline: pressure sensor",
          "Water left in a rooftop tank: ultrasonic or level sensor",
        ],
      },
    ],
    exercises: [
      {
        problem: "What is meant by the physical design of IoT? Explain the types of sensors with examples.",
        solution: `Physical design of IoT: the actual physical components and devices
that participate in an IoT system and how they interact with the
physical environment.
In simple words: what hardware exists in an IoT system and how that
hardware senses, processes, communicates and acts.

Types of sensors (classified by what they measure):
1. Temperature sensors: LM35, thermistor.
   Used in weather stations, air conditioners.
2. Humidity sensors: DHT11, DHT22.
   Used in agriculture, weather monitoring.
3. Light sensors: LDR (light dependent resistor).
   A smart lighting system uses an LDR to tell bright from dark.
4. Motion sensors: PIR (passive infrared) sensor.
   Used in security systems, automatic lights.
5. Pressure sensors.
   Used in industrial monitoring, automotive systems.
(Slides also show proximity, ultrasonic, level, soil moisture, gas,
touch, vibration, tilt, gyroscope sensors.)`,
      },
      {
        problem: "Differentiate between sensors and actuators.",
        solution: `Sensor                             | Actuator
-----------------------------------|-----------------------------------
Observes the environment           | Acts on the environment
Input device                       | Output / action device
Converts a physical quantity into  | Converts a control signal into a
a signal                           | physical action
e.g. humidity sensor, motion       | e.g. water valve, door lock, motor,
sensor, LM35, LDR                  | relay, buzzer

Sensors = eyes / ears of the IoT system
Actuators = hands of the IoT system`,
      },
      {
        problem: "Design the physical components of an automatic room-lighting and fan system. Name the sensors and actuators and explain what each does.",
        solution: `Sensors:
 - PIR sensor: detects that a person has entered (motion).
 - LDR: tells whether the room is dark.
 - DHT11/DHT22 (or LM35): measures room temperature.

Controller: e.g. ESP32 or Arduino reads the sensors and applies rules:
 if motion AND dark -> lights ON
 if motion AND temperature > 28 C -> fan ON
 if no motion for 10 minutes -> everything OFF

Actuators:
 - Relay 1: switches the lights.
 - Relay 2: switches the fan.

Flow: PIR/LDR/DHT (sense) -> controller (process/decide)
      -> relays (act) -> lights/fan change the room.`,
      },
    ],
  },
  {
    id: "iot-physical-design-devices-gateways",
    number: 8,
    chapter: LEC3,
    title: "Controllers, Embedded Systems, Communication Interfaces and Gateways",
    summary:
      "The rest of the physical design: what the controller does (Arduino, ESP32, Raspberry Pi, STM32), embedded systems, the communication interface, why we need IoT gateways, and the complete physical architecture with the sense-process-communicate-decide-act sequence.",
    content: `## Controller / processing unit

The sensor generates data, but something must process it. That is the job of the **controller** or **processing unit**. Common examples from the notes: **Arduino, ESP32, Raspberry Pi, STM32**.

The controller can:

1. receive sensor data
2. process the data
3. apply programmed rules
4. make a decision
5. control an actuator
6. communicate with other devices

| Board | What it is | Typical IoT use |
|---|---|---|
| Arduino (e.g. Uno) | Microcontroller board, easy to program | Reading sensors, driving relays and motors in simple projects |
| ESP32 | Low-cost microcontroller with built-in Wi-Fi and Bluetooth | Sensor nodes that send data straight to the cloud |
| Raspberry Pi | Small single-board computer that runs Linux | Local gateway, camera processing, small server |
| STM32 | Family of ARM Cortex-M microcontrollers | Industrial and low-power products |

## Embedded systems

From the notes: **an embedded system is a computing system designed to perform a specific function as part of a larger device or system.**

IoT devices commonly use embedded systems because they need dedicated computing, sensing and communication capabilities. Examples: a washing machine controller, a smart thermostat, a smart watch.

An embedded system may contain:

\`\`\`
Processor + Memory + Input/Output + Software + Communication interface
\`\`\`

A laptop is general purpose: you can run anything on it. The controller inside a washing machine runs one program for its whole life.

## Communication interface

IoT devices need to communicate with other devices or networks. That needs a **communication interface**. Examples: Wi-Fi, Bluetooth, Ethernet, LoRa / LoRaWAN.

\`\`\`
Temp sensor -> ESP32 -> Wi-Fi -> Cloud server
\`\`\`

The communication interface provides the connection between the IoT device and the network.

## Gateway

From the notes: **a gateway is a device that provides communication between IoT devices/networks and another network or computing system.**

It can perform:

- protocol translation
- data aggregation
- security functions
- device connectivity
- forwarding data to the cloud / servers

\`\`\`
Sensors -> IoT gateway -> Internet -> Cloud
\`\`\`

The gateway acts as an intermediary.

### Why do we need a gateway?

The notes give this example. Imagine 100 sensors installed in a factory. The sensors may use one communication technology (say Zigbee or Bluetooth Low Energy) while the cloud service uses another network protocol (internet protocols such as IP and MQTT/HTTP). The gateway connects these different environments.

\`\`\`
IoT devices -> Gateway -> Internet / Cloud
\`\`\`

So the gateway is a bridge between the local IoT network and external networks and services. It also cuts traffic: instead of 100 sensors each opening their own internet connection, one gateway collects (aggregates) their data and forwards it.

## Complete physical architecture

The notes combine everything into one chain:

\`\`\`
Physical environment
        |
     Sensors
        |
Controller / processor
        |
Communication module
        |
     Gateway
        |
Internet / network
        |
Server / cloud / edge
        |
Decision / control
        |
     Actuator
        |
Physical environment
\`\`\`

This gives a complete interaction between the physical world and the digital world.

## The most important concept

The notes say to remember this sequence:

\`\`\`
Sense -> Process -> Communicate -> Decide -> Act
\`\`\`

| Step | Done by |
|---|---|
| Sense | Sensor |
| Process | Controller / processor |
| Communicate | Network / communication interface |
| Decide | Software / analytics / control logic |
| Act | Actuator |

The notes add that this sequence appears again and again throughout IoT architecture.

## Common mistakes

- Calling a gateway a "sensor hub that only forwards data". The notes list five jobs, and protocol translation is the main reason it exists.
- Writing Raspberry Pi as a microcontroller. It is a single-board computer that runs a full operating system. Arduino, ESP32 and STM32 are microcontroller boards.
- Mixing the two sequences. Lec 1 has the three-step sense -> process -> act cycle. This lecture's full sequence has five steps.

## How this shows up in the mid

"What is a gateway? Why is it needed in IoT?" (use the 100-sensor factory example), "Define embedded system with examples", and "Draw the complete physical architecture of IoT" are the likely questions. For any long answer about physical design, ending with the five-step sequence and its table earns marks.`,
    mcqs: [
      {
        q: "Which of these is NOT given in the notes as an example controller?",
        options: ["Arduino", "ESP32", "DHT22", "STM32"],
        answer: 2,
        explain: "DHT22 is a humidity/temperature sensor.",
      },
      {
        q: "An embedded system is:",
        options: [
          "a general-purpose desktop computer",
          "a computing system designed to perform a specific function as part of a larger device or system",
          "a cloud data centre",
          "a type of network cable",
        ],
        answer: 1,
        explain: "That is the notes' definition. Washing machine controller, smart thermostat and smart watch are examples.",
      },
      {
        q: "Which device performs protocol translation between local IoT devices and the internet?",
        options: ["Actuator", "Sensor", "LDR", "Gateway"],
        answer: 3,
        explain: "Protocol translation is the first gateway function in the notes.",
      },
      {
        q: "Which board has Wi-Fi and Bluetooth built in?",
        options: ["ESP32", "Arduino Uno", "LM35", "PIR"],
        answer: 0,
        explain: "The ESP32 integrates both radios; a plain Arduino Uno has neither.",
      },
      {
        q: "In the sequence Sense -> Process -> Communicate -> Decide -> Act, \"Decide\" is done by:",
        options: [
          "the actuator",
          "software / analytics / control logic",
          "the sensor",
          "the cable",
        ],
        answer: 1,
        explain: "The notes map Decide to software, analytics or control logic.",
      },
      {
        q: "Which is NOT a function of an IoT gateway listed in the notes?",
        options: ["Data aggregation", "Security functions", "Measuring soil moisture", "Forwarding data to cloud/servers"],
        answer: 2,
        explain: "Measuring is a sensor's job.",
      },
      {
        q: "An embedded system may contain processor, memory, input/output, software and:",
        options: ["a communication interface", "a monitor", "a printer", "a keyboard"],
        answer: 0,
        explain: "Processor + memory + I/O + software + communication interface.",
      },
      {
        q: "In the notes' example \"Temp sensor -> ESP32 -> Wi-Fi -> Cloud server\", Wi-Fi is the:",
        options: ["actuator", "gateway", "sensor", "communication interface"],
        answer: 3,
        explain: "It connects the device to the network.",
      },
      {
        q: "Raspberry Pi is best described as a:",
        options: [
          "temperature sensor",
          "single-board computer that runs Linux",
          "relay",
          "passive infrared detector",
        ],
        answer: 1,
        explain: "Unlike Arduino or ESP32, it runs a full operating system.",
      },
    ],
    fillBlanks: [
      {
        q: "A ___ is a device that provides communication between IoT devices/networks and another network or computing system.",
        answer: "gateway",
      },
      {
        q: "Sense -> Process -> Communicate -> Decide -> ___.",
        answer: "act",
      },
      {
        q: "A washing machine controller is an example of an ___ system.",
        answer: "embedded",
      },
      {
        q: "Combining data from many sensors before sending it on is called data ___.",
        answer: "aggregation",
      },
      {
        q: "The communication ___ provides the connection between the IoT device and the network.",
        answer: "interface",
      },
      {
        q: "The gateway serves as a ___ between the local IoT network and external networks.",
        answer: "bridge",
        alt: ["intermediary"],
      },
    ],
    trueFalse: [
      {
        q: "The controller can receive sensor data, apply programmed rules, make decisions and control an actuator.",
        answer: true,
        explain: "Plus process data and communicate with other devices.",
      },
      {
        q: "A gateway is needed when local sensors use a different communication technology from the cloud service.",
        answer: true,
        explain: "That is the 100-sensor factory example in the notes.",
      },
      {
        q: "LoRa / LoRaWAN is an example of a communication interface.",
        answer: true,
        explain: "Listed with Wi-Fi, Bluetooth and Ethernet.",
      },
      {
        q: "An embedded system is designed to run any program the user wants, like a laptop.",
        answer: false,
        explain: "It performs a specific function inside a larger device.",
      },
      {
        q: "In the complete physical architecture, the gateway comes after the internet and before the sensors.",
        answer: false,
        explain: "Order: sensors -> controller -> communication module -> gateway -> internet -> server/cloud/edge.",
      },
    ],
    flashcards: [
      { front: "Controller examples (notes)", back: "Arduino, ESP32, Raspberry Pi, STM32." },
      { front: "Six things a controller can do", back: "Receive sensor data, process it, apply programmed rules, make a decision, control an actuator, communicate with other devices." },
      { front: "Embedded system (definition)", back: "A computing system designed to perform a specific function as part of a larger device or system. e.g. washing machine controller, smart thermostat, smart watch." },
      { front: "Embedded system contents", back: "Processor + memory + input/output + software + communication interface." },
      { front: "Communication interface examples", back: "Wi-Fi, Bluetooth, Ethernet, LoRa/LoRaWAN." },
      { front: "Gateway (definition)", back: "A device that provides communication between IoT devices/networks and another network or computing system." },
      { front: "Five gateway functions", back: "Protocol translation, data aggregation, security functions, device connectivity, forwarding data to cloud/servers." },
      { front: "Why a gateway? (notes example)", back: "100 factory sensors use one technology, the cloud another protocol; the gateway bridges them." },
      { front: "Complete physical architecture", back: "Environment -> sensors -> controller -> communication module -> gateway -> internet -> server/cloud/edge -> decision -> actuator -> environment." },
      { front: "The most important sequence", back: "Sense (sensor) -> Process (controller) -> Communicate (network) -> Decide (software/analytics) -> Act (actuator)." },
    ],
    examples: [
      {
        title: "Gateway in action",
        items: [
          "Textile mill in Faisalabad: 100 vibration sensors on Zigbee -> Raspberry Pi gateway translates and aggregates -> one internet connection to the cloud dashboard",
          "Smart home hub: Zigbee bulbs and BLE door sensors -> hub (gateway) -> home Wi-Fi router -> phone app",
          "Farm: LoRa soil sensors spread over several acres -> LoRaWAN gateway on a pole -> cellular internet -> network server",
        ],
      },
      {
        title: "Sense, process, communicate, decide, act",
        items: [
          "Smart water tank: ultrasonic sensor (sense) -> ESP32 converts to % full (process) -> Wi-Fi to server (communicate) -> rule: below 20% (decide) -> relay starts motor (act)",
        ],
      },
    ],
    exercises: [
      {
        problem: "What is an IoT gateway? Why do we need it? List its functions.",
        solution: `Gateway: a device that provides communication between IoT
devices/networks and another network or computing system.

   Sensors -> IoT Gateway -> Internet -> Cloud
The gateway acts as an intermediary.

Why needed (notes example):
Imagine 100 sensors in a factory. The sensors may use one
communication technology while the cloud service uses another
network protocol. The gateway connects these different environments:
   IoT devices -> Gateway -> Internet / Cloud
So it serves as a bridge between the local IoT network and external
networks / services.

Functions:
1. Protocol translation
2. Data aggregation
3. Security functions
4. Device connectivity
5. Forwarding data to cloud / servers`,
      },
      {
        problem: "Define an embedded system. Why do IoT devices use embedded systems? Give examples.",
        solution: `An embedded system is a computing system designed to perform a
specific function as part of a larger device or system.

IoT devices use embedded systems because they need dedicated
computing, sensing and communication capabilities in a small,
low-cost, low-power package.

An embedded system may contain:
Processor + Memory + Input/Output + Software + Communication interface

Examples:
 - Washing machine controller
 - Smart thermostat
 - Smart watch`,
      },
      {
        problem: "Draw the complete physical architecture of an IoT system and explain the sequence Sense -> Process -> Communicate -> Decide -> Act.",
        solution: `      Physical environment
               |
            Sensors
               |
      Controller / Processor
               |
      Communication module
               |
            Gateway
               |
       Internet / Network
               |
      Server / Cloud / Edge
               |
       Decision / Control
               |
            Actuator
               |
      Physical environment

This creates a complete interaction between the physical world and
the digital world.

Sequence:
 Sense       -> sensor
 Process     -> controller / processor
 Communicate -> network / communication interface
 Decide      -> software / analytics / control logic
 Act         -> actuator
This sequence appears again and again throughout IoT architecture.`,
      },
      {
        problem: "List the tasks a controller performs in an IoT device and name four common controller boards.",
        solution: `The sensor generates data, but the controller must process it.
The controller can:
 1. Receive sensor data
 2. Process the data
 3. Apply programmed rules
 4. Make a decision
 5. Control an actuator
 6. Communicate with other devices

Common boards: Arduino, ESP32, Raspberry Pi, STM32.
(ESP32 has built-in Wi-Fi and Bluetooth; Raspberry Pi is a
single-board computer running Linux.)`,
      },
    ],
  },
  {
    id: "iot-protocols-standards",
    number: 9,
    chapter: LEC3,
    title: "Protocols and Standards in IoT",
    summary:
      "Protocol and its three elements (syntax, semantics, timing), why standards are essential, de jure vs de facto, proprietary vs open standards, the three kinds of standards organizations, and the main IoT standards (IEEE 802.11, 802.15.4, Bluetooth, Zigbee, 6LoWPAN, LoRaWAN, MQTT and others).",
    content: `## Protocols

From the slides: **a protocol is a set of rules that governs data communications.** A protocol defines what is communicated, how it is communicated, and when it is communicated. For communication to happen, the entities must agree on a protocol.

### Three elements of a protocol

| Element | Meaning | Example from slides |
|---|---|---|
| Syntax | The structure or format of the data: the order in which bits are presented | First 8 bits = sender address, next 8 bits = receiver address, the rest = the message |
| Semantics | The meaning of each section of bits: how to interpret a pattern and what action to take | Does an address identify the route to take or the final destination? |
| Timing | When data should be sent and how fast it can be sent | Sender produces 100 Mbps but receiver handles only 1 Mbps, so the receiver is overloaded and data is lost |

## Standards

From the slides: **"A standard provides a model for development that makes it possible for a product to work regardless of the individual manufacturer."** A standard is an agreed-upon rule.

### Why standards are essential

1. Creating and maintaining open and competitive markets.
2. Guaranteeing national and international interoperability of data and telecommunications technology and processes.

Standards give manufacturers, vendors, government agencies and service providers guidelines so their products connect with each other.

The slides show a figure for this. Four sources (S1 to S4) talking to three destinations (D1 to D3):

\`\`\`
Without standards: every pair needs its own protocol
   4 x 3 = 12 different protocols, 24 protocol implementations
With standards: everyone uses one protocol
   1 protocol, 7 implementations (4 + 3)
\`\`\`

In IoT this matters a lot: a smart bulb from one company works with a hub from another only because both follow the same standard, such as Zigbee.

### Categories of standards

\`\`\`
                Standards
               /         \\
        De jure           De facto
   ("by law" or       ("by fact" or
   "by regulation")   "by convention")
                          /       \\
                Proprietary     Non-proprietary
                  (closed)          (open)
\`\`\`

- **De jure**: standards legislated by an officially recognized body.
- **De facto**: standards not approved by an organized body but adopted through widespread use. They are often started by manufacturers who want to define how a new product or technology works.
  - **Proprietary (closed)**: invented by a commercial organization as the basis for its product, wholly owned by that company, and called closed because they close off communication systems. Example on the slides: Cisco's IGRP and EIGRP routing protocols.
  - **Non-proprietary (open)**: developed by groups or communities that have passed them into the public domain. Called open because they open communication between different systems.

## Standards organizations

Standards are developed mainly by three kinds of entity.

### 1. Standard creation committees

Procedural bodies. The slides note they are slow-moving and can't keep pace with the fast-growing communication industry.

| Body | Full name |
|---|---|
| ISO | International Organization for Standardization (the slide writes "International Standard Organization") |
| ITU-T | International Telecommunication Union, Telecommunication Standardization Sector |
| ANSI | American National Standards Institute |
| IEEE | Institute of Electrical and Electronics Engineers |
| EIA | Electronic Industries Association |

### 2. Forums

Special interest groups with representatives from interested corporations. They speed up standardization by working with universities and users to test, evaluate and standardize new technology. Examples: Frame Relay Forum, ATM Forum, Internet Society, Internet Engineering Task Force (IETF).

### 3. Regulatory agencies

All communication technology is subject to regulation by government agencies, to protect the public interest by regulating radio, television and cable communication. The slides' example is the **FCC** (Federal Communications Commission, USA). In Pakistan the equivalent is the **PTA** (Pakistan Telecommunication Authority), which, for example, approves wireless devices for use in the country.

## Main IoT standards

| Standard | Body | What it covers |
|---|---|---|
| IEEE 802.11 (Wi-Fi) | IEEE | Wireless LAN; Wi-Fi devices on 2.4 GHz and 5 GHz |
| IEEE 802.3 (Ethernet) | IEEE | Wired LAN |
| IEEE 802.15.4 | IEEE | Low-rate, low-power wireless personal area networks; the radio base for Zigbee, 6LoWPAN and Thread |
| Bluetooth / Bluetooth Low Energy | Bluetooth SIG (based originally on IEEE 802.15.1) | Short-range links; BLE (from Bluetooth 4.0) for low-power sensors and wearables |
| Zigbee | Connectivity Standards Alliance (formerly Zigbee Alliance) | Low-power mesh networking on top of 802.15.4 |
| 6LoWPAN | IETF | IPv6 over low-power wireless personal area networks (IPv6 packets squeezed onto 802.15.4) |
| LoRaWAN | LoRa Alliance | Long-range, low-power WAN for battery sensors (LoRa radio underneath) |
| NB-IoT, LTE-M | 3GPP | Cellular IoT standards for low-power devices |
| MQTT | OASIS | Lightweight publish-subscribe messaging |
| CoAP | IETF | Request-response protocol for constrained devices, runs over UDP |
| HTTP, WebSocket | IETF | Web request-response and persistent two-way connections |

Two things to notice. Most IoT radio standards come from IEEE, while most internet-level protocols (6LoWPAN, CoAP, HTTP) come from the IETF. And many popular IoT standards come from industry alliances (Bluetooth SIG, LoRa Alliance, CSA), which fits the slides' point that forums move faster than formal committees.

## Common mistakes

- Swapping syntax and semantics. Syntax is format (structure), semantics is meaning.
- Calling every de facto standard proprietary. De facto ones can be proprietary or open.
- Writing ISO as "International Standards Organization" in a definition question. The official name is International Organization for Standardization. Mention that the slides use the short form.
- Saying Zigbee and 802.15.4 are the same thing. 802.15.4 defines the low-power radio; Zigbee is a full networking stack built on it.

## How this shows up in the mid

"Define protocol and explain its key elements" and "What are standards? Differentiate between de jure and de facto standards" are very likely. "Name the standards organizations" (committees, forums, regulatory agencies with examples) is a good short question. Matching IoT technology to its standard (Wi-Fi = 802.11, Zigbee base = 802.15.4) is classic MCQ material.`,
    mcqs: [
      {
        q: "The three key elements of a protocol are:",
        options: [
          "sender, receiver, medium",
          "syntax, semantics, timing",
          "delivery, accuracy, jitter",
          "LAN, WAN, GAN",
        ],
        answer: 1,
        explain: "Syntax (format), semantics (meaning), timing (when and how fast).",
      },
      {
        q: "\"The first 8 bits are the sender's address, the next 8 bits are the receiver's address\" describes which element?",
        options: ["Semantics", "Timing", "Syntax", "Standard"],
        answer: 2,
        explain: "Syntax is the structure or order of the data.",
      },
      {
        q: "A sender at 100 Mbps overloading a 1 Mbps receiver is a problem of:",
        options: ["timing", "syntax", "semantics", "topology"],
        answer: 0,
        explain: "Timing covers when data is sent and how fast.",
      },
      {
        q: "Standards that have been legislated by an officially recognized body are:",
        options: ["de facto", "proprietary", "open", "de jure"],
        answer: 3,
        explain: "De jure means \"by law\" or \"by regulation\".",
      },
      {
        q: "Cisco's IGRP and EIGRP are given on the slides as examples of:",
        options: [
          "de jure standards",
          "proprietary (closed) de facto standards",
          "open standards",
          "regulatory agencies",
        ],
        answer: 1,
        explain: "They were invented and owned by one company.",
      },
      {
        q: "With 4 sources and 3 destinations and NO standards, the slides say you need how many different protocols?",
        options: ["7", "1", "12", "24"],
        answer: 2,
        explain: "4 x 3 = 12 protocols and 24 implementations. With standards: 1 protocol, 7 implementations.",
      },
      {
        q: "Which is a regulatory agency rather than a standards committee or forum?",
        options: ["IEEE", "IETF", "ATM Forum", "FCC"],
        answer: 3,
        explain: "The FCC regulates radio, TV and cable communication in the USA.",
      },
      {
        q: "Zigbee, 6LoWPAN and Thread are built on which IEEE standard?",
        options: ["IEEE 802.15.4", "IEEE 802.3", "IEEE 802.11", "IEEE 802.1"],
        answer: 0,
        explain: "802.15.4 defines the low-rate, low-power personal area radio they use.",
      },
      {
        q: "Wi-Fi is based on which standard family?",
        options: ["IEEE 802.15.4", "IEEE 802.11", "IEEE 802.3", "3GPP NB-IoT"],
        answer: 1,
        explain: "802.3 is Ethernet; 802.15.4 is low-rate WPAN.",
      },
      {
        q: "Which group is an example of a forum on the slides?",
        options: ["ANSI", "ISO", "IETF", "FCC"],
        answer: 2,
        explain: "Forums: Frame Relay Forum, ATM Forum, Internet Society, IETF.",
      },
    ],
    fillBlanks: [
      {
        q: "A ___ is a set of rules that governs data communications.",
        answer: "protocol",
      },
      {
        q: "___ refers to the meaning of each section of bits.",
        answer: "Semantics",
        alt: ["semantics"],
      },
      {
        q: "De facto standards are adopted through widespread ___.",
        answer: "use",
        alt: ["usage"],
      },
      {
        q: "Non-proprietary standards are also called ___ standards.",
        answer: "open",
      },
      {
        q: "IEEE stands for Institute of Electrical and ___ Engineers.",
        answer: "Electronics",
        alt: ["electronics"],
      },
      {
        q: "6LoWPAN carries IPv___ packets over low-power wireless networks.",
        answer: "6",
        alt: ["six"],
      },
    ],
    trueFalse: [
      {
        q: "Syntax refers to the meaning of each section of bits.",
        answer: false,
        explain: "That is semantics. Syntax is the structure/format.",
      },
      {
        q: "A de facto standard can be either proprietary or non-proprietary.",
        answer: true,
        explain: "The slides split de facto into proprietary (closed) and non-proprietary (open).",
      },
      {
        q: "According to the slides, standard creation committees are fast-moving and keep up easily with the communication industry.",
        answer: false,
        explain: "The slides say they are procedural, slow-moving bodies.",
      },
      {
        q: "Standards help guarantee national and international interoperability.",
        answer: true,
        explain: "That is one of the two reasons standards are essential.",
      },
      {
        q: "Zigbee and IEEE 802.15.4 are exactly the same thing.",
        answer: false,
        explain: "802.15.4 defines the radio and MAC layers; Zigbee is a networking stack built on top of it.",
      },
      {
        q: "MQTT is standardized by OASIS.",
        answer: true,
        explain: "MQTT is an OASIS standard.",
      },
    ],
    flashcards: [
      { front: "Protocol (definition)", back: "A set of rules that governs data communications: what, how and when it is communicated." },
      { front: "Syntax / semantics / timing", back: "Syntax = format/structure of data. Semantics = meaning of each section of bits. Timing = when to send and how fast." },
      { front: "Standard (slide quote)", back: "\"A standard provides a model for development that makes it possible for a product to work regardless of the individual manufacturer.\"" },
      { front: "Why standards are essential", back: "1. Open and competitive markets. 2. National/international interoperability of data and telecom technology." },
      { front: "De jure vs de facto", back: "De jure: legislated by an officially recognized body (by law). De facto: adopted through widespread use (by fact/convention)." },
      { front: "Proprietary vs non-proprietary", back: "Proprietary (closed): owned by one company, e.g. IGRP, EIGRP. Non-proprietary (open): placed in public domain by groups/communities." },
      { front: "Three kinds of standards organizations", back: "Standard creation committees (ISO, ITU-T, ANSI, IEEE, EIA), forums (Frame Relay Forum, ATM Forum, Internet Society, IETF), regulatory agencies (FCC; PTA in Pakistan)." },
      { front: "Standards figure: 4 sources, 3 destinations", back: "Without standards: 12 protocols, 24 implementations. With standards: 1 protocol, 7 implementations." },
      { front: "IEEE 802.11 / 802.3 / 802.15.4", back: "Wi-Fi (WLAN) / Ethernet (wired LAN) / low-rate low-power WPAN (base of Zigbee, 6LoWPAN, Thread)." },
      { front: "Who standardizes LoRaWAN, MQTT, NB-IoT?", back: "LoRaWAN: LoRa Alliance. MQTT: OASIS. NB-IoT and LTE-M: 3GPP." },
    ],
    examples: [
      {
        title: "Syntax, semantics or timing?",
        items: [
          "A packet header where bytes 1 to 2 are the device id and byte 3 is the reading: syntax",
          "Reading value 0xFF means \"sensor error\", so ignore it: semantics",
          "A sensor must wait 10 ms after the gateway's acknowledgement before sending again: timing",
        ],
      },
      {
        title: "Match the IoT technology to its standard",
        items: [
          "Home Wi-Fi camera: IEEE 802.11",
          "Office access control panel wired to the network: IEEE 802.3 (Ethernet)",
          "Zigbee smart bulb: Zigbee on IEEE 802.15.4",
          "Fitness band syncing to phone: Bluetooth Low Energy (Bluetooth SIG)",
          "Farm soil sensor reporting from kilometres away: LoRaWAN (LoRa Alliance)",
          "Smart electricity meter on a cellular link: NB-IoT (3GPP)",
        ],
      },
    ],
    exercises: [
      {
        problem: "Define protocol. Explain its three key elements with examples.",
        solution: `A protocol is a set of rules that governs data communications. It
defines what is communicated, how it is communicated and when it is
communicated. For communication to occur, the entities must agree on
a protocol.

1. Syntax: the structure or format of the data, i.e. the order in
   which it is presented.
   e.g. first 8 bits = sender address, next 8 bits = receiver
   address, rest of the stream = the message.

2. Semantics: the meaning of each section of bits; how a pattern is
   interpreted and what action is taken.
   e.g. does an address identify the route to be taken or the final
   destination of the message?

3. Timing: when data should be sent and how fast it can be sent.
   e.g. if a sender produces data at 100 Mbps but the receiver can
   process only 1 Mbps, the receiver is overloaded and data is lost.`,
      },
      {
        problem: "What are standards? Why are they essential? Differentiate between de jure and de facto standards.",
        solution: `Standard: "A standard provides a model for development that makes it
possible for a product to work regardless of the individual
manufacturer." Standards are agreed-upon rules.

Why essential:
1. Creating/maintaining open and competitive markets.
2. Guaranteeing national/international interoperability of data and
   telecommunications technology and processes.
e.g. 4 sources and 3 destinations need 12 protocols (24
implementations) without standards, but only 1 protocol (7
implementations) with a standard.

De jure ("by law")                | De facto ("by fact/convention")
----------------------------------|----------------------------------
Legislated by an officially       | Not approved by an organized body;
recognized body                   | adopted through widespread use
Formal approval process           | Often started by manufacturers to
                                  | define a new product/technology
                                  | Two kinds: proprietary (closed,
                                  | e.g. IGRP/EIGRP) and
                                  | non-proprietary (open)`,
      },
      {
        problem: "Explain the three types of standards organizations with examples.",
        solution: `1. Standard creation committees: procedural bodies; slow-moving and
   cannot keep pace with the fast-growing communication industry.
   ISO   - International Organization for Standardization
   ITU-T - International Telecommunication Union,
           Telecommunication Standardization Sector
   ANSI  - American National Standards Institute
   IEEE  - Institute of Electrical and Electronics Engineers
   EIA   - Electronic Industries Association

2. Forums: special interest groups with representatives from
   interested corporations. They speed up standardization by working
   with universities and users to test, evaluate and standardize new
   technology.
   e.g. Frame Relay Forum, ATM Forum, Internet Society, IETF.

3. Regulatory agencies: government bodies that regulate communication
   technology to protect the public interest (radio, TV, cable).
   e.g. FCC (USA); PTA (Pakistan).`,
      },
      {
        problem: "Name any five standards used in IoT and state what each is used for.",
        solution: `1. IEEE 802.11 (Wi-Fi): wireless LAN; connects cameras, plugs and
   sensors to the home/office network.
2. IEEE 802.15.4: low-rate, low-power wireless personal area
   networks; radio base for Zigbee, 6LoWPAN and Thread.
3. Bluetooth Low Energy (Bluetooth SIG): short-range, low-power
   links for wearables and sensors.
4. Zigbee: low-power mesh networking for smart home devices.
5. LoRaWAN (LoRa Alliance): long-range, low-power WAN for battery
   sensors (e.g. agriculture).
Also: 6LoWPAN (IETF, IPv6 over 802.15.4), NB-IoT/LTE-M (3GPP
cellular IoT), MQTT (OASIS, publish-subscribe), CoAP (IETF,
request-response over UDP).`,
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // Lec 4 · Logical Design of IoT
  // ---------------------------------------------------------------------------
  {
    id: "iot-logical-design-functional-blocks",
    number: 10,
    chapter: LEC4,
    title: "Logical Design of IoT and the Functional Blocks",
    summary:
      "Physical vs logical design, the three parts of logical design (functional blocks, communication models, communication APIs), and the six functional blocks: device, communication, services, management, security and application.",
    content: `## Physical design vs logical design

The notes put the two side by side:

\`\`\`
Physical design : actual hardware and physical components.

Logical design  : how those components are organized and communicate.
      |
      |---> Functional blocks     : what functions the system provides
      |
      |---> Communication models  : how entities exchange information
      |
      |---> Communication APIs    : how software uses those
                                    communication mechanisms
\`\`\`

So the logical design is an abstract view. It doesn't care whether the sensor is a DHT11 or a DHT22, or whether the board is an Arduino or an ESP32. It cares about what jobs the system does and how the parts talk.

The notes also give a one-line summary for three terms that students mix up:

| Term | Question it answers |
|---|---|
| Physical design | What exists? |
| Logical design | How does it function and communicate? |
| Architecture | How are these functions organized? |

## IoT functional blocks

An IoT system can be divided into **functional blocks**. Together they provide identification, sensing, actuation, communication, management, security and application services. The commonly used representation in the notes:

\`\`\`
Device -> Communication -> Services -> Management -> Security -> Application
\`\`\`

A common way to draw it (as in the Bahga and Madisetti textbook) is with Application on top, Device at the bottom, and Management and Security as side columns that cover every layer:

\`\`\`
+------------+---------------------------+------------+
|            |        Application        |            |
|            +---------------------------+            |
| Management |         Services          |  Security  |
|            +---------------------------+            |
|            |       Communication       |            |
|            +---------------------------+            |
|            |          Device           |            |
+------------+---------------------------+------------+
\`\`\`

### Device block

Represents the **physical devices or things** in the IoT system: sensors, actuators, controllers. It provides sensing, actuation, monitoring and control.

### Communication block

Provides **connectivity between IoT devices and other entities** (other devices, gateways, servers). Protocols like HTTP, MQTT, CoAP and WebSocket live here.

### Services block

Represents the **services provided by the IoT system**. The notes put it this way: a service converts raw device capabilities into something useful to the user or another system. Typical services: device discovery, device control, data publishing and data analytics.

### Management block

Deals with the **administration and operation** of the IoT system: registering devices, configuring them, checking their status, pushing firmware updates.

### Security block

**Protects the IoT system and its resources**, through authentication, authorization, message integrity and data confidentiality.

### Application block

Represents the **application through which IoT functionality is delivered to users or other systems**. It is the interface users see: a dashboard, a mobile app, an alert system.

## Example: smart irrigation in functional blocks

| Block | In a smart irrigation system |
|---|---|
| Device | Soil-moisture sensors, ESP32 node, pump relay |
| Communication | LoRa or Wi-Fi link, MQTT messages |
| Services | "Get moisture of field 3" service; "start pump" control service; daily water-use analytics |
| Management | Registering a new sensor, checking battery levels, updating firmware |
| Security | Only the farmer's account can start the pump; data encrypted |
| Application | Phone app showing moisture maps and a pump on/off button |

## Common mistakes

- Defining logical design as "the software". It is how the components are organized and communicate, described through functional blocks, communication models and APIs.
- Listing only five blocks. There are six: device, communication, services, management, security, application.
- Confusing the services block with the application block. Services do the work (e.g. a "get temperature" service); the application is what the user interacts with.

## How this shows up in the mid

"Differentiate between physical and logical design of IoT" and "Explain the functional blocks of IoT with a diagram" are the big ones. For the diagram, either the notes' chain or the stacked box diagram is fine; label all six blocks and give one line each.`,
    mcqs: [
      {
        q: "According to the notes, the logical design of IoT describes:",
        options: [
          "the actual hardware components",
          "how components are organized and communicate",
          "the price of IoT devices",
          "the shape of the PCB",
        ],
        answer: 1,
        explain: "Physical design = hardware; logical design = organization and communication.",
      },
      {
        q: "Which is NOT one of the three parts of logical design in the notes?",
        options: ["Functional blocks", "Communication models", "Sensor types", "Communication APIs"],
        answer: 2,
        explain: "Sensor types belong to physical design.",
      },
      {
        q: "\"What exists?\" is the question answered by:",
        options: ["physical design", "logical design", "architecture", "communication API"],
        answer: 0,
        explain: "Physical design -> what exists; logical design -> how it functions and communicates; architecture -> how functions are organized.",
      },
      {
        q: "Which block provides connectivity between IoT devices and other entities?",
        options: ["Device", "Management", "Services", "Communication"],
        answer: 3,
        explain: "The communication block handles connectivity.",
      },
      {
        q: "The block that converts raw device capabilities into something useful for the user or another system is:",
        options: ["Security", "Services", "Device", "Communication"],
        answer: 1,
        explain: "That is how the notes describe the services block.",
      },
      {
        q: "Registering devices, configuring them and pushing firmware updates belong to the:",
        options: ["Management block", "Application block", "Device block", "Communication block"],
        answer: 0,
        explain: "Management deals with administration and operation.",
      },
      {
        q: "Authentication, authorization and data confidentiality are handled by the:",
        options: ["Application block", "Services block", "Security block", "Device block"],
        answer: 2,
        explain: "The security block protects the system and its resources.",
      },
      {
        q: "The order of functional blocks in the notes' representation is:",
        options: [
          "Application -> Device -> Services -> Security -> Communication -> Management",
          "Device -> Services -> Communication -> Application -> Security -> Management",
          "Communication -> Device -> Management -> Services -> Application -> Security",
          "Device -> Communication -> Services -> Management -> Security -> Application",
        ],
        answer: 3,
        explain: "Device -> Communication -> Services -> Management -> Security -> Application.",
      },
      {
        q: "How many functional blocks are there?",
        options: ["Four", "Five", "Six", "Seven"],
        answer: 2,
        explain: "Device, communication, services, management, security, application.",
      },
    ],
    fillBlanks: [
      {
        q: "Physical design answers \"what exists?\"; ___ design answers \"how does it function and communicate?\".",
        answer: "logical",
      },
      {
        q: "The ___ block represents the physical devices or things in the IoT system.",
        answer: "device",
      },
      {
        q: "The ___ block deals with the administration and operation of the IoT system.",
        answer: "management",
      },
      {
        q: "Communication ___ describe how software uses the communication mechanisms.",
        answer: "APIs",
        alt: ["apis", "api"],
      },
      {
        q: "The ___ block represents the application through which IoT functionality is delivered to users.",
        answer: "application",
      },
    ],
    trueFalse: [
      {
        q: "Logical design depends on the exact sensor model used.",
        answer: false,
        explain: "It is an abstract view of functions and communication, independent of specific hardware.",
      },
      {
        q: "Architecture answers the question \"how are these functions organized?\".",
        answer: true,
        explain: "From the summary at the end of the notes.",
      },
      {
        q: "The security block protects the IoT system and its resources.",
        answer: true,
        explain: "That is the notes' definition.",
      },
      {
        q: "The services block and the application block are the same thing.",
        answer: false,
        explain: "Services do the work (discovery, control, data publishing, analytics); the application delivers it to users.",
      },
      {
        q: "Communication models are part of the logical design.",
        answer: true,
        explain: "Logical design = functional blocks + communication models + communication APIs.",
      },
    ],
    flashcards: [
      { front: "Physical vs logical design", back: "Physical: actual hardware and physical components. Logical: how those components are organized and communicate." },
      { front: "Three parts of logical design", back: "Functional blocks (what functions), communication models (how entities exchange info), communication APIs (how software uses communication)." },
      { front: "Physical / logical / architecture questions", back: "What exists? / How does it function and communicate? / How are these functions organized?" },
      { front: "Six functional blocks (order in notes)", back: "Device -> Communication -> Services -> Management -> Security -> Application." },
      { front: "Device block", back: "The physical devices or things: sensors, actuators, controllers." },
      { front: "Communication block", back: "Provides connectivity between IoT devices and other entities." },
      { front: "Services block", back: "Services of the system: converts raw device capabilities into something useful. e.g. device discovery, control, data publishing, analytics." },
      { front: "Management block", back: "Administration and operation of the IoT system." },
      { front: "Security block", back: "Protects the IoT system and its resources (authentication, authorization, integrity, confidentiality)." },
      { front: "Application block", back: "The application through which IoT functionality is delivered to users or other systems." },
    ],
    examples: [
      {
        title: "Which block?",
        items: [
          "A DHT22 sensor on a greenhouse wall: device",
          "MQTT messages over Wi-Fi from the node to the broker: communication",
          "A \"get current humidity\" service that other systems can call: services",
          "Admin panel showing which nodes are offline and pushing new firmware: management",
          "Login and encryption so only the owner can open the smart lock: security",
          "The phone app where the owner taps \"unlock\": application",
        ],
      },
    ],
    exercises: [
      {
        problem: "Differentiate between the physical design and the logical design of IoT.",
        solution: `Physical design                    | Logical design
-----------------------------------|-----------------------------------
Actual hardware and physical       | How those components are organized
components                         | and communicate
Answers: what exists?              | Answers: how does it function and
                                   | communicate?
Covers sensors, actuators,         | Covers functional blocks,
controllers, communication         | communication models and
interfaces, gateways               | communication APIs
Specific: e.g. DHT22, ESP32        | Abstract: independent of the exact
                                   | hardware used

(Architecture answers: how are these functions organized?)`,
      },
      {
        problem: "Explain the functional blocks of an IoT system with a diagram.",
        solution: `An IoT system can be divided into functional blocks that together
provide identification, sensing, actuation, communication,
management, security and application services.

 Device -> Communication -> Services -> Management -> Security
        -> Application

 +------------+-------------------------+------------+
 |            |       Application       |            |
 |            +-------------------------+            |
 | Management |        Services         |  Security  |
 |            +-------------------------+            |
 |            |      Communication      |            |
 |            +-------------------------+            |
 |            |         Device          |            |
 +------------+-------------------------+------------+

1. Device: the physical devices/things (sensors, actuators).
2. Communication: connectivity between IoT devices and other
   entities.
3. Services: services provided by the system; converts raw device
   capabilities into something useful (discovery, control, data
   publishing, analytics).
4. Management: administration and operation of the IoT system.
5. Security: protects the IoT system and its resources.
6. Application: the application through which IoT functionality is
   delivered to users or other systems.`,
      },
      {
        problem: "Map the six functional blocks onto a smart home security system.",
        solution: `Device:        door sensors, PIR motion sensor, camera, smart lock,
               siren.
Communication: Wi-Fi / Zigbee links; MQTT or HTTP messages to the
               cloud.
Services:      "lock door" control service, motion-alert publishing
               service, video storage service.
Management:    adding a new sensor, checking battery levels, firmware
               updates for the camera.
Security:      user login, encrypted video, only authorised users can
               unlock.
Application:   mobile app showing live camera, alerts, lock/unlock
               button.`,
      },
    ],
  },
  {
    id: "iot-request-response-publish-subscribe",
    number: 11,
    chapter: LEC4,
    title: "Communication Models I: Request-Response and Publish-Subscribe",
    summary:
      "What a communication model is, the request-response model (client, server, synchronous, HTTP, weather app example) and the publish-subscribe model (publisher, broker, subscriber, topics, MQTT, /home/temperature example).",
    content: `## What is a communication model?

From the notes: an IoT system contains many entities that need to exchange information. **A communication model defines the general pattern according to which those entities exchange messages.**

The four commonly taught models:

1. Request-response
2. Publish-subscribe
3. Push-pull
4. Exclusive pair

The notes say these four are also explicitly identified in IoT teaching material and reference architectures. This topic covers the first two; the next topic covers the other two and compares all four.

## 1. Request-response model

The simplest one. There are generally two entities: **client** and **server**. The client sends a request, and the server processes it and sends back a response.

\`\`\`
   Client
     |
     |  Request
     v
   Server   (processes the request,
     |       fetches or computes the data)
     |  Response
     v
   Client
\`\`\`

**Important characteristic:** the communication is generally **synchronous**. The client sends a request and waits for the response.

- **HTTP-based communication** commonly follows this model. CoAP, a lighter protocol for small devices, also uses request-response.
- Each request-response pair is independent of the others. This is why the model is often called stateless: the server doesn't need to remember earlier requests.
- **Real-world example (notes):** a weather application requesting current weather data from a server.
- **IoT example:** your phone app asks the smart meter's server "what is today's usage?" and gets the number back.

The downside is that a client wanting fresh data has to keep asking. If a sensor value changes once an hour but the app asks every 5 seconds, most requests are wasted. If something urgent happens, the client won't know until its next request.

## 2. Publish-subscribe model

The notes say this one is slightly different. There are three important entities:

\`\`\`
Publisher -> Broker -> Subscriber
\`\`\`

\`\`\`
   Publisher
       |
       |  message (topic)
       v
    Broker
       |------------> Subscriber 1
       |------------> Subscriber 2
\`\`\`

How it works:

- The **publisher** sends a message associated with a **topic**.
- The publisher does **not need to know** exactly which subscribers will receive it.
- The **broker** receives the message and distributes it to the subscribers interested in that topic.
- All interested **subscribers** receive the published information.

**Example from the notes.** Suppose there is a topic \`/home/temperature\`. A temperature sensor publishes \`temp = 45 C\`. Several applications may subscribe to that topic:

- a mobile application
- a web dashboard
- an automatic control system

All three get the 45 C reading, and the sensor sent it only once.

This model is widely associated with **MQTT**, which uses a broker-based publish/subscribe architecture. (Real MQTT topic names usually don't start with a slash, e.g. \`home/temperature\`, but the notes' version is fine for the exam.)

### Why IoT likes publish-subscribe

- Decoupling: publishers and subscribers don't know about each other. You can add a new dashboard without touching the sensor's code.
- One-to-many: one message reaches many subscribers.
- Event-driven: subscribers get data when it's published, without asking again and again.
- Light for small devices: the sensor only talks to the broker.

## Request-response vs publish-subscribe

| Feature | Request-response | Publish-subscribe |
|---|---|---|
| Entities | Client + server | Publisher + broker + subscriber |
| Who starts | Client asks each time | Publisher sends when it has data |
| Knowledge | Client must know the server | Publisher doesn't know the subscribers |
| Pattern | One-to-one | One-to-many (through the broker) |
| Timing | Synchronous: client waits for response | Asynchronous: subscribers get messages as they're published |
| Typical protocol | HTTP (REST), CoAP | MQTT |
| Example | Weather app asking for current weather | Sensor publishes to /home/temperature; app, dashboard and controller receive it |

The notes' memory lines:

- Request-response: I ask, you answer.
- Publish-subscribe: I publish, whoever subscribed receives.

## Common mistakes

- Saying the publisher sends directly to subscribers. Everything goes through the **broker**.
- Saying the publisher must know the subscribers. The notes say it doesn't need to.
- Pairing MQTT with request-response. MQTT is publish-subscribe; HTTP is request-response.

## How this shows up in the mid

"Explain the request-response communication model with a diagram" and "Explain the publish-subscribe model with an example" are near-certain. Draw the diagram, name the entities, give the characteristic (synchronous / broker and topics), name the protocol (HTTP / MQTT) and the notes' example.`,
    mcqs: [
      {
        q: "A communication model defines:",
        options: [
          "the colour of IoT devices",
          "the general pattern according to which entities exchange messages",
          "the voltage of sensors",
          "the price of a gateway",
        ],
        answer: 1,
        explain: "That is the notes' definition.",
      },
      {
        q: "The two entities in the request-response model are:",
        options: ["publisher and subscriber", "producer and consumer", "client and server", "broker and queue"],
        answer: 2,
        explain: "The client requests, the server responds.",
      },
      {
        q: "Request-response communication is generally:",
        options: ["synchronous", "always broadcast", "broker-based", "queue-based"],
        answer: 0,
        explain: "The client sends a request and waits for the response.",
      },
      {
        q: "Which protocol commonly follows the request-response model?",
        options: ["MQTT", "AMQP queues", "WebSocket", "HTTP"],
        answer: 3,
        explain: "HTTP is the classic request-response protocol.",
      },
      {
        q: "In publish-subscribe, which entity distributes a message to all interested subscribers?",
        options: ["Publisher", "Broker", "Client", "Queue"],
        answer: 1,
        explain: "The broker receives the message and forwards it to subscribers of that topic.",
      },
      {
        q: "MQTT is widely associated with which model?",
        options: ["Publish-subscribe", "Request-response", "Exclusive pair", "Simplex"],
        answer: 0,
        explain: "MQTT uses a broker-based publish/subscribe architecture.",
      },
      {
        q: "In the notes' example, a sensor publishes temp = 45 C to /home/temperature. Who receives it?",
        options: [
          "Only the broker",
          "Only the first app that asks",
          "No one until someone sends a request",
          "Every application subscribed to that topic",
        ],
        answer: 3,
        explain: "Mobile app, web dashboard and automatic control system all receive it.",
      },
      {
        q: "Which statement about the publisher is correct?",
        options: [
          "It must know the IP address of every subscriber",
          "It sends one copy to each subscriber directly",
          "It does not need to know exactly which subscribers will receive the message",
          "It waits for each subscriber's response",
        ],
        answer: 2,
        explain: "Publishers and subscribers are decoupled by the broker.",
      },
      {
        q: "\"I ask, you answer\" is the memory line for:",
        options: ["publish-subscribe", "request-response", "push-pull", "exclusive pair"],
        answer: 1,
        explain: "From the notes' \"easy way to remember\" list.",
      },
    ],
    fillBlanks: [
      {
        q: "In request-response, the ___ sends a request and the server sends back a response.",
        answer: "client",
      },
      {
        q: "The three entities in publish-subscribe are publisher, ___ and subscriber.",
        answer: "broker",
      },
      {
        q: "A publisher sends a message associated with a ___.",
        answer: "topic",
      },
      {
        q: "Request-response is generally ___: the client waits for the response.",
        answer: "synchronous",
      },
      {
        q: "The publish-subscribe model is widely associated with the ___ protocol.",
        answer: "MQTT",
        alt: ["mqtt"],
      },
      {
        q: "The notes' real-world request-response example is a ___ application requesting current data from a server.",
        answer: "weather",
      },
    ],
    trueFalse: [
      {
        q: "Request-response is the simplest communication model.",
        answer: true,
        explain: "The notes call it the simplest one.",
      },
      {
        q: "In publish-subscribe, the publisher sends messages directly to each subscriber.",
        answer: false,
        explain: "It sends to the broker, which distributes them.",
      },
      {
        q: "HTTP-based communication commonly follows the publish-subscribe model.",
        answer: false,
        explain: "HTTP follows request-response. MQTT follows publish-subscribe.",
      },
      {
        q: "Several applications can subscribe to the same topic and all receive the published message.",
        answer: true,
        explain: "That's the one-to-many nature of publish-subscribe.",
      },
      {
        q: "In request-response, a client that wants fresh data has to keep sending new requests.",
        answer: true,
        explain: "The server only replies when asked.",
      },
    ],
    flashcards: [
      { front: "Communication model (definition)", back: "The general pattern according to which IoT entities exchange messages." },
      { front: "Four communication models", back: "Request-response, publish-subscribe, push-pull, exclusive pair." },
      { front: "Request-response: entities and flow", back: "Client -> request -> server processes -> response -> client." },
      { front: "Request-response: important characteristic", back: "Generally synchronous: client sends a request and waits for the response. HTTP follows it." },
      { front: "Request-response example (notes)", back: "A weather app requesting current weather data from a server." },
      { front: "Publish-subscribe: entities", back: "Publisher -> broker -> subscriber(s)." },
      { front: "Publish-subscribe: how it works", back: "Publisher sends a message on a topic without knowing the subscribers; broker distributes it to everyone subscribed to that topic." },
      { front: "Publish-subscribe example (notes)", back: "Topic /home/temperature; sensor publishes temp = 45 C; mobile app, web dashboard and automatic control system receive it." },
      { front: "Which protocol for which model?", back: "HTTP (and CoAP) = request-response. MQTT = publish-subscribe." },
      { front: "Memory lines", back: "Request-response: I ask, you answer. Publish-subscribe: I publish, whoever subscribed receives." },
    ],
    examples: [
      {
        title: "Request-response in IoT",
        items: [
          "Phone app sends GET to a smart meter server: \"today's units?\" and gets 14.2 kWh back",
          "Gateway asks a CoAP sensor for its latest reading and the sensor replies",
          "A browser opens a farm dashboard page and the server returns the latest moisture values",
        ],
      },
      {
        title: "Publish-subscribe in IoT",
        items: [
          "Topic home/temperature: sensor publishes 45 C; phone app, web dashboard and AC controller all receive it",
          "Topic factory/line2/vibration: 50 machines publish; the maintenance dashboard subscribes to all of them",
          "Topic farm/field3/moisture: irrigation controller and farmer's app both subscribe",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain the request-response communication model with a diagram and an example.",
        solution: `Request-response is the simplest communication model. There are
generally two entities: client and server.
The client sends a request; the server processes it and sends back a
response.

     Client
       |
       | Request
       v
     Server
       |
       | Response
       v
     Client

Important characteristic: communication is generally synchronous;
the client sends a request and waits for the response. Each
request-response pair is independent (stateless).

HTTP-based communication commonly follows this model (CoAP too).

Example: a weather application requesting current weather data from
a server. IoT example: a phone app asking a smart meter server for
today's energy usage.`,
      },
      {
        problem: "Explain the publish-subscribe model with a diagram. Use the /home/temperature example.",
        solution: `Three entities: Publisher -> Broker -> Subscriber

     Publisher
         |
         | message (topic)
         v
      Broker
         |----------> Subscriber 1
         |----------> Subscriber 2

 - The publisher sends a message associated with a topic.
 - The publisher does not need to know which subscribers will
   receive it.
 - The broker receives the message and distributes it to the
   subscribers interested in that topic.
 - All interested subscribers receive the published information.

Example:
Topic: /home/temperature
A temperature sensor publishes: temp = 45 C
Subscribers to that topic:
 -> mobile application
 -> web dashboard
 -> automatic control system
All three receive the reading.

This model is widely associated with MQTT, which uses a broker-based
publish/subscribe architecture.`,
      },
      {
        problem: "Differentiate between the request-response and publish-subscribe communication models.",
        solution: `Request-response                  | Publish-subscribe
----------------------------------|----------------------------------
Entities: client + server         | Publisher + broker + subscriber
Client asks every time            | Publisher sends when it has data
Client must know the server       | Publisher does not know the
                                  | subscribers
One-to-one                        | One-to-many via the broker
Synchronous: client waits         | Asynchronous: messages delivered
for the response                  | as they are published
HTTP, CoAP                        | MQTT
e.g. weather app requests data    | e.g. sensor publishes to
                                  | /home/temperature, app, dashboard
                                  | and controller receive it
"I ask, you answer"               | "I publish, whoever subscribed
                                  | receives"`,
      },
      {
        problem: "A city has 2,000 parking sensors. Three systems need every update: a mobile app, a traffic dashboard and a billing system. Which communication model fits better, request-response or publish-subscribe? Justify.",
        solution: `Publish-subscribe fits better.

 - Each sensor publishes once to a topic (e.g. parking/zoneA/slot17)
   and the broker delivers it to all three subscribers. With
   request-response each system would have to poll 2,000 sensors
   again and again.
 - Sensors don't need to know who is listening; a fourth system can
   subscribe later without changing any sensor.
 - Updates arrive when a car parks or leaves, not on the next poll,
   so the app is more up to date.
 - Small battery sensors only send a short message to one broker,
   which saves power and bandwidth.
Protocol: MQTT.`,
      },
    ],
  },
  {
    id: "iot-push-pull-exclusive-pair",
    number: 12,
    chapter: LEC4,
    title: "Communication Models II: Push-Pull, Exclusive Pair and Comparison",
    summary:
      "The push-pull model (producer, queue, consumer, decoupling, 1000-sensor example), the exclusive pair model (persistent full-duplex client-server connection, WebSocket, real-time dashboard example), and the comparison of all four communication models.",
    content: `## 3. Push-pull model

From the notes: **the push-pull model separates the producer of information from the consumer.** A producer **pushes** messages into a **queue**, while a consumer **pulls** messages from that queue.

\`\`\`
   Producer
      |
      |  Push
      v
    Queue     [msg][msg][msg][msg]
      |
      |  Pull
      v
   Consumer
\`\`\`

**Example (notes).** Imagine 1000 sensors generating data. Instead of requiring a processing system to handle every message immediately, data can be placed into a queue. The processing system retrieves messages from the queue as its resources become available.

This gives **decoupling between data production and data consumption**. The notes conclude it is useful when the **rate of data generation and the rate of processing are different**.

Things to note:

- Producers don't need to know who the consumers are.
- The queue acts as a **buffer**. A burst of readings (say every sensor reports at 9:00 am sharp) piles up in the queue instead of crashing the server.
- Consumers work at their own pace and can be added to speed things up.
- Message-queue systems such as RabbitMQ, Amazon SQS or Kafka are often used to build this in practice.

## 4. Exclusive pair model

From the notes: **the exclusive pair model establishes a persistent, typically full-duplex connection between two entities.**

\`\`\`
   Client
    |  ^
    |  |    persistent, full-duplex
    v  |    connection
   Server
\`\`\`

- Both sides can send information to each other over the established connection.
- Unlike request-response, the client doesn't need to set up a new connection for every message.
- The connection stays open until the client closes it, and the server knows about all the open connections. That makes it a **stateful** model, the opposite of stateless request-response.

**Example (notes).** A real-time IoT dashboard may maintain a connection with a server. The server can send updated sensor information to the dashboard immediately, while the dashboard can also send commands back.

\`\`\`
Client <---------> Server
\`\`\`

**WebSocket-based communication** commonly follows this type of persistent, bidirectional communication.

## Push-pull vs exclusive pair

| Push-pull | Exclusive pair |
|---|---|
| Producer + queue + consumer | Client + server |
| Communication goes through a queue | Direct connection between the two |
| Producer and consumer are decoupled | The two are tightly paired |
| Asynchronous; consumer pulls when ready | Real-time; both sides send any time |
| Good when production and processing rates differ | Good for low-latency, continuous two-way communication |
| e.g. 1000 sensors -> queue -> processing system | e.g. live dashboard <-> server over WebSocket |

## Comparison of all four communication models

The notes' table:

| Model | Main entities |
|---|---|
| Request-response | Client + server |
| Publish-subscribe | Publisher + broker + subscriber |
| Push-pull | Producer + queue + consumer |
| Exclusive pair | Client + server |

A fuller version for long answers:

| Feature | Request-response | Publish-subscribe | Push-pull | Exclusive pair |
|---|---|---|---|---|
| Middle component | None | Broker | Queue | None (persistent connection) |
| Connection | New request each time | Via broker | Via queue | One long-lived connection |
| Direction | Client asks, server answers | Publisher to many subscribers | Producer to consumer | Both ways at once (full-duplex) |
| State | Stateless | Decoupled | Decoupled | Stateful |
| Typical tech | HTTP, CoAP | MQTT | Message queues | WebSocket |
| Best for | Fetching data on demand | One event, many receivers | Different production and processing rates | Real-time two-way control |

The notes' easy way to remember:

- Request-response: I ask, you answer.
- Publish-subscribe: I publish, whoever subscribed receives.
- Push-pull: I put it in the queue; you take it when ready.
- Exclusive pair: We maintain a direct two-way connection.

## Common mistakes

- Writing "broker" for push-pull. Push-pull has a **queue**; the broker belongs to publish-subscribe.
- Saying exclusive pair and request-response are the same because both have client + server. Request-response is a fresh exchange each time and stateless; exclusive pair keeps one persistent, full-duplex, stateful connection.
- Forgetting the reason for push-pull: different rates of data generation and processing.

## How this shows up in the mid

"Explain push-pull and exclusive pair models with diagrams" and "Compare the four IoT communication models" are the classics. A scenario question ("which model would you use for X?") is also likely; the "best for" row above answers it.`,
    mcqs: [
      {
        q: "In the push-pull model, the producer pushes messages into a:",
        options: ["broker", "queue", "router", "topic"],
        answer: 1,
        explain: "Producer -> queue -> consumer.",
      },
      {
        q: "The main benefit of push-pull according to the notes is:",
        options: [
          "decoupling between data production and data consumption",
          "a persistent full-duplex connection",
          "lower sensor cost",
          "no need for a network",
        ],
        answer: 0,
        explain: "The queue separates producers from consumers.",
      },
      {
        q: "Push-pull is especially useful when:",
        options: [
          "there is only one sensor",
          "the client needs a reply immediately",
          "the rate of data generation and the rate of processing are different",
          "data must be sent in both directions at the same time",
        ],
        answer: 2,
        explain: "The queue buffers the difference.",
      },
      {
        q: "The exclusive pair model establishes:",
        options: [
          "a new connection for every message",
          "a broker between client and server",
          "a queue between producer and consumer",
          "a persistent, typically full-duplex connection between two entities",
        ],
        answer: 3,
        explain: "Both sides can send over the same open connection.",
      },
      {
        q: "Which technology commonly follows the exclusive pair model?",
        options: ["WebSocket", "MQTT", "HTTP/REST", "Message queue"],
        answer: 0,
        explain: "WebSocket gives persistent, bidirectional communication.",
      },
      {
        q: "Which model is stateful because the server keeps track of open connections?",
        options: ["Request-response", "Push-pull", "Exclusive pair", "Publish-subscribe"],
        answer: 2,
        explain: "The connection stays open and the server knows about it.",
      },
      {
        q: "\"I put it in the queue; you take it when ready\" describes:",
        options: ["exclusive pair", "push-pull", "request-response", "publish-subscribe"],
        answer: 1,
        explain: "From the notes' memory list.",
      },
      {
        q: "Which pair of models both list client + server as their main entities?",
        options: [
          "Publish-subscribe and push-pull",
          "Push-pull and exclusive pair",
          "Publish-subscribe and request-response",
          "Request-response and exclusive pair",
        ],
        answer: 3,
        explain: "The difference is that exclusive pair keeps a persistent, two-way connection.",
      },
      {
        q: "A live IoT dashboard that receives sensor updates immediately and also sends commands back should use:",
        options: ["exclusive pair", "push-pull", "simplex broadcast", "request-response only"],
        answer: 0,
        explain: "That is the notes' exclusive pair example.",
      },
    ],
    fillBlanks: [
      {
        q: "In push-pull, the consumer ___ messages from the queue.",
        answer: "pulls",
        alt: ["pull"],
      },
      {
        q: "The three entities in push-pull are producer, ___ and consumer.",
        answer: "queue",
      },
      {
        q: "The exclusive pair model keeps a ___ connection open between client and server.",
        answer: "persistent",
      },
      {
        q: "The exclusive pair connection is typically full-___.",
        answer: "duplex",
      },
      {
        q: "Exclusive pair: we maintain a direct ___-way connection.",
        answer: "two",
        alt: ["2"],
      },
    ],
    trueFalse: [
      {
        q: "Push-pull uses a broker to distribute messages by topic.",
        answer: false,
        explain: "Push-pull uses a queue. The broker belongs to publish-subscribe.",
      },
      {
        q: "In push-pull, the queue acts as a buffer when producers send faster than consumers can process.",
        answer: true,
        explain: "That's why it suits different production and processing rates.",
      },
      {
        q: "In exclusive pair, the client must open a new connection for every message.",
        answer: false,
        explain: "The notes say the opposite: one established connection is reused.",
      },
      {
        q: "WebSocket-based communication commonly follows the exclusive pair model.",
        answer: true,
        explain: "Persistent, bidirectional communication.",
      },
      {
        q: "Exclusive pair is a stateless model, like request-response.",
        answer: false,
        explain: "It is stateful: the connection stays open and the server is aware of it.",
      },
      {
        q: "In push-pull, producers do not need to know who the consumers are.",
        answer: true,
        explain: "The queue decouples them.",
      },
    ],
    flashcards: [
      { front: "Push-pull model", back: "Separates producer from consumer: producer pushes messages into a queue, consumer pulls them from the queue." },
      { front: "Push-pull example (notes)", back: "1000 sensors put data in a queue; processing system retrieves messages as resources become available." },
      { front: "When is push-pull useful?", back: "When the rate of data generation and the rate of processing are different. Gives decoupling." },
      { front: "Exclusive pair model", back: "A persistent, typically full-duplex connection between two entities (client and server); both can send over it." },
      { front: "Exclusive pair example (notes)", back: "Real-time IoT dashboard keeps a connection to the server; server pushes sensor updates, dashboard sends commands back." },
      { front: "Exclusive pair technology", back: "WebSocket." },
      { front: "Main entities of the four models", back: "RR: client + server. PS: publisher + broker + subscriber. PP: producer + queue + consumer. EP: client + server." },
      { front: "Memory lines for push-pull and exclusive pair", back: "Push-pull: I put it in the queue; you take it when ready. Exclusive pair: we maintain a direct two-way connection." },
      { front: "Stateless vs stateful models", back: "Request-response is stateless; exclusive pair is stateful (open connection known to the server)." },
    ],
    examples: [
      {
        title: "Which model fits?",
        items: [
          "Electricity company collecting readings from 1 million smart meters at midnight for overnight billing: push-pull",
          "Remote-controlled drone sending live position while receiving steering commands: exclusive pair",
          "Phone app checking a water tank level when you open it: request-response",
          "Smoke alarm event that must reach the owner's phone, the building guard's panel and the fire system: publish-subscribe",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain the push-pull communication model with a diagram and an example.",
        solution: `The push-pull model separates the producer of information from the
consumer. A producer pushes messages into a queue, while a consumer
pulls messages from that queue.

     Producer
        |
        | Push
        v
      Queue   [m][m][m][m]
        |
        | Pull
        v
     Consumer

Example: imagine 1000 sensors generating data. Instead of requiring a
processing system to handle every message immediately, data is placed
into a queue. The processing system retrieves messages from the queue
as resources become available.

This provides decoupling between data production and data
consumption, so it is useful when the rate of data generation and the
rate of processing are different. The queue acts as a buffer.`,
      },
      {
        problem: "Explain the exclusive pair communication model. How is it different from request-response?",
        solution: `The exclusive pair model establishes a persistent, typically
full-duplex connection between two entities.

     Client
      |  ^
      v  |   persistent connection
     Server

Both sides can send information to each other over the established
connection. The client does not need to establish a new connection
for every message.

Example: a real-time IoT dashboard maintains a connection with a
server. The server sends updated sensor information immediately; the
dashboard can also send commands back. WebSocket-based communication
follows this model.

Exclusive pair                     | Request-response
-----------------------------------|-----------------------------------
One persistent connection          | New request for each exchange
Full-duplex: both sides send any   | Client asks, server answers
time                               |
Stateful (server knows open        | Stateless
connections)                       |
WebSocket                          | HTTP`,
      },
      {
        problem: "Compare the four IoT communication models.",
        solution: `Model            | Entities              | Middle part | Typical tech
-----------------|-----------------------|-------------|--------------
Request-response | Client + server       | none        | HTTP, CoAP
Publish-subscribe| Publisher + broker +  | broker      | MQTT
                 | subscriber            |             |
Push-pull        | Producer + queue +    | queue       | message queues
                 | consumer              |             |
Exclusive pair   | Client + server       | persistent  | WebSocket
                 |                       | connection  |

Behaviour:
 - Request-response: synchronous, client waits; stateless.
   "I ask, you answer."
 - Publish-subscribe: publisher doesn't know subscribers; broker
   delivers to all who subscribed to the topic.
   "I publish, whoever subscribed receives."
 - Push-pull: queue decouples production and consumption; useful when
   rates differ.
   "I put it in the queue; you take it when ready."
 - Exclusive pair: persistent full-duplex connection; stateful.
   "We maintain a direct two-way connection."`,
      },
    ],
  },
  {
    id: "iot-communication-apis",
    number: 13,
    chapter: LEC4,
    title: "IoT Communication APIs: REST-Based and WebSocket-Based",
    summary:
      "What an API is, REST (resources, HTTP methods GET/POST/PUT/DELETE, statelessness, request-response), WebSocket (persistent, bidirectional, full-duplex, handshake, exclusive pair), and the REST vs WebSocket comparison.",
    content: `## What is an API?

**API = Application Programming Interface.** From the notes: an API provides a defined way for software components to communicate with and request services from one another. In IoT, communication APIs allow applications, devices and services to exchange information.

Two commonly taught approaches:

1. REST-based communication APIs
2. WebSocket-based communication APIs

## 1. REST-based communication APIs

**REST = Representational State Transfer.** REST is an architectural style for designing network services. It commonly uses **HTTP** and follows the **request-response** model.

\`\`\`
   Client
     |
     |  HTTP request
     v
   Server
     |
     |  HTTP response
     v
   Client
\`\`\`

### Resources

In REST, information is represented as **resources**, each with its own address (URI). Notes examples:

\`\`\`
/device/temp
/device/light
/device/humidity
\`\`\`

A client interacts with these resources using HTTP methods.

| Method | Use (notes) | IoT example |
|---|---|---|
| GET | Retrieve information | \`GET /device/temp\` returns the current temperature |
| POST | Submit / create information | \`POST /device/readings\` adds a new reading |
| PUT | Update a resource | \`PUT /device/light\` with {"state": "on"} switches the light on |
| DELETE | Remove a resource | \`DELETE /device/42\` removes a registered device |

The server answers with a status code, for example **200 OK**, **201 Created** or **404 Not Found**. Data is usually sent as JSON.

### Statelessness

One of the most important characteristics of REST. Each request should contain all the information the server needs to understand and process it; the server doesn't rely on stored session state from previous requests.

\`\`\`
Request 1 -> Server
Request 2 -> Server
Request 3 -> Server
\`\`\`

Each request is handled independently from the server's point of view. A practical result: any of several servers can answer any request, which makes REST services easy to scale.

The REST style has other constraints too (client-server, cacheable, layered system, uniform interface, and optional code on demand), but statelessness is the one the notes stress.

## 2. WebSocket-based communication APIs

From the notes: **WebSocket provides persistent, bidirectional, full-duplex communication between a client and a server.** Instead of repeatedly establishing separate request/response interactions, a connection is established once and then both sides can exchange messages over it.

\`\`\`
   Client
    |  ^
    |  |   persistent connection
    v  |
   Server
\`\`\`

How the connection starts (useful extra detail):

1. The client sends a normal HTTP request with an \`Upgrade: websocket\` header. This is the handshake.
2. The server replies \`101 Switching Protocols\`.
3. From then on the same TCP connection carries WebSocket messages in both directions until either side closes it. URLs use \`ws://\` or the encrypted \`wss://\`.

This makes WebSocket suitable for applications needing **low-latency, continuous communication**. Each message carries very little header overhead compared with a full HTTP request. WebSocket APIs follow the **exclusive pair** communication model.

IoT examples: a live dashboard showing machine readings every half second; a smart-home app where tapping "lock" acts at once and the lock's status appears without refreshing.

## REST vs WebSocket

From the notes, with one extra row:

| REST | WebSocket |
|---|---|
| Usually request-response | Persistent connection |
| Client generally initiates requests | Both sides can send messages |
| Stateless interaction | Stateful interaction |
| HTTP-based | WebSocket protocol (starts with an HTTP handshake) |
| Suitable for resource-oriented APIs | Suitable for continuous, real-time communication |
| Follows the request-response model | Follows the exclusive pair model |

### Which one to use?

- Use REST when the client fetches or changes data now and then: reading a sensor's last value, registering a device, getting a day's history.
- Use WebSocket when data must flow constantly or the server must push updates at once: live charts, remote control, alarms on an open dashboard.

## Common mistakes

- Expanding REST as "Remote State Transfer". It is **Representational** State Transfer.
- Calling REST a protocol. It is an architectural style; HTTP is the protocol it usually uses.
- Writing WebSocket as stateless. The notes call it stateful; REST is the stateless one.
- Mixing PUT and POST: POST creates/submits, PUT updates.

## How this shows up in the mid

"Explain REST-based communication APIs" (resources, methods, statelessness, diagram), "Explain WebSocket-based APIs", and "Differentiate between REST and WebSocket" are all likely. Match each to its model: REST -> request-response, WebSocket -> exclusive pair.`,
    mcqs: [
      {
        q: "REST stands for:",
        options: [
          "Remote Execution Service Transfer",
          "Representational State Transfer",
          "Reliable Embedded Socket Technology",
          "Request State Transmission",
        ],
        answer: 1,
        explain: "Representational State Transfer.",
      },
      {
        q: "REST is best described as:",
        options: [
          "a transport layer protocol",
          "a type of sensor",
          "an architectural style for designing network services",
          "a publish-subscribe broker",
        ],
        answer: 2,
        explain: "It's a style that commonly uses HTTP.",
      },
      {
        q: "Which HTTP method is used to retrieve information?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: 0,
        explain: "GET retrieves; POST submits/creates; PUT updates; DELETE removes.",
      },
      {
        q: "Which HTTP method is used to update an existing resource?",
        options: ["GET", "DELETE", "POST", "PUT"],
        answer: 3,
        explain: "PUT updates a resource.",
      },
      {
        q: "Statelessness in REST means:",
        options: [
          "the server keeps a session for every client",
          "each request contains all the information needed; the server does not rely on stored session state",
          "the client never sends data",
          "the connection stays open forever",
        ],
        answer: 1,
        explain: "Each request is handled independently from the server's perspective.",
      },
      {
        q: "WebSocket provides:",
        options: [
          "one-way simplex communication",
          "a new connection for every message",
          "queue-based communication",
          "persistent, bidirectional, full-duplex communication",
        ],
        answer: 3,
        explain: "That is the notes' definition.",
      },
      {
        q: "WebSocket APIs follow which communication model?",
        options: ["Exclusive pair", "Request-response", "Push-pull", "Publish-subscribe"],
        answer: 0,
        explain: "A persistent two-way connection between client and server.",
      },
      {
        q: "In the WebSocket handshake, the server agrees to switch with which HTTP status?",
        options: ["200 OK", "404 Not Found", "101 Switching Protocols", "201 Created"],
        answer: 2,
        explain: "The client sends Upgrade: websocket and the server answers 101.",
      },
      {
        q: "According to the notes' table, which is true of WebSocket compared with REST?",
        options: [
          "Stateless interaction",
          "Client generally initiates every exchange",
          "Suitable for resource-oriented APIs",
          "Stateful interaction where both sides can send messages",
        ],
        answer: 3,
        explain: "REST is stateless and client-initiated; WebSocket is stateful and both sides send.",
      },
      {
        q: "A REST resource for a device's light level, as in the notes, would look like:",
        options: ["/device/light", "ws://light", "topic#light", "light.queue"],
        answer: 0,
        explain: "The notes list /device/temp, /device/light, /device/humidity.",
      },
    ],
    fillBlanks: [
      {
        q: "API stands for Application ___ Interface.",
        answer: "Programming",
        alt: ["programming"],
      },
      {
        q: "In REST, information is represented as ___.",
        answer: "resources",
        alt: ["resource"],
      },
      {
        q: "The HTTP method ___ is used to remove a resource.",
        answer: "DELETE",
        alt: ["delete"],
      },
      {
        q: "One of the most important characteristics of REST is ___.",
        answer: "statelessness",
        alt: ["stateless"],
      },
      {
        q: "WebSocket is suitable for applications requiring low-___ continuous communication.",
        answer: "latency",
      },
      {
        q: "REST commonly uses the ___ protocol.",
        answer: "HTTP",
        alt: ["http", "https"],
      },
    ],
    trueFalse: [
      {
        q: "REST follows the request-response model.",
        answer: true,
        explain: "Client sends an HTTP request, server sends an HTTP response.",
      },
      {
        q: "POST is used to update an existing resource and PUT is used to create a new one.",
        answer: false,
        explain: "The notes say POST submits/creates; PUT updates.",
      },
      {
        q: "In a WebSocket connection, only the client can send messages.",
        answer: false,
        explain: "Both sides can send at any time over the persistent connection.",
      },
      {
        q: "WebSocket avoids repeatedly establishing separate request/response interactions.",
        answer: true,
        explain: "The connection is set up once and reused.",
      },
      {
        q: "REST interaction is stateful and WebSocket interaction is stateless.",
        answer: false,
        explain: "It's the other way round.",
      },
      {
        q: "A WebSocket connection starts with an HTTP handshake.",
        answer: true,
        explain: "The client sends an HTTP request with Upgrade: websocket.",
      },
    ],
    flashcards: [
      { front: "API (definition)", back: "Application Programming Interface: a defined way for software components to communicate with and request services from one another." },
      { front: "Two IoT communication API types", back: "REST-based and WebSocket-based." },
      { front: "REST", back: "Representational State Transfer: an architectural style for network services; uses HTTP; request-response model." },
      { front: "REST resources (notes)", back: "/device/temp, /device/light, /device/humidity, accessed with HTTP methods." },
      { front: "HTTP methods", back: "GET retrieve, POST submit/create, PUT update, DELETE remove." },
      { front: "Statelessness", back: "Each request carries all info the server needs; server doesn't rely on stored session state. Each request handled independently." },
      { front: "WebSocket", back: "Persistent, bidirectional, full-duplex client-server communication; connection set up once, then both sides exchange messages." },
      { front: "WebSocket handshake", back: "HTTP request with Upgrade: websocket -> server replies 101 Switching Protocols -> ws:// or wss:// messages both ways." },
      { front: "REST vs WebSocket (4 rows)", back: "Request-response vs persistent; client initiates vs both send; stateless vs stateful; HTTP vs WebSocket protocol." },
      { front: "API -> model mapping", back: "REST -> request-response. WebSocket -> exclusive pair." },
    ],
    examples: [
      {
        title: "REST calls for a smart home",
        items: [
          "GET /device/temp -> 200 OK, {\"temp\": 29.5}",
          "PUT /device/light with {\"state\": \"off\"} -> 200 OK, bulb switches off",
          "POST /devices with a new sensor's details -> 201 Created",
          "DELETE /devices/7 -> removes an old sensor from the system",
          "GET /device/humidity on a device id that doesn't exist -> 404 Not Found",
        ],
      },
      {
        title: "REST or WebSocket?",
        items: [
          "Monthly electricity history page: REST",
          "Live heart-rate graph on a hospital monitor screen: WebSocket",
          "Registering a new soil sensor: REST",
          "Remote control of a robotic arm with live feedback: WebSocket",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain REST-based communication APIs. Describe resources, HTTP methods and statelessness.",
        solution: `REST = Representational State Transfer. REST is an architectural
style for designing network services. It commonly uses HTTP and
follows the request-response model.

     Client
       |
       | HTTP request
       v
     Server
       |
       | HTTP response
       v
     Client

Resources: in REST, information is represented as resources, e.g.
   /device/temp
   /device/light
   /device/humidity
A client interacts with these using HTTP methods:
   GET    - retrieve information
   POST   - submit / create information
   PUT    - update a resource
   DELETE - remove a resource

Statelessness: each request contains the information necessary for
the server to understand and process it; the server does not rely on
stored session state from previous requests.
   Request 1 -> Server
   Request 2 -> Server
   Request 3 -> Server
Each request is handled independently.`,
      },
      {
        problem: "Explain WebSocket-based communication APIs with a diagram.",
        solution: `WebSocket provides persistent, bidirectional, full-duplex
communication between a client and a server. Instead of repeatedly
establishing separate request/response interactions, a connection is
established and then both sides exchange messages over it.

     Client
      |  ^
      v  |   persistent connection
     Server

Steps:
 1. Client sends an HTTP request with "Upgrade: websocket"
    (handshake).
 2. Server replies "101 Switching Protocols".
 3. Both sides send messages over the same connection (ws:// or
    wss://) until one closes it.

This makes WebSocket suitable for applications requiring low-latency,
continuous communication, e.g. a live IoT dashboard that gets sensor
updates instantly and sends commands back.
WebSocket APIs follow the exclusive pair communication model.`,
      },
      {
        problem: "Differentiate between REST and WebSocket communication APIs.",
        solution: `REST                              | WebSocket
----------------------------------|----------------------------------
Usually request-response          | Persistent connection
Client generally initiates        | Both sides can send messages
requests                          |
Stateless interaction             | Stateful interaction
HTTP-based                        | WebSocket protocol (starts with
                                  | an HTTP handshake)
Suitable for resource-oriented    | Suitable for continuous real-time
APIs                              | communication
Request-response model            | Exclusive pair model
e.g. GET /device/temp             | e.g. live dashboard <-> server`,
      },
      {
        problem: "A smart home app needs to (a) show the last 7 days of temperature, (b) switch a light on, and (c) show live motion alerts the moment they happen while the app is open. Which API style would you use for each? Write the REST request where applicable.",
        solution: `(a) REST. A one-off fetch of stored data.
    GET /device/temp/history?days=7

(b) REST. A single update to a resource.
    PUT /device/light   body: {"state": "on"}
    (WebSocket would also work if a connection is already open, but
    REST is enough for a single command.)

(c) WebSocket. The server must push each alert instantly without the
    app asking. A persistent, full-duplex connection (exclusive pair)
    gives low latency; with REST the app would have to keep polling.`,
      },
    ],
  },
];

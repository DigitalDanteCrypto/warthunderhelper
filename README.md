# War Thunder Helper

A small webapp that act like an helper to quickly analyze my opponents aircraft.
With this tool you can add - remove, create a aircraft list and have instant access to numerous aircraft details, such as (max airspeed, max wing_speed, weapons, turntime and many more);


## To do

1. Setup a JSON file with mock data or small data sample to setup the mongoDB.
2. Setup the API using JAVA Springboot.
Example : ("/api/v1/aircrafts")
then complexify ("aircrafts/country{id}/tier{id});
We will switch static API to use dynamic ID to retrieve more specific data.

3. Create front-end using React, later on can be switched to SVELTE. Because we don't like react here.
4. Simple UI that display my plane details and my opponent BR most used planes then display their details.


## Data example
```
{
  "id": 1,
  "name": "p51-NA-20",
  "country": "USA",
  "details": [
    {
      "maxSpeed": 611,
      "wingMaxSpeed": 911,
      "flapsMaxSpeed": 342,
      "gearMaxSpeed": 234
    },
    {
      "cannon": 4,
      "type": "MG-12",
      "maxAmmo": 2300
    }
  ]
}
```

## Roles

Benorto : Product Owner, CTO
DigitalDanteCrypto : Senior Lead Dev


## PO's expectation

- Every week I want something.
  - Even if it doesn't work.
  - Even if it's trash.
  - The visual is **NOT** important.
    - Use css framework. If not do not do CSS.

- Make shitty drawings of what you want.
- Take not somewhere.

- Writing tests is a plus.
- Use git the correct way (release cycle, dev branches, quality branch and merge request).
- Don't waste time on thing that are not important.
- Don't hesitate to ask questions.



feature branches -> dev -> main (prod)
feature branches -> 
feature branches -> 
feature branches -> 

After two weeks, we release in prod.


```
Analysis -> Design -> Implementation -> Testing
```



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

````
## Roles

Benorto : Product Owner, CTO
DigitalDanteCrypto : Senior Lead Dev

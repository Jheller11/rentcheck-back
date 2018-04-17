## Basic Idea:

* This is an application that uses a machine learning algorithm to generate a model of rents accross Washington DC based on a variety of factors including: sq. feet, number of bedrooms, parking, age of building/unit, number of bathrooms, and possibly more. It will be made to be used by renters to A) remove the hassle of comparison shopping, simply enter the details of an apartment and see how it compares to the market or B) estimate how much it will take to get your desired apartment based on your preferences (useful for people moving to DC?) Additionally, I will have a section for landlords to view the model/data in order to competitively set rental prices.

### Wireframes in this directory:

A. Homepage/Landing
B. Input form for new estimate
C. Estimate breakdown derived from model
D. Map View for apartments in DB
E. Sign up form
F. Log in form
G. FAQ page
H. Neighborhood profiles

### Where the estimate comes from:

* I will use a multivariate regression algorithm which will take an array of inputs ( x, data listed above) and generate a predicted outcome (y) based on that data. The model is generated based on known x and y data that I will gather. Additionally, i will allow users to contribute to making the model better by saving their apartments.

### Models:

A. User - Admin/Renter/Landlord types (for saved searches, extra data)
B. Apartment - used to create and refine prediction model (more apartments = more accuracy)
C. Neighborhood - used to profile DC neighborhoods (possibly with message board)

### Levels:

1.  MVP:
    a. Take user input and create estimate.
    b. Provide detailed estimate with data from model.
    c. CRUD on apartments model (with edit/delete possibly restricted to admin role)

2.  Bronze:
    a. Map view for neighborhoods and/or apartments.
    b. User sign in for more detailed data/saved searches

3.  Silver:
    a. Message boards in neighborhood profile.
    b. DC news/housing feed (maybe from twitter?)

4.  Gold:
    a. maps
    b. better data
    c. local dc twitter feed

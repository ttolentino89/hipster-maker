# hipster-maker

This project was created for Unit 1 - Project 1 of GA's Software Engineering Immersive course.

As mentioned in the "About" section, there's no real objective or useful purpose for this webapp other than good ol' fashioned humor and a bit of healthy self-introspection, as I too can be a bit of an awful elitist millennial with "elevated" music tastes. Years of collecting vinyl records and reveling in the obscure has ruined me, so why not code something that directly makes fun of this very fact?

Three APIs are used by the Hipster Maker to generate new profiles of 20-30something festival goers who are fans of random music genres which mostly don't exist:

1. UINames Random Person Generator (https://uinames.com/)
2. Binary Jazz Story "Genre"nator (https://binaryjazz.us/wp-json/genrenator/v1/story/)
3. Binary Jazz Music "Genre"nator (https://binaryjazz.us/wp-json/genrenator/v1/genre/)

How it works:

1. User visits website and clicks the "Let's Go!" button which acknowledges their inferior taste in music compared to these millenials who don't even exist.
2. Upon click, a call is made to the UInames API which receives data such as name, age, country, picture amongst other bits (we only use these however)
3. A "newPerson" div pops up displaying this data, as well as a "speech bubble" underneath profile pic + info. User has the option to click this speech bubble, which will trigger yet another event and make a call to the Story Genre-nator API.
4. The data retrieved from the second API will be displayed in a modal on the top, and you can now enjoy a pretentious quote about an obscure genre from a fictional millenial. 

Restrictions:

The UINames API only allows 7 calls per minute, since I'm calling the "extra info" endpoint (https://uinames.com/api/?ext) which allows me to pull random stock profile pictures along with user info. Because I'm calling this endpoint, I also can't filter by certain parameters such as gender, country etc. I could filter by those parameters if I just call those enpoints with the API, but I don't get the other info such as profile pictures and that's kinda the whole point since everyone knows millenials love posting pictures of themselves on instagram.

I have no complaints about either of the Binary Jazz APIs because they're both awesome and I love them. I could literally play with both of these forever since the number of calls you can make is more or less endless.


Post-MVP goals:

Mobile version admittedly needs a lot of work, and I'd really like to get the hamburger menu functional. But honestly, if you're viewing the Hipster Maker on a phone and not a computer with vintage cathode ray tube monitor, are you really even a hipster at all? Gosh, you've probably never even heard of CRTs, haven't you? Ugh.

I'd also like to eventually add Local Storage, because why not? I have plans on adding < and > carousel arrows on the newPerson div so that the user can filter through past, present and new millenials. Having a button somewhere directly on the div to create a new hipster would also be a better user experience, and the right arrow (>) could very well serve as this.

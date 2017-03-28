Feature: Show  available position

@alearangoa
Scenario Outline: contact data is shown as per legal documentation
Given a user select the option 'contact' from huge site
When  read the information of help '<sections>'
Then  <area> is shown as per legal documentation
And   <telephone> is shown as per legal documentation
And   <email> is shown as per legal documentation

Scenarios:
|sections				|area	                |telephone        |email					|
|Become a client.		|Business development	|'+1 718 618 4724'|makesomething@hugeinc.com|
|Media inquiries.		|Communications			|'+1 718 880 3724'|press@hugeinc.com		|
|Careers.				|Recruiting				|'+1 718 625 4843'|work@hugeinc.com			|
|Everything else.		|Front desk			    |'+1 718 625 4843'|hello@hugeinc.com    	|


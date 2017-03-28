Feature: Show  available position

@campi
Scenario: option career is available in menu
Given a user select the option 'careers' from huge site
When  open the link 'Bogota' from technology page
Then  2 open position for QA rol are shown

@arango
Scenario: Evidence open QA positions in Bogota
Given a user select the option 'careers' from huge site
When  open the link 'Bogota' from technology page
Then  9 open position for QA rol are shown

@aleja
Scenario Outline: option career is available in menu
Given a user select the option 'careers' from huge site
When  open the link '<ciudad>' from technology page
Then  <cantidad> open position for QA rol are shown
Scenarios:
|ciudad		|cantidad		|
|Bogota		|2					|
|Bogota		|9					|

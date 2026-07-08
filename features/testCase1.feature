Feature: QA Demo

@reverse
Scenario: Reverse Form Field Labels
    Given I am on the demo website
    When I get to site I get all the labels 
    And I reverse the labels 
    And I sort the reversed labels into Alphabetical order
    And I get the labels again reverse them sort them into alphabtical order
    Then I check the lists

@wordCount
Scenario: Filter Subjects by Word Count
    Given I am on the form site
    When I get the all the autocomplete option appear
    And I extract all the options labels
    And I filter the options containing Two words
    And I split the list based on spaces
    Then I compare length of two words and original list 

@dateDrop
Scenario: Validate & Verify year Dropdown
    Given I am on the site
    When the date field appear I get all the years
    And I make the list readable
    And I check the starting and ending range of the list
    And I check the if the list is in ascending order
    And I check if there are any duplicates in the list
    And I fill a random date in the date field
    And I ensure its visible in the UI
    And I re-extract the years from the date field make it readable
    Then I Check if there are any changes in the years list before and after filling the date 

@radioButton
Scenario: Validate Radio Button Values 
    Given I am on the page
    When the radio buttons appear extarct store into a list
    And I porcess the labels to be in uppercase, no spaces store into another variable.
    And check if the words in array are >=4, in uppercase
    Then I compare the length of the new list and the old list

@HobbyCheckBox
Scenario: Concatenate Hobby Checkboxes
    Given I am on the Demo-Site
    When the Checkboxes are visible get their labels
    And I click on the first two Checkboxes
    And I combine the labels of the first two Checkboxes
    And I fill required content to submit
    Then I check if the combined string is availabel in the modal

@truncatemodal
Scenario: Truncate Modal Text
    Given I am on the modal site
    When I click on the Large Modal
    And I get the text from the large Modal
    And I split the text into words
    And I convert the words into a string
    And I take first 10 words from the string for a new string
    And I check if the new string is in the new string
    Then I close the modal

@randomalerts
Scenario: Randomly Select and Validate Alert Text
    Given I am on the alert page
    When I am on the page get the alert text
    And I get a random Button
    And I Trigger the alert and get the message
    And I turn the message into Lowercase
    And I count the words in the message
    Then I check the count to be greater than 3
    And I check the original string for uppercase.

@revaccordian
Scenario: Reverse Accordion Titles
    Given I am on the Accordion page
    When I am on the page get the Titles
    And I reverse the titles in a new list
    And I collapse the accordian
    And I re-extract the titles
    And I reverse the re-extracted titles
    Then I compare the reversed titles
    
@progressBar
Scenario: Parse and Filter Progress Bar Values
    Given I am on the ProgressBar site
    When I start the progressBar random values get captured
    And I remove percentage token convert to number
    And I filter the values >= 50
    And I get the length of the original list
    And I get the length of filtered list 
    Then I check if the length of filtered list is less than or equal to original list
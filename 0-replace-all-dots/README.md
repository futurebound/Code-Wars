https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript

Today's kata (linked above) was a straightforward challenge built around bugfixing a line of code that wasn't properly working. The intent of the code was to return a string with all .'s replaced with -'s, but was not working as intended. Our goal was to fix this bug.

To solve this kata, I looked at the included code to see what it was attempting to do. The code returned the string utilizing the replace method, so I checked out the MDN documentation available for that method. I noticed that there was no global tag as it was written and was also missing a '\' before the '.'.

After making these two changes, the code was working properly and passed all the tests provided.

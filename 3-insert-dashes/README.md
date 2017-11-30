https://www.codewars.com/kata/insert-dashes/train/javascript

Our task was to create a function that would analyze any length set of numbers, and return that set of numbers with '-' (dashes) in between each pair of odd numbers. 

With this in mind, we created a variable numString that was set to an empty string to push the processed set of numbers to, as well as a variable numArr that was set to the value of the num argument passed into the function that had the toString() and split('') methods called on it. We then utilized a for loop to iterate over the array we had created with the individual numbers in different locations in the array, and included conditional logic to determine whether two consecutive numbers were both odd and if so, to add the current iteration of numArr to the empty string as well as a dash. This way, dashes would only be inserted if another odd number was present in the iteration following the current iteration. The value of numString was then returned following the completion of the for loop.
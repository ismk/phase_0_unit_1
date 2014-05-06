Okay Marek! you ready for this !? let's do it!!! w00t

//First we would declare a function that would loop all the numbers from the array and keeps adding to a total variable.

function sum(takes one parameter a Array)
	variable total equal to 0
	loop through the said Array
		add i (each item in array) to total
	end loop
	return total
end function

//Second declaring mean function

function mean(takes one parameter a Array)
	variable total = function sum(Array) //so the total is in the variable total
	return (total / Array's length) // getting average by dividing total of Array by number of elements in Array
end function

//Third declaring the median function, okay this one is a bit tricky but stay with me!

function median(take one parameter a Array)
	variable middle_number = Round_down ( Array's length / 2) //Array's length / 2 gets the middle number and round down will give out a whole number and not a decimal one.
	if Array is even:
		return Array[middle_number -1] + Array[middle_number] / 2
	else
		return Array[middle_number]


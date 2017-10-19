### Second task for my job application

#### Some thoughts
At first my idea was something similar like what we did in university when writing a compiler: a "lookahead".
So basically loop through the string, get the current value and then lookahead what the next item would be to check if I need to subtract.
It would work the same as my implementation now but with a lot more quirky code as I would need to check if i+1 is greater than the string length and I would have to manipulate
i during the loop in case I need to subtract (lookahead > current).
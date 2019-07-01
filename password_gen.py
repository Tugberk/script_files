#!/usr/bin/python
import random
import string

def gen(N, special_char=string.ascii_lowercase):
    """Generate password with length of N
    N minimum should be 5
    """
    if N < 5:
        N = 5

    pwlist = ([random.choice(special_char),
               random.choice(string.digits),
               random.choice(string.ascii_lowercase),
               random.choice(string.ascii_uppercase),
              ]  
             + [random.choice(string.ascii_lowercase
                              + string.ascii_uppercase
                              + special_char
                              + string.digits) for i in range(N-4)])
    random.shuffle(pwlist)
    return ''.join(pwlist)
    


	

if __name__ == "__main__":
    print(gen(12, "?!"))
    print(gen(12))

	

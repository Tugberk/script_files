import random

def main():
    print 'a simulation for coins. head or tails?'
    outcome = ['heads', 'tails']
    heads = 0
    tails = 0


    for i in range(1,100001):
        my_rand = random.choice(outcome)
        if my_rand == 'heads':
            heads = heads + 1
        else:
            tails = tails + 1
        #print i, my_rand


    print 'heads: %', heads
    print 'tails: %', tails
    again = raw_input('enter')
    main()

main()

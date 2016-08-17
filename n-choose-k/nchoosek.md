# n-choose-k

## example:
a 5-choose-3 problem:
from 5 marbles, choose 3!

same as
(n/k) = n! / k!(n-k)!

ABCDE
  ABC--
  AB-D-
  etc...

but... if we choose "A" it becomes a 4-choose-2 problem

so...

n choose k = (n-1 choose k-1) + (n-1 choose k)

pascal's triangle is equal to

          (0/0)       =     1
        (1/0)(1/1)    =    1 1
      (2/0)(2/1)(2/2) =   1 2 1
    etc...


```
function nChooseK(n, k){
  if(n === 0) return 0;
  return nChooseK(n-1, k-1) + nChooseK(n-1, k)
}
```

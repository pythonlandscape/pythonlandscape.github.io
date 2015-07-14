

* CPython

    - 

    * Numba
    
    
* IronPython

* Jython

* [PyPy](http://pypy.org/):

    - PyPy is a Python interpreter with a builtin JIT which is able to grok Python code very well and run it fast.
    - It can use [cffi](https://cffi.readthedocs.org/) to interface with C code.
    

* [MicroPyton](https://micropython.org/):

    - Micro Python is an implementation of Python 3 optimized to run on a microcontroller.


* [Cython](http://cython.org/): 

    - A static compiler targeting CPython (with initial support for PyPy).
    - Can compile Python code and mixed Cython/C/C++ code.
    - Can also be used as a way to create bindings for existing C/C++ libraries.
    - It's predecessor was Pyrex (which is no longer actively maintaned).
    - Supports Python 2.6 and 3.2 onwards.

* [Nuitka](http://nuitka.net/):

    - Nuitka targets compiling Python code using the libpython library (thus giving a very compatible support for Python code).
    - As it uses libpython, much of its code is still interpreted (and development is going into providing more optimizations).
    - Given its compliant nature, it can be used as a way for distributing Python code.

Experimental (in development)
------------------------------- 

* [Pyston](https://github.com/dropbox/pyston):

    * Pyston is a Python implementation which has a builtin JIT (using LLVM). It's backed by Dropbox.


Deprecated/Unsupported libraries
----------------------------------

Over the years, other technologies were also created (and many resemble the ones above, although they're no longer actively mantained). 


* Psyco

    Psyco was an optimizing JIT for CPython (developed from 2006-2010 by Armin Rigo) which was later abandoned because it was increasingly harder to maintain given its approach.
    Also, its main developer went on to work on PyPy ;) 
    
* Shedskin

    Developed from 2008-2013 by Mark Dufour, it targeted translating pure (but implicitly typed) Python into C++.

* Unladen Swallow

    Back in 2009, Google sponsored a project which targeted integrating a JIT into CPython (using LLVM). 
    The project was later abandoned (although it had nice side effects, such as improving LLVM and providing a structure for performance tests).
Main
---------

* [CPython](http://www.python.org)

    - The main implementation of Python. It's also interesting to note that the language semantics are mostly based on mimicking CPython for other languages. 

    * Curiosities:
    
        - CPython has a [GIL (Global Interpreter Lock)](gil.md)

* [Numba](http://numba.pydata.org/)

    - Numba is an LLVM based JIT for CPython. It's numpy-aware and especially suited for algorithmic code. 


* [Cython](http://cython.org/): 

    - A static compiler targeting CPython (with initial support for PyPy).
    - Can compile Python code and mixed Cython/C/C++ code.
    - Can also be used as a way to create bindings for existing C/C++ libraries.
    - Supports Python 2.6 and 3.2 onwards.
    
* [MicroPyton](https://micropython.org/):

    - Micro Python is an implementation of Python 3 optimized to run on a microcontroller.

* [Nuitka](http://nuitka.net/):

    - Nuitka targets compiling Python code using the libpython library (thus giving a very compatible support for Python code).
    - As it uses libpython, much of its code is still interpreted (and development is going into providing more optimizations).
    - Given its compliant nature, it can be used as a way for distributing Python code (as it's effectively a way to compile Python code).
    
* [PyPy](http://pypy.org/):

    - PyPy is a Python interpreter with a builtin JIT which is able to grok Python code very well and make run it fast.
    - It can use [cffi](https://cffi.readthedocs.org/) to interface with C code.
    - It also has a [GIL (Global Interpreter Lock)](gil.md), but is working in a branch to create a GIL-less version using STM (Software Transactional Memory).
    
* [Stackless Python](http://www.stackless.com/):

    - Stackless Python is a CPython fork which has its own stack which can do context-switching to provide micro-threads and continuations.
    - Alternatives to Stackless Python exist as libraries: [greenlet](https://greenlet.readthedocs.org/) or [asyncio](https://docs.python.org/3/library/asyncio.html) can be used for that purpose.
    


Experimental (in development)
------------------------------- 

* [Pyston](https://github.com/dropbox/pyston):

    * Pyston is a Python implementation which has a builtin JIT (using LLVM). It's backed by Dropbox.

Integration with other languages
---------------------------------

* [Java: Jython](http://www.jython.org)
    
* [.NET: IronPython](http://ironpython.net)

* [JavaScript: pyjs](http://pyjs.org/)

* [JavaScript: RapydScript](http://rapydscript.pyjeon.com/)

Deprecated/Unsupported libraries
----------------------------------

Over the years, other technologies were also created (and many resemble the ones above, although they're no longer actively mantained). 


* [Psyco](http://psyco.sf.net)

    Psyco was an optimizing JIT for CPython (developed from 2006-2010 by Armin Rigo) which was later abandoned because it was increasingly harder to maintain given its approach.
    Also, its main developer went on to work on PyPy ;) 
    
* [Shedskin](http://shed-skin.blogspot.com)

    Developed from 2008-2013 by Mark Dufour, it targeted translating pure (but implicitly typed) Python into C++.

* [Unladen Swallow](https://en.wikipedia.org/wiki/Unladen_Swallow)

    Back in 2009, Google sponsored a project which targeted integrating a JIT into CPython (using LLVM). 
    The project was later abandoned (although it had nice side effects, such as improving LLVM and providing a structure for performance tests).

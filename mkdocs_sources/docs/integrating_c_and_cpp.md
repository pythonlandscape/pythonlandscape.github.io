CPython has a myriad of ways for integrating with C/C++:



Create bindings for other languages without needing a compilation step (pure-Python solutions)
-------------------------------------------------------------------------------------------------

* [cffi](https://cffi.readthedocs.org/en/latest/): Provides a way to call compiled C from Python without any compilation step (also compatible -- and fast -- with PyPy).

* [ctypes](https://docs.python.org/3/library/ctypes.html): Builtin to Python it's a way to call C code from Python without any compilation step (also compatible with PyPy but slower than cffi).

Wrap C/C++ code and compile it to create bindings for existing C/C++ libraries.
-------------------------------------------------------------------------------------------------

* [Cython](http://cython.org/): can compile Python code and mixed Cython/C/C++ code and can be used to create bindings for existing C/C++ libraries (the most "Pythonic" of the listed solutions).

* [SWIG](http://www.swig.org/): Provides a way to wrap C/C++ code and compile it creating bindings (not only for Python, but also a many other languages).

* [PyCXX](http://cxx.sourceforge.net/): Provides a way to wrap C/C++ code and compile it creating bindings for Python.

* [Boost.Python](http://www.boost.org/doc/libs/1_58_0/libs/python/doc/): Provides a way to wrap C/C++ code and compile it creating bindings for Python.

* [SIP](http://riverbankcomputing.co.uk/software/sip/intro): used by PyQt to wrap Qt.

* [shiboken](https://shiboken.readthedocs.org/en/latest/): Used by PySide to wrap Qt.


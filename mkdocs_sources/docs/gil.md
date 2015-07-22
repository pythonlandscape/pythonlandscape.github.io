GIL (Global Interpreter Lock)
------------------------------

The GIL in CPython means that only one thread can be executing at a given time, meaning that it's usually fine using threads for I/O bound threads, but not for CPU bound threads (i.e.: things will not go faster with multiple threads).

However, there are multiple solutions to that issue, which means it's usually not such a big issue (personally, I think that especially early on, Python succeeded not only because it's flexible with a nice syntax, but because the CPython impementation provided excellent interoperability with C):

So, some solutions you can use:

1. Extension modules can release the GIL (so, it's possible to call code which does execute in parallel in CPython if you're willing to use the CPython C API, as long as it doesn't call back into the interpreter -- when the GIL has to be reaquired). 
    - See: [Integrating with C/C++](integrating_c_and_cpp.md) for more details.
   
2. The multiprocessing module provides a clean API for executing interpreters in multiple processes and synchronizing through queues and locks shared by multiple interpreters (although the memory has to be copied back and forth, which can make it unsuitable to use when dealing with huge amounts of data already in-memory).
    - Implementation note: the multiprocessing module doesn't work the same way in all OSes (in Linux it'll fork the process and in Windows it'll create a new process from scratch, which means that it can have some caveats related to things such as open streams/handles, especially on Linux).

3. [Numpy](http://www.numpy.org/) + [numexpr](https://github.com/pydata/numexpr): If you can represent your operations on numpy arrays, numexpr can take care of making it fast (even running on multiple threads).

4. [PyCuda](http://mathema.tician.de/software/pycuda/): if you really need speed and your problem is suited for it, using the CUDA bindings can make it super-fast.

5. [ParallelPython](http://www.parallelpython.com/): if you really need to scale, ParallelPython provides a mechanism for parallel execution of python code for multiple cores and clusters.

6. Use a different Python implementation (both [Jython](http://www.jython.org/) and [IronPython](http://ironpython.net/) run without a GIL and the [PyPy STM](http://pypy.readthedocs.org/en/latest/stm.html) branch may also work for your use case).



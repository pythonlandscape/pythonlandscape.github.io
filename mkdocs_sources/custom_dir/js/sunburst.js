var labelType, useGradients, nativeTextSupport, animate;


(function() {
    var ua = navigator.userAgent,
        iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
        typeOfCanvas = typeof HTMLCanvasElement,
        nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
        textSupport = nativeCanvasSupport && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff)) ? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
    elem: false,
    write: function(text) {
        if (!this.elem)
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};


function init() {
    //start json
var json = {"data": {"$type": "none"}, "children": [{"data": {"$angularWidth": 1, "description": "Interpreters, JITs & Compilers", "$color": "#A1D99B"}, "children": [{"data": {"$angularWidth": 1, "description": "Main", "$color": "#756BB1"}, "children": [{"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://www.python.org\">CPython</a></p>\n<ul>\n<li>\n<p>The main implementation of Python. It's also interesting to note that the language semantics are mostly based on mimicking CPython for other languages. </p>\n</li>\n<li>\n<p>Curiosities:</p>\n<ul>\n<li>CPython has a <a href=\"gil.md\">GIL (Global Interpreter Lock)</a></li>\n</ul>\n</li>\n</ul>\n</li>\n", "description": "CPython", "$color": "#BCBDDC"}, "children": [], "name": "CPython", "id": 2}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://numba.pydata.org/\">Numba</a></p>\n<ul>\n<li>Numba is an LLVM based JIT for CPython. It's numpy-aware and especially suited for algorithmic code. </li>\n</ul>\n</li>\n", "description": "Numba", "$color": "#DADAEB"}, "children": [], "name": "Numba", "id": 3}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://cython.org/\">Cython</a>: </p>\n<ul>\n<li>A static compiler targeting CPython (with initial support for PyPy).</li>\n<li>Can compile Python code and mixed Cython/C/C++ code.</li>\n<li>Can also be used as a way to create bindings for existing C/C++ libraries.</li>\n<li>It's predecessor was Pyrex (which is no longer actively maintaned).</li>\n<li>Supports Python 2.6 and 3.2 onwards.</li>\n</ul>\n</li>\n", "description": "Cython", "$color": "#D9D9D9"}, "children": [], "name": "Cython", "id": 4}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"https://micropython.org/\">MicroPyton</a>:</p>\n<ul>\n<li>Micro Python is an implementation of Python 3 optimized to run on a microcontroller.</li>\n</ul>\n</li>\n", "description": "MicroPyton", "$color": "#C6DBEF"}, "children": [], "name": "MicroPyton", "id": 5}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://nuitka.net/\">Nuitka</a>:</p>\n<ul>\n<li>Nuitka targets compiling Python code using the libpython library (thus giving a very compatible support for Python code).</li>\n<li>As it uses libpython, much of its code is still interpreted (and development is going into providing more optimizations).</li>\n<li>Given its compliant nature, it can be used as a way for distributing Python code (as it's effectively a way to compile Python code).</li>\n</ul>\n</li>\n", "description": "Nuitka", "$color": "#6BAED6"}, "children": [], "name": "Nuitka", "id": 6}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://pypy.org/\">PyPy</a>:</p>\n<ul>\n<li>PyPy is a Python interpreter with a builtin JIT which is able to grok Python code very well and make run it fast.</li>\n<li>It can use <a href=\"https://cffi.readthedocs.org/\">cffi</a> to interface with C code.</li>\n<li>It also has a <a href=\"gil.md\">GIL (Global Interpreter Lock)</a>, but is working in a branch to create a GIL-less version using STM (Software Transactional Memory).</li>\n</ul>\n</li>\n", "description": "PyPy", "$color": "#6BAED6"}, "children": [], "name": "PyPy", "id": 7}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://www.stackless.com/\">Stackless Python</a>:</p>\n<ul>\n<li>Stackless Python is a CPython fork which has its own stack which can do context-switching to provide micro-threads and continuations.</li>\n<li>Alternatives to Stackless Python exist as libraries: <a href=\"https://greenlet.readthedocs.org/\">greenlet</a> or <a href=\"https://docs.python.org/3/library/asyncio.html\">asyncio</a> can be used for that purpose.</li>\n</ul>\n</li>\n", "description": "Stackless Python", "$color": "#FDD0A2"}, "children": [], "name": "Stackless Python", "id": 8}], "name": "Main", "id": 1}, {"data": {"$angularWidth": 1, "description": "Experimental (in development)", "$color": "#A1D99B"}, "children": [{"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"https://github.com/dropbox/pyston\">Pyston</a>:</p>\n<ul>\n<li>Pyston is a Python implementation which has a builtin JIT (using LLVM). It's backed by Dropbox.</li>\n</ul>\n</li>\n", "description": "Pyston", "$color": "#74C476"}, "children": [], "name": "Pyston", "id": 10}], "name": "Experimental (in development)", "id": 9}, {"data": {"$angularWidth": 1, "description": "Integration with other languages", "$color": "#FDAE6B"}, "children": [{"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://www.jython.org\">Java: Jython</a></p>\n</li>\n", "description": "Java: Jython", "$color": "#756BB1"}, "children": [], "name": "Java: Jython", "id": 12}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://ironpython.net\">.NET: IronPython</a></p>\n</li>\n", "description": ".NET: IronPython", "$color": "#BCBDDC"}, "children": [], "name": ".NET: IronPython", "id": 13}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://pyjs.org/\">JavaScript: pyjs</a></p>\n</li>\n", "description": "JavaScript: pyjs", "$color": "#DADAEB"}, "children": [], "name": "JavaScript: pyjs", "id": 14}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://rapydscript.pyjeon.com/\">JavaScript: RapydScript</a></p>\n</li>\n", "description": "JavaScript: RapydScript", "$color": "#D9D9D9"}, "children": [], "name": "JavaScript: RapydScript", "id": 15}], "name": "Integration with other languages", "id": 11}, {"data": {"$angularWidth": 1, "description": "Deprecated/Unsupported libraries", "$color": "#C6DBEF"}, "children": [{"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://psyco.sf.net\">Psyco</a></p>\n<p>Psyco was an optimizing JIT for CPython (developed from 2006-2010 by Armin Rigo) which was later abandoned because it was increasingly harder to maintain given its approach.\nAlso, its main developer went on to work on PyPy ;) </p>\n</li>\n", "description": "Psyco", "$color": "#6BAED6"}, "children": [], "name": "Psyco", "id": 17}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"http://shed-skin.blogspot.com\">Shedskin</a></p>\n<p>Developed from 2008-2013 by Mark Dufour, it targeted translating pure (but implicitly typed) Python into C++.</p>\n</li>\n", "description": "Shedskin", "$color": "#6BAED6"}, "children": [], "name": "Shedskin", "id": 18}, {"data": {"$angularWidth": 1, "html": "<li>\n<p><a href=\"https://en.wikipedia.org/wiki/Unladen_Swallow\">Unladen Swallow</a></p>\n<p>Back in 2009, Google sponsored a project which targeted integrating a JIT into CPython (using LLVM). \nThe project was later abandoned (although it had nice side effects, such as improving LLVM and providing a structure for performance tests).</p>\n</li>\n", "description": "Unladen Swallow", "$color": "#FDD0A2"}, "children": [], "name": "Unladen Swallow", "id": 19}], "name": "Deprecated/Unsupported libraries", "id": 16}], "name": "Interpreters, JITs & Compilers", "id": 20}, {"data": {"$angularWidth": 1, "description": "Integrating with C/C++", "$color": "#74C476"}, "children": [], "name": "Integrating with C/C++", "id": 21}, {"data": {"$angularWidth": 1, "description": "GIL (Global Interpreter Lock)", "$color": "#FDAE6B"}, "children": [], "name": "GIL (Global Interpreter Lock)", "id": 22}], "name": "PythonLandscape", "id": 0}
    //end json
    //init Sunburst
    var sb = new $jit.Sunburst({
        //id container for the visualization
        injectInto: 'infovis',
        //Distance between levels
        levelDistance: 100,
        //Change node and edge styles such as
        //color, width and dimensions.
        Node: {
            overridable: true,
            type: useGradients ? 'gradient-multipie' : 'multipie'
        },
        //Select canvas labels
        //'HTML', 'SVG' and 'Native' are possible options
        Label: {
            type: labelType
        },
        //Change styles when hovering and clicking nodes
        NodeStyles: {
            enable: true,
            type: 'Native',
            stylesClick: {
                'color': '#33dddd'
            },
            stylesHover: {
                'color': '#dd3333'
            }
        },
        //Add tooltips
        Tips: {
            enable: true,
            onShow: function(tip, node) {
                var html = "<div class=\"tip-title\">" + node.name + "</div>";
                var data = node.data;
                if ("html" in data) {
                    html += "" + data.html + "";
                }
                tip.innerHTML = html;
            }
        },
        //implement event handlers
        Events: {
            enable: true,
            onClick: function(node) {
                if (!node) return;
                //Build detailed information about the file/folder
                //and place it in the right column.
                var html = "<h4>" + node.name + "</h4>",
                    data = node.data;
                if ("html" in data) {
                    html += "<br /><br />" + data.html + "";
                }
                $jit.id('inner-details').innerHTML = html;
                //hide tip
                sb.tips.hide();
                //rotate
                sb.rotate(node, animate ? 'animate' : 'replot', {
                    duration: 1000,
                    transition: $jit.Trans.Quart.easeInOut
                });
            }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Add text to the labels. 
        // This method is only triggered on label creation
        onCreateLabel: function(domElement, node) {
            var labels = sb.config.Label.type,
                aw = node.getData('angularWidth');
            if (labels === 'HTML' && (node._depth < 2 || aw > 2000)) {
                domElement.innerHTML = node.name;
            } else if (labels === 'SVG' && (node._depth < 2 || aw > 2000)) {
                domElement.firstChild.appendChild(document.createTextNode(node.name));
            }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Change node styles when labels are placed
        // or moved.
        onPlaceLabel: function(domElement, node) {
            var labels = sb.config.Label.type;
            if (labels === 'SVG') {
                var fch = domElement.firstChild;
                var style = fch.style;
                style.display = '';
                style.cursor = 'pointer';
                style.fontSize = "0.8em";
                fch.setAttribute('fill', "#fff");
            } else if (labels === 'HTML') {
                var style = domElement.style;
                style.display = '';
                style.cursor = 'pointer';
                style.fontSize = "0.8em";
                style.color = "#ddd";
                var left = parseInt(style.left);
                var w = domElement.offsetWidth;
                style.left = (left - w / 2) + 'px';
            }
        }
    });
    //load JSON data.
    sb.loadJSON(json);
    //compute positions and plot.
    sb.refresh();
    //end
    
    
//     window.addEventListener('resize', function(){
//         sb.refresh();
//         console.log('resize');
//     }, true);
    
}
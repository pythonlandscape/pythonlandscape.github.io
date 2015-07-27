import os
import simplejson
import itertools
import markdown
from markdown.extensions import Extension
from markdown.treeprocessors import Treeprocessor

next_id = itertools.count(0).next

class next_color():
    pallete = [
        "756BB1",
        "BCBDDC",
        "DADAEB",
        "D9D9D9",
        "C6DBEF",
        "6BAED6",
        "6BAED6",
        "FDD0A2",
        "A1D99B",
        "74C476",
        "FDAE6B",
    ]
    curr = itertools.cycle(range(len(pallete))).next
    
    def __call__(self):
        return '#' + self.pallete[self.curr()]
    
next_color = next_color()


class MyTreeprocessor(Treeprocessor):
    def __init__(self, markdown_instance=None):
        Treeprocessor.__init__(self, markdown_instance=markdown_instance)
        self.tree = None
        
    def run(self, root):
        self.tree = root
                
        
class MyExtension(Extension):
    
    def extendMarkdown(self, md, md_globals):
        self.tree_processor = MyTreeprocessor(md)
        md.treeprocessors['mypattern'] = self.tree_processor

def handle_markdown(markdown_contents):
    ext = MyExtension()
    md = markdown.Markdown(extensions=[ext])
    md.convert(markdown_contents)
    return ext.tree_processor.tree

def replace_sunburst_js(curdir, repl):
    target = os.path.join(curdir, 'custom_dir', 'js', 'sunburst.js')
    
    contents = open(target, 'r').read()
    start = contents.index('//start json')
    end = contents.index('//end json')
    contents = list(contents)
    contents[start:end] = '//start json\n' + repl + '\n    '
    contents = ''.join(contents) 
    
    open(target, 'w').write(contents)
    
def load_interpreters_jits_and_compilers(curdir, root):
    contents = open(os.path.join(curdir, 'docs', 'interpreters_jits_and_compilers.md'), 'r').read()
    
    children = []
    tree = handle_markdown(contents)
    
    l2_children = []
    
    for r in tree.getchildren():
        if r.tag == 'h2':
            l2_children = []
            children.append({
                'children': l2_children,
                "data": {
                    "description": r.text,
                    "$color": next_color(),
                    "$angularWidth": 1,
                },
                "size": 10,
                "id": next_id(),
                "name": r.text
            })
            
        elif r.tag == 'ul':
            for l2 in r.getchildren():
                if l2.tag == 'li':
                    for l3 in l2.getchildren():
                        if l3.tag == 'p':
                            for l4 in l3.getchildren():
                                if l4.tag == 'a':
                                    md = markdown.Markdown()
                                    html = md.serializer(l2)
                                    l2_children.append({
                                        'children': [],
                                        "data": {
                                            "description": l4.text,
                                            "$color": next_color(),
                                            "$angularWidth": 1,
                                            "html": html
                                        },
                                        "size": 10,
                                        "id": next_id(),
                                        "name": l4.text
                                    })
                                    

    
    root['children'].append({
        'children': children,
        "data": {
            "description": "Interpreters, JITs & Compilers",
            "$color": next_color(),
            "$angularWidth": 1,
        },
        "size": 10,
        "id": next_id(),
        "name": "Interpreters, JITs & Compilers"
    })
    
    
def load_integrating_c_and_cpp(curdir, root):
    contents = open(os.path.join(curdir, 'docs', 'integrating_c_and_cpp.md'), 'r').read()
    children = []
    root['children'].append({
        'children': children,
        "data": {
            "description": "Integrating with C/C++",
            "$color": next_color(),
            "$angularWidth": 1,
        },
        "size": 10,
        "id": next_id(),
        "name": "Integrating with C/C++"
    })
    
def load_gil(curdir, root):
    contents = open(os.path.join(curdir, 'docs', 'gil.md'), 'r').read()
    children = []
    root['children'].append({
        'children': children,
        "data": {
            "description": "GIL (Global Interpreter Lock)",
            "$color": next_color(),
            "$angularWidth": 1,
        },
        "size": 10,
        "id": next_id(),
        "name": "GIL (Global Interpreter Lock)"
    })
    

def main():
    curdir = os.path.dirname(__file__)
    
    children = []
    root = {
        'children': children,
        "data": {
            "$type": "none"
        },
        "id": next_id(),
        "name": "PythonLandscape"
    }
    
    load_interpreters_jits_and_compilers(curdir, root)
    load_integrating_c_and_cpp(curdir, root)
    load_gil(curdir, root)
    
    replace_sunburst_js(curdir, 'var json = ' + simplejson.dumps(root))
            

if __name__ == '__main__':
    main()

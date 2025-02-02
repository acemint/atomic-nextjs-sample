# Atomic Design Pattern

## TL;DR

Use improvised atomic design pattern.
Folder structure is like this at least

```
- src
    - ui
        - atoms.tsx
        - atoms.css
        - molecules.tsx (if not needed then we can cut this directly to organism and start with particle, then work our way to break it down to molecules. As having too atomic components can be hard to maintain)
        - molecules.css
        - organism.tsx
        - organism.tsx
```

## Details

The atomic design pattern shown by Brad Frost, one of the pioneer of Atomic Design Pattern
have 5 layers to it. Atoms, molecules, organisms, templates, and pages.
[brad frost blog](https://atomicdesign.bradfrost.com/chapter-2). Sometimes this might be hard because when we create a website, we don't know how atomic this pattern should be. Even if we know, the time it takes to encapsulate the component might not be worth it, as we need to think of a good name for the component (a good name here should be context-independent). Therefore, the recommended formulation are:

```
- atoms (Contains wrapped native HTML tags, such as <i>, <p>, <h1> & its styling)
- molecule (Not mandatory yet, we work our way up to encapsulate these components)
- organism (Group of molecule, such as navbar, etc)
- templates (Content-less)
- pages (Content template)
```

Some recommended the folder structure like [janelle.wg react example](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97):

```
- src
    - components
        - buttons
            - delete
                - delete-button.jsx
                - styles.css
            - submit
                - submit-button.jsx
                - styles.css
```

But, coming from golang I know that this is troublesome for two reasons:

1. Having too much imports, when the source is just from 1 file
2. Having too much files increases time of navigating
3. Leverage the package name, or in golang's terms "Use the package structure to help you choose good names". (File name such as delete-button are redundant when the hierarchy already states /buttons/delete)

There is definitely an argument that one can't just take golang's patterns toward NextJS or other programming language, however as JS has the capability to rename import like Golang and Python, I don't see the trouble of using this concept.

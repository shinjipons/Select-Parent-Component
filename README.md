I made this plugin with Cursor for Figma because I wanted a way to quickly select the whole component instance to change its properties. Figma's problem is that it does not let you deep select whole component instances. Instead, you are forced to:
- Scan your layers panel to find the component instance
- Cmd + right-click to open the deep selection menu, skim it to find the exact component instance
- Deep select an element and hit Cmd + Enter an arbitrary number of times to select the component instance

All of those ways are slow, inefficient and increases cognitive load for the user.

With Select Parent Component, all you have to do is deep select any element that is contained within a component instance and triggering the plugin will automatically select the nearest component instance that contains your selection.

It works on multiple selection and if you selected something that isn't part of a component instance, a toast notification will let you know that nothing has been found.

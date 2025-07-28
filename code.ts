// Select Nearest Parent Component Instance

// Ensure exactly one node is selected
if (figma.currentPage.selection.length !== 1) {
  figma.notify("Please select exactly one layer.");
  figma.closePlugin();
} else {
  let node = figma.currentPage.selection[0];
  let foundInstance: InstanceNode | null = null;

  while (node.parent && node.parent.type !== "PAGE") {
    node = node.parent;
    if (node.type === "INSTANCE") {
      foundInstance = node;
      break;
    }
  }

  if (foundInstance) {
    figma.currentPage.selection = [foundInstance];
    figma.viewport.scrollAndZoomIntoView([foundInstance]);
    figma.notify(`Selected parent instance: ${foundInstance.name}`);
  } else {
    figma.notify("No parent component instance found.");
  }

  figma.closePlugin();
}

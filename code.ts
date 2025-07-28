// Select Nearest Parent Component Instance

// Check if any nodes are selected
if (figma.currentPage.selection.length === 0) {
  figma.notify("Please select at least one layer.");
  figma.closePlugin();
} else {
  let validParentInstances: InstanceNode[] = [];

  // Process each selected node
  for (let selectedNode of figma.currentPage.selection) {
    let node = selectedNode;
    let foundInstance: InstanceNode | null = null;

    // Traverse up the parent hierarchy
    while (node.parent && node.parent.type !== "PAGE") {
      if (node.parent.type === "DOCUMENT") {
        break;
      }
      node = node.parent as SceneNode;
      if (node.type === "INSTANCE") {
        foundInstance = node;
        break;
      }
    }

    // Add to valid instances if found
    if (foundInstance) {
      validParentInstances.push(foundInstance);
    }
  }

  if (validParentInstances.length > 0) {
    // Remove duplicates (in case multiple selected items have the same parent)
    const uniqueInstances = validParentInstances.filter((instance, index, self) =>
      index === self.findIndex(i => i.id === instance.id)
    );

    figma.currentPage.selection = uniqueInstances;

    if (uniqueInstances.length === 1) {
      figma.notify(`Selected parent instance: ${uniqueInstances[0].name}`);
    } else {
      figma.notify(`Selected ${uniqueInstances.length} parent instances`);
    }
  } else {
    figma.notify("No parent component instances found for any selected items.");
  }

  figma.closePlugin();
}

# 1). Explain what the simple List component does.

-The useState and useEffect hooks are used by the List component, a functional component, to control the component's state. UseEffect is used to reset the selected index to null whenever the items prop changes, while useState is used to define the selectedIndex state variable, which tracks the currently selected item in the list.

The array of items in the items parameter is mapped over by the list component, which renders a single SingleListItem component for each item in the list. The index, chosen state, text, and click event handler of each item are props that are passed to the SingleListItem component, which is a memoized functional component.

The text prop serves as the content of the li element that the SingleListItem component renders. The value of the isSelected prop, which is true when the item is chosen, determines the colour of the element's background. The selectedIndex state variable in the List component is updated when the li element's onClick event invokes the onClickHandler prop with the item's index as an argument.



## 2). What problems / warnings are there with code?

- A TypeError will occur due to the incorrect declaration of the items prop in the WrappedListComponent component. PropTypes.shapeOf should be changed with PropTypes.arrayOf(PropTypes.shape("text: PropTypes.string.isRequired")) because it is an invalid function.
- The onClickHandler property in the WrappedSingleListItem component is not being called correctly. It should be passed as a callback function to be triggered when the list item is clicked.
- When trying to execute mapping operations on the WrappedListComponent component, the default value of null for the items prop may cause problems. To prevent these issues, it is preferable to assign it to an empty array ([]).
- The WrappedSingleListItem component incorrectly sets the isSelected property. As it stands, when selectedIndex is truthy, all list items will be green. This problem can be resolved by setting isSelected to isSelected = (selectedIndex === index).
- The key prop is not being set correctly in the map function of the WrappedListComponent component. This can be fixed by adding key={index} to the SingleListItem component.
- Initially the useState function was set incorrectly as [setSelectedIndex, selectedIndex] = useState(); but it should be set as const [selectedIndex , setSelectedIndex] = useState(null);

## 3). Please fix, optimize, and/or modify the component as much as you think is necessary.

- The optimised and updated code is cleaned 
# Development

### Link to Deployed Website
If you used the stencil code, this is `https://happykitty444.github.io/DevelopmentUIUX`

### Goal and Value of the Application
A simple tea shop website where a user can add drinks to their cart, see the price of each item, the quantity of each item in their cart, and the total price of their cart, and filter by caffiene inclusion or by type of drink, as well as sort the items alphabetically, or by price in ascending or descending order. It serves as a nice landing page for the shop, allows users to browse their selection dynamically, and plan orders ahead of time, much like the Trader Joes' website's online cart.

### Usability Principles Considered
I attempted to ensure sufficient contrast for readability, and kept padding uniform to ensure a nice grid layout for the items. I made sure there was a button to add items to cart in the item card, and to remove an item from the cart in the cart. If you click it, it removes only one item at a time, decremeting an item quantity variable in the cart state. That value is incremented if you add a duplicate item to the cart. The buttons have hover states, and the sort buttons specifically have a focus state to indicate which sort is currently enabled.

### Organization of Components
The App.js component is a major file that sets the background and renders a MainItems component. This component holds the item data, the cartItems array state, the cartQuantities array state, and all of the functions relating to adding, removing, filtering, and sorting these arrays. It also renders a column whose first item is a Filters component containing titles and buttons to trigger the different filters and sorts. It renders the cart below that in the column, and then renders a second column containing the list of Items for purchase.

### How Data is Passed Down Through Components
The MainItems component renders the item list by mapping them to a TeaItem component, which takes the attributes (name, image, description, containsCaffeine, drinktype, and price) as fields in an item prop and the addToCart function as props, and renders one item card using that information. It also renders the Filters component, which takes the filtering, sorting, and resetting functions MainItems as props so that it can call them on button click as it renders the filter component.

### How the User Triggers State Changes
The user triggers state changes by:
  Clicking on a filter button, which filters the current new RenderList state array for matching items and sets the new RenderList state array to be that array, which is the array mapped to the TeaItem components to be rendered
  Clicking on a sort button, which sorts and sets the current new RenderList state array by a certain criteria
  Adding an item to cart, which adds the item to a CartItems state which is mapped to cart items to be rendered, and adds 1 or increments the quantity of that index in the CartQuatities state array, which is mapped to the cart items' quantities
  Removing an item from the cart, which exactly reverses adding an item to the cart

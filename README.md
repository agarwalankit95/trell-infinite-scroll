# Trell Infinite Scroll


## Requirements

Infinite Scroll is a technique that automatically
adds the next page as the user scrolls down through
content, more content is loaded. 

### API contract

1. Ref: https://openlibrary.org/dev/docs/api/search
2. http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=1&limit=5

### Tasks
- TO-DO 1 : The task is to implement custom infinite scroll component 
- TO-DO 2 : Fetch more data only when the last item is visible in the viewport 
- TO-DO 3 : The fetch more logic should be such that it is easy to customise when the new set of data is to be loaded. Eg: instead of last item, the fetch more logic can be triggered from 5th element from the last or nth row
- TO-DO 4 : Show loading text while the data is being fetched 
- TO-DO 5 : Handle the error cases gracefully 
- TO-DO 6 : Diplay a button to scroll to top on click
- TO-DO 7 : Clicking on the item, display the details 
- TO-DO 8 : Maintain the data/scroll position when coming back from the details page (prevent extra api call)
- Display a search bar and cards with the names
- SEO ?

Reference : https://trell.co/watch 

All the best !



## Getting Started

1.  Install dependencies:

    ```bash
    npm install
    ```

2.  Start **nodemon server**:

    ```bash
    npm run dev
    ```
   
3.  Open below link to view page:

    - [localhost:3000](http://localhost:3000)

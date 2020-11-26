# IncomeStatementUI

Prototype for the display of an income statement as a take home coding exercise.

## Running locally

This app was generated on codesandbox with create-react-app and follows the standard conventions for running

```
$ npm install
$ npm start
```

The code can be viewed in a browser here: [https://s3jue.csb.app/](https://s3jue.csb.app/)

The codesandbox is here: [https://codesandbox.io/s/infallible-neumann-s3jue](https://codesandbox.io/s/infallible-neumann-s3jue)

## Instructions

When you open this project, codesanbox will automatically fork and redirect you to your own fork. Please send me the link when you're done building the project.



## Spec

- Finish up the responsive web app on React that shows an income statement for a company.
- Feel free to edit and mold any of the provided code to your needs, including the api data structure.
- Categories should be collapsable, and every category should have the totals in the last row.
- An input field for a search/filter. This statement list can be 100+ items, a user might want to filter the results by a category or sub category name.
- Users should be able to render the results by a month or quarter.
- Google “income statement” images for inspiration.
  - Example: https://uploads-ssl.webflow.com/5982c98c4ee55300015c8730/5b24c40df792a36774a73eb3_Apple_Income_Statement_Sections.jpg

## Feedback from first submission

Thanks for your submission, we took a look at it and there’s a few concerns. If you could take a bit more time to work on these it will help us get a better picture.

- Responsiveness is important, it should look ok on the mobile.
- Time period selector should have two options month or quarter. The results should be rendered having month columns or quarter columns.
- Search should not be case sensitive and it should also search in category names.

## Additional Specs and Separation of Concerns

The responsiveness is intuitive and straight-forward as is the case-insensitive search,  but I am not sure I completely understand the requirements for the time period selector. You mean the dropdown should have only two options in it? Either show a series of columns representing all the months or representing all the quarters? In that case, should I add more mock data to the API "response"?

And, last question, what is the expected behavior of the category search? If someone types in the input field and it gets a match on a category -- does it show all of the subcategories that it's a parent of because it's a match? Or should it show only the subcategories that also match the filter keyword? And, if the subcategories are also filtered, then what happens if there is a match on the category but none of the subcategories?

As for separation of concerns across components, given more time I would definitely break the components into more "single-concept" lego bricks so they had only one job to do - or at least as much as possible. I would also make sure that the data layer was more like a services layer -- either using a flux-pattern with a store or perhaps a real-time event subscription. That way there are the functional, display-type components that get wrapped by the data -- either as "container" or "provider" so the "visual" components are quite separate from any business logic or data manipulation. I'd also have a more orthogonal breakdown for utility or shared functionality that has cross-cutting concerns. For this particular exercise, I would say the biggest problem in what I wrote is how tied the components all are to the data model coming back from the API - there would be an immediate error if the response was different (and they always do seem to change without notice). The entanglement there makes it brittle for any future work. Some centralized model definitions that can be changed without breaking the downstream components would be a big improvement here.

## Clarification of Specs

Yes, the time period selector has two options "monthly" and "quarterly", and yes, the columns represent all the months or all the quarters. Sorry if this was not clear from the initial conversation, I'll need to update the readme a bit. Feel free to add more mock data.

In terms of category search, let's say there are 100 categories and 1000 rows overall. I'm not always looking for a specific row, I might be looking for a category, and yes, if there's a match on a category but not on the sub items, then it's ok to render the whole category with its children.
  
## Evaluation Notes 

The table is now responsive, in rough terms without any real design polish.

Filter works for both category and subcategory and is not case sensitive

Month/Quarter dropdown is unchanged. Work in progress can be found on the branch WIP.




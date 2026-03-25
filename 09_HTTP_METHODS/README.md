## The Primary HTTP Methods

### GET (Retrieve)
* Purpose: To fetch data from the server.

* Characteristics: Should not change the server state. Data is passed in the URL (query parameters).

* In your code: Your current switch(myUrl.pathname) is essentially handling GET requests.

### POST (Create)
* Purpose: To send data to the server to create a new resource (e.g., submitting a signup form).

* Characteristics: Data is sent in the Request Body, not the URL. This is more secure for passwords or large files.

### PUT (Update - Replace)
* Purpose: To update an existing resource by replacing it entirely with new data.

* Characteristics: If the resource doesn't exist, it might create one.

### PATCH (Update - Partial)
* Purpose: To update only specific parts of a resource (e.g., changing just a user's email, not their whole profile).

### DELETE (Remove)
* Purpose: To remove a specific resource from the server.
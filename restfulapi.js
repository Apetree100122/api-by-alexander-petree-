{"info":
{"_postman_id":"fb1cd8aa-a012-4a8a-b822-609c9cf8cc9c",
	"name":"RESTful API basics: CRUD, test & variable",
	"description":
	"# 🚀 Get started here\n This template guides you through CRUD operations (GET, POST, PUT, DELETE), 
	variables, and tests.
		\n\n
		## 🔖 **How to use this template**\n\n
			#### **Step 1: Send requests**\n\n
				RESTful APIs allow you to perform CRUD operations using the POST, GET, PUT, and DELETE HTTP methods.\n\n
					This collection contains each of these request types.
						Open each request and click \"Send\" 
						to see what happens.\n\n
						#### **Step 2: View responses**\n\n
							Observe the response tab for status code (200 OK),
								response time, and size.\n\n#### **Step 3: Send new Body data**\n\nUpdate or add new data in \"Body\" 
								in the POST request.
								Typically, Body data is also used in PUT request.\n\n```\n{\n  
				\"name\": \"Add your name in the body\"\n}\n\n```\n\n
								#### **Step 4: Update the variable**\n\n
									Variables enable you to store and reuse values in Postman.
										We have created a variable called `base_url` with the sample request
										[https://postman-api-learner.glitch.me](https://postman-api-learner.glitch.me). 
										Replace it with your API endpoint to customize this collection.\n\n#### **Step 5: Add tests in the \"Tests\" tab**\n\n
										Tests help you confirm that your API is working as expected.
										You can write test scripts in JavaScript and view the output in the \"Test Results\" 
										tab.\n\n
										<img src=\"https://content.pstmn.io/b5f280a7-4b09-48ec-857f-0a7ed99d7ef8/U2NyZWVuc2hvdCAyMDIzLTAzLTI3IGF0IDkuNDcuMjggUE0ucG5n\">
										\n\n
										## 💪 Pro tips\n\n-
											Use folders to group related requests and organize the collection.\n-
											Add more scripts in \"Tests\" 
											to verify if the API works as expected and execute flows.\n    \n\n
											## ℹ️ Resources\n\n
												[Building requests](https://learning.postman.com/docs/sending-requests/requests/)  \n
																						[Authorizing requests](https://learning.postman.com/docs/sending-requests/authorization/)  \n
																																	 [Using variables](https://learning.postman.com/docs/sending-requests/variables/)  \n
																																										 [Managing environments](https://learning.postman.com/docs/sending-requests/managing-environments/)  \n
																																																						 [Writing scripts](https://learning.postman.com/docs/writing-scripts/intro-to-scripts/)",
																																																															 "schema":"https://schema.getpostman.com/json/collection/v2.1.0/collection.json"},
																																																															 "item":[{"name":"Get data","event":[{"listen":"test","script":{"type":"text/javascript","exec":["pm.test(\"Status code is 200\", function () {","    pm.response.to.have.status(200);","});"]}}],"id":"6a0dd712-3837-42f5-8d9a-10a0e49ba011","request":{"method":"GET","header":[],"url":{"raw":"{{base_url}}/info?id=1","host":["{{base_url}}"],"path":["info"],"query":[{"key":"id","value":"1"}]},"description":"This is a GET request and it is used to \"get\" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).\n\nA successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data."},"response":[]},{"name":"Post data","event":[{"listen":"test","script":{"type":"text/javascript","exec":["pm.test(\"Successful POST request\", function () {","    pm.expect(pm.response.code).to.be.oneOf([200, 201]);","});",""]}}],"id":"245cf3bb-f734-44d8-ba70-a12b7239d409","request":{"method":"POST","header":[],"body":{"mode":"raw","raw":"{\n\t\"name\": \"Add your name in the body\"\n}","options":{"raw":{"language":"json"}}},"url":{"raw":"{{base_url}}/info","host":["{{base_url}}"],"path":["info"]},"description":"This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.\n\nA successful POST request typically returns a `200 OK` or `201 Created` response code."},"response":[]},{"name":"Update data","event":[{"listen":"test","script":{"type":"text/javascript","exec":["pm.test(\"Successful PUT request\", function () {","    pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);","});",""]}}],"id":"e140cc5f-1568-40c6-8d69-ffff38a21fbd","request":{"method":"PUT","header":[],"body":{"mode":"raw","raw":"{\n\t\"name\": \"Add your name in the body\"\n}","options":{"raw":{"language":"json"}}},"url":{"raw":"{{base_url}}/info?id=1","host":["{{base_url}}"],"path":["info"],"query":[{"key":"id","value":"1"}]},"description":"This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful PUT request typically returns a `200 OK`, `201 Created`, or `204 No Content` response code."},"response":[]},{"name":"Delete data","event":[{"listen":"test","script":{"type":"text/javascript","exec":["pm.test(\"Successful DELETE request\", function () {","    pm.expect(pm.response.code).to.be.oneOf([200, 202, 204]);","});",""]}}],"id":"1d5c99c7-3855-4c34-bb80-f46eb78ca1c4","request":{"method":"DELETE","header":[],"body":{"mode":"raw","raw":"","options":{"raw":{"language":"json"}}},"url":{"raw":"{{base_url}}/info?id=1","host":["{{base_url}}"],"path":["info"],"query":[{"key":"id","value":"1"}]},"description":"This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful DELETE request typically returns a `200 OK`, `202 Accepted`, or `204 No Content` response code."},"response":[]}],"event":[{"listen":"prerequest","script":{"type":"text/javascript","exec":[""]}},{"listen":"test","script":{"type":"text/javascript","exec":[""]}}],"variable":[{"id":"dc9cfa83-87a3-4efe-9ba6-af8ca2d11e9b","key":"id","value":"1"},{"id":"749be6c7-2d0c-42b6-8f50-75efc9441cbb","key":"base_url","value":"https://postman-rest-api-learner.glitch.me/"}]}

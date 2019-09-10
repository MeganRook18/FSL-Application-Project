# FSL-Application-Project
Angular Application for company X

Still TODO: 
Finish the sign up / sign in page. It doesn't quite post to the DB, think I shot my self in the foot when creating files such as [FakeBackendInterceptor]. And the main header is not mobile frendily. But apart from that I believe the application is working how it should it terms on requirments. 

Currently:
Only authorizsed user can login and see the data that is theirs. I use the [CxResolver] to populate the user's data in to the tables via route. 

How I would in improve: 
Swap out local storage for rxjs cache.

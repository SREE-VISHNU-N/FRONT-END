/* Task 5: User Role Authorization
Instructions:

If the user is authenticated:

If their role is "admin" → print "Full access granted"

If their role is "editor" → print "Edit access granted"

Else → print "Read-only access"

If not authenticated → print "Please log in" */

let authenticated=true;role="admin";

if(authenticated===true){
    if(role==="admin"){
        console.log("Full access granted");
    }
    else if(role==="editor"){
        console.log("Edit access granted");
    }
    else{
        console.log("Read-only access");
    }
}
else{
    console.log("Please log in")
}
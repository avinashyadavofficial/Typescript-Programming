// Use an enum to handle user roles (Admin, Editor, Viewer) in access control logic.

// What to Do:
// Create an enum called UserRole with values like:
// Admin
// Editor
// Viewer
// Write a function checkAccess(role: UserRole): string that:
// Returns "Full access" for Admin
// Returns "Edit access" for Editor
// Returns "Read-only access" for Viewer
// Optionally: Handle unexpected values with "No access" or a default case
// Test the function with all three roles.

enum UserRole{
    Admin,
    Editor,
    Viewer
}
function checkAccess(role:UserRole):string{
    switch(role){
        case(UserRole.Admin):
           return `Full access`;
        case(UserRole.Editor):
           return `Edit access`; 
        case(UserRole.Viewer):
           return `Read only access`;
        default:
            return `No access`;
    }
}
console.log(checkAccess(UserRole.Admin));//Full Access
console.log(checkAccess(1));//Edit Access
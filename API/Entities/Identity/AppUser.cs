using Microsoft.AspNetCore.Identity;

namespace API.Entities.Identity
{
    public class AppUser : IdentityUser<int>
    {
        public string DisplayName { get; set; }
        public int MyProperty { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNr { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}
using Microsoft.AspNetCore.Identity;

namespace API.Entities.Identity
{
    public class AppUser : IdentityUser<int>
    {
        public string DisplayName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNr { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public ICollection<AppUserRole> UserRoles { get; set; }
        public string VerificationToken { get; set; }
        public DateTime VerifiedAt { get; set; }
        public string PasswordResetToken { get; set; }
        public DateTime PasswordResetTokenExpireAt { get; set; }
    }
}
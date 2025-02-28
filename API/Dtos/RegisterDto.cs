using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=^.{6,50}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$",
                        ErrorMessage = "Password must have 1 uppercase, 1 lowercase, 1 number and be atleast 6 characters long!")]
        public string Password { get; set; }
    }
}
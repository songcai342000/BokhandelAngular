using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string FamilyName { get; set; }
        public string Address { get; set; }
        public string PostNumber { get; set; }
        public string Country { get; set; }
        public string Mobil { get; set; }
    }
}

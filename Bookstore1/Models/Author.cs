using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
    public class Author
    {
        [Key]
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        public string Gender { get; set; }
        public string BirthYear { get; set; }
        public string Description { get; set; }
        public virtual IList<Registration> Registrations { get; set; }

    }
}

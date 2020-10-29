using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
    public class Registration
    {
        public int BookId { get; set; }
        public int AuthorId { get; set; }
        public virtual Book Book { get; set; }
        public virtual Author Author { get; set; }

    }
}

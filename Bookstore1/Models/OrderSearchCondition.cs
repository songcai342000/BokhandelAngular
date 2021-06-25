using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
    public class OrderSearchCondition
    {
        public int OrderId { get; set; }
        public string Email { get; set; }
    }
}

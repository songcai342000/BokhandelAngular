using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public string Status { get; set; }
        public virtual List<Reservation> Reservations { get; set; }
        public virtual User User { get; set; }
    }
}

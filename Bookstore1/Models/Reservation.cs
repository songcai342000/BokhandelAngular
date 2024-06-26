﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
    public class Reservation
    {
        [Key]
        public int ReservationId { get; set; }
        public int OrderId { get; set; }
        public int BookId { get; set; }
        public DateTime  ReservationTime { get; set; }
        public virtual Order Order { get; set; }
        public virtual Book Book { get; set; }
    }
}

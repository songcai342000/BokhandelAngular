using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
    public class Event
    {
        [Key]
        public int EventId { get; set; }
        public string EventName { get; set; }
        public DateTime Starttime { get; set; }
        public DateTime Endtime { get; set; }
        public string Introduction { get; set; }


    }
}

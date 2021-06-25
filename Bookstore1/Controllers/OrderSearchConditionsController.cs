using Bookstore1.Data;
using Bookstore1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderSearchConditionsController : ControllerBase
    {
        private readonly BookContext _context;

        public OrderSearchConditionsController(BookContext context)
        {
            _context = context;
        }

        [HttpGet("GetOrderStatus")]
        public string GetOrderStatus(OrderSearchCondition orderSearchCondition)
        {
            //var status = from s in _context.Orders where s.OrderId == id select s.Status;
            //IEnumerable<string> status = _context.Orders.Where(o => o.OrderId == id).Select(s => s.Status);
            var query = from o in _context.Orders join u in _context.Users on o.UserId equals u.UserId where u.Mail == orderSearchCondition.Email && o.OrderId == orderSearchCondition.OrderId select new { OrderStatus = o.Status };
            return query.ToString();
        }

    }
}

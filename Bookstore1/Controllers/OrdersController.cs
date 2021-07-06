using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bookstore1.Data;
using Bookstore1.Models;

namespace Bookstore1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly BookContext _context;

        public OrdersController(BookContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            return await _context.Orders.ToListAsync();
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        // GET: api/Orders/GetOrderId
        [HttpGet("GetOrderId")]
        public string GetOrderId()
        {
            string orderId = _context.Orders.Max(o => o.OrderId).ToString();

            return orderId;
        }

        [HttpGet("GetTotalValue/{orderId}")]
        public double GetTotalValue(int orderId)
        {
            double Total = (from r in _context.Reservations join b in _context.Books on r.BookId equals b.BookId join o in _context.Orders on r.OrderId equals o.OrderId where o.OrderId == orderId select b.Price).Sum();
            return Total;
        }

        [HttpGet("GetOrderStatus/{orderId}/{email}")]
        public IEnumerable<string> GetOrderStatus(int orderId, string email)
        {
            //IEnumerable<string> status = _context.Orders.Where(o => o.OrderId == id).Select(s => s.Status);
            var query = from o in _context.Orders join u in _context.Users on o.UserId equals u.UserId where u.Mail == email && o.OrderId == orderId select o.Status;
            IEnumerable<string> Status = query.AsEnumerable();
            return Status;
        }

        // PUT: api/Orders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(int id, Order order)
        {
            order.OrderId = id;
            /*if (id != order.OrderId)
            {
                return BadRequest();
            }*/

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Orders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrder", new { id = order.OrderId }, order);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> DeleteOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return order;
        }

        private bool OrderExists(int id)
        {
            return _context.Orders.Any(e => e.OrderId == id);
        }
    }
}

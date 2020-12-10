using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bookstore1.Data;
using Bookstore1.Models;
using MailKit;
using Newtonsoft.Json;
using System.Text;

namespace Bookstore1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BookContext _context;
        private EmailService _emailService;

        public UsersController(BookContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpGet("GetLastUser")]
        public string GetLastUser()
        {
            //var users = from u in _context.Users where u.UserId == _context.Users.Max(o=>o.UserId) select u;
            //var i = users.Count();
            //return await users.ToListAsync();
            string newUserId = _context.Users.Max(o => o.UserId).ToString();
            return newUserId;
        }


        // PUT: api/Users/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            user.UserId = id;
            /* if (id != user.UserId)
             {
                 return BadRequest();
             }*/

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }

        [HttpGet("SendInvoice/{orderId}")]
        public async Task<ActionResult<Book[]>> SendInvoice(int orderId)
        {
            var books = from b in _context.Books
                        join re in _context.Reservations on b.BookId equals re.BookId
                        join o in _context.Orders on re.OrderId equals o.OrderId
                        where o.OrderId == orderId
                        select new
                        {
                            Title = b.Title,
                            Price = b.Price,
                        };

            var users = from o in _context.Orders
                        join u in _context.Users on o.UserId equals u.UserId
                        where o.OrderId == orderId
                        select new
                        {
                            FirstName = u.FirstName,
                            FamilyName = u.FamilyName,
                            Mail = u.Mail
                        };
            /*StringBuilder sb = new StringBuilder();
            sb.AppendLine("Invoice");
            sb.AppendLine("Your Order Number: " + orderId.ToString());*/
            String sb = "<div style='padding: 5%; font-size: 14px; width: 100%'><div style='width: 100%; text-align: center; font-weight: bold; font-size: 16px'>Invoice </div><br><div style='width: 100%; text-align: left'>Your Order Number: " + orderId.ToString() + "</div><hr style='margin-right: 10%'>";
            double sum = 0;
            foreach (var bk in books)
            {
                sb += "<div style='width: 100%;  display: flex'><div style='width: 80%; overflow-wrap: break-word'>" + bk.Title + "</div><div style='width: 20%;'>" + bk.Price.ToString() + " kr </div></div>";
                sum += bk.Price;
            }
             sb += "<div style='width: 100%; font-weight: bold'>Sum: " + sum.ToString() + " kr </div></div>";
            _emailService = new EmailService();
            await _emailService.SendEmailAsync("Forest Bookstore", "songcai342000@gmail.com", users.First().FirstName + " " + users.First().FamilyName, users.First().Mail, "Invoice", sb.ToString());
            return NoContent();
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}

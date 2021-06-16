using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bookstore1.Data;
using Bookstore1.Models;
using Microsoft.EntityFrameworkCore.Storage;

namespace Bookstore1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookContext _context;

        public BooksController(BookContext context)
        {
            _context = context;
        }

        // GET: api/Books/RomanceBooks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> Index()
        {
            return await _context.Books.ToListAsync();
        }

        // GET: api/Books/RomanceBooks
        [HttpGet("RomanceBooks")]
        public async Task<ActionResult<IEnumerable<Object>>> RomanceBooks()
        {
            var romances = from rg in _context.Registrations
                        join b in _context.Books on rg.BookId equals b.BookId
                        join a in _context.Authors on rg.AuthorId equals a.AuthorId
                        where b.Genre == "Romance"
                        select new
                        {
                            BookId = b.BookId,
                            Title = b.Title,
                            Author = a.AuthorName,
                            Introduction = b.Introduction,
                            Genre = b.Genre,
                            Price = b.Price,
                            ImageUrl = b.ImageUrl,
                        };
            return await romances.ToListAsync();
        }

        // GET: api/Books/RomanceBooks
        [HttpGet("FictionBooks")]
        public async Task<ActionResult<IEnumerable<Object>>> FictionBooks()
        {
            var fictions = from rg in _context.Registrations
                           join b in _context.Books on rg.BookId equals b.BookId
                           join a in _context.Authors on rg.AuthorId equals a.AuthorId
                           where b.Genre == "Fiction"
                           select new
                           {
                               BookId = b.BookId,
                               Title = b.Title,
                               Author = a.AuthorName,
                               Introduction = b.Introduction,
                               Genre = b.Genre,
                               Price = b.Price,
                               ImageUrl = b.ImageUrl,
                           };
            return await fictions.ToListAsync();
        }

        // GET: api/Books/RomanceBooks
        [HttpGet("CrimeBooks")]
        public async Task<ActionResult<IEnumerable<Object>>> CrimeBooks()
        {
            var crimes = from rg in _context.Registrations
                           join b in _context.Books on rg.BookId equals b.BookId
                           join a in _context.Authors on rg.AuthorId equals a.AuthorId
                           where b.Genre == "Crime"
                         select new
                         {
                             BookId = b.BookId,
                             Title = b.Title,
                             Author = a.AuthorName,
                             Introduction = b.Introduction,
                             Genre = b.Genre,
                             Price = b.Price,
                             ImageUrl = b.ImageUrl,
                         };
            return await crimes.ToListAsync();
        }

        // GET: api/Books/BestSellingBooks
        [HttpGet("BestSellingBooks")]
        public async Task<ActionResult<IEnumerable<Object>>> BestSellingBooks()
        {
            var bestSelling = from r in _context.Reservations
                              group r by r.BookId into bn
                              orderby bn.Count()
                              select new
                              {
                                  BookId = (from b in _context.Books where b.BookId == bn.Key select b).FirstOrDefault().BookId,
                                  Title = (from b in _context.Books where b.BookId == bn.Key select b).FirstOrDefault().Title,
                                  ImageUrl = (from b in _context.Books where b.BookId == bn.Key select b).FirstOrDefault().ImageUrl
                              };


            return await bestSelling.Take(12).ToListAsync();
        }

        // GET: api/Books/SearchByTitle/title
        [HttpGet("SearchByTitle/{title}")]
        public async Task<ActionResult<IEnumerable<Object>>> SearchByTitle(string title)
        {
            var books = from rg in _context.Registrations
                        join b in _context.Books on rg.BookId equals b.BookId
                        join a in _context.Authors on rg.AuthorId equals a.AuthorId
                        where b.Title == title
                        select new
                        {
                           BookId = b.BookId,
                           Title = b.Title,
                           Author = a.AuthorName,
                           Introduction = b.Introduction,
                           Genre = b.Genre,
                           Price = b.Price,
                           ImageUrl = b.ImageUrl,
                        };
            return await books.ToListAsync();
        }

        // GET: api/Books/SearchByTitle/author
        [HttpGet("SearchByAuthor/{author}")]
        public async Task<ActionResult<IEnumerable<Object>>> SearchByAuthor(string author)
        {
            var books = from rg in _context.Registrations
                        join b in _context.Books on rg.BookId equals b.BookId
                        join a in _context.Authors on rg.AuthorId equals a.AuthorId
                        where a.AuthorName == author
                        select new
                        {
                            BookId = b.BookId,
                            Title = b.Title,
                            Author = a.AuthorName,
                            Introduction = b.Introduction,
                            Genre = b.Genre,
                            Price = b.Price,
                            ImageUrl = b.ImageUrl,
                        };
            return await books.ToListAsync();
        }

        // GET: api/Books/SearchByTitle/author
        [HttpGet("GetAuthorBooks/{id}")]
        public async Task<ActionResult<IEnumerable<Object>>> GetAuthorBooks(int id)
        {
            var registration = from aid in _context.Registrations where aid.BookId == id select new
                                {
                                    AuthorId = aid.AuthorId
                                };
            int authorId = registration.FirstOrDefault().AuthorId;
            var books = from r in _context.Registrations
                        join a in _context.Authors on r.AuthorId equals a.AuthorId
                        join b in _context.Books on r.BookId equals b.BookId
                        where r.AuthorId == authorId
                        select new
                        {
                            BookId = b.BookId,
                            Title = b.Title,
                            Genre = b.Genre,
                            Price = b.Price,
                        };
            return await books.ToListAsync();
        }

        // GET: api/Books/5.
        [HttpGet("{id}")] 
        public async Task<ActionResult<IEnumerable<Object>>> GetBook(int id)
        {
            var books = from rg in _context.Registrations
                        join b in _context.Books on rg.BookId equals b.BookId
                        join a in _context.Authors on rg.AuthorId equals a.AuthorId
                        where b.BookId == id
                        select new
                        {
                            BookId = b.BookId,
                            Title = b.Title,
                            Author = a.AuthorName,
                            Introduction = b.Introduction,
                            Genre = b.Genre,
                            Price = b.Price,
                            ImageUrl = b.ImageUrl,
                        };
            if (books == null)
            {
                return NotFound();
            }
            return await books.ToListAsync();
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(int id, Book book)
        {
            if (id != book.BookId)
            {
                return BadRequest();
            }

            _context.Entry(book).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
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

        // POST: api/Books
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            _context.Books.Add(book);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetBook", new { id = book.BookId }, book);
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Book>> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return book;
        }

        private bool BookExists(int id)
        {
            return _context.Books.Any(e => e.BookId == id);
        }
    }
}

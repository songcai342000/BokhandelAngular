using Bookstore1.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Data
{
    public class BookContext: DbContext
    {
        public BookContext(DbContextOptions<BookContext> options) : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Registration> Registrations { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Event> Events { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Registration>().HasKey(r => new { r.BookId, r.AuthorId });
            modelBuilder.Entity<Reservation>().HasOne<Order>(o => o.Order).WithMany(rs => rs.Reservations).HasForeignKey(o => o.OrderId);
            modelBuilder.Entity<Book>().ToTable("Books");
            modelBuilder.Entity<Author>().ToTable("Authors");
            modelBuilder.Entity<Order>().ToTable("Orders");
            modelBuilder.Entity<Reservation>().ToTable("Reservations");
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Registration>().ToTable("Registrations");
            modelBuilder.Entity<Contact>().ToTable("Contacts");
            modelBuilder.Entity<Event>().ToTable("Events");
        }


    }
}

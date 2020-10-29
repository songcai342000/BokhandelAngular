using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bookstore1.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Bookstore1.Data
{
    public class Seed
    {
        public static void Initialize(BookContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Books.Any())
                {
                    return;   // DB has been seeded
                }

                context.Books.AddRange(

                    new Book
                    {
                        Title = "Betty is a lucky girl",
                        Introduction = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                        Genre = "Fiction",
                        Price = 149,
                        ImageUrl = "assets/images/askim.jpg"
                    },
                    new Book
                    {
                        Title = "Raghuvamsa Sudha",
                        Introduction = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                        Genre = "Crime",
                        Price = 179,
                        ImageUrl = "assets/images/askim.jpg"
                    },
                    new Book
                    {
                        Title = "The village over Godness Mountain",
                        Introduction = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                        Genre = "Crime",
                        Price = 219,
                        ImageUrl = "assets/images/askim.jpg"
                    },
                    new Book
                    {
                        Title = "Tomorrow is comming",
                        Introduction = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                        Genre = "Crime",
                        Price = 219,
                        ImageUrl = "assets/images/askim.jpg"
                    },
                    new Book
                    {
                        Title = "Event Loop - Philip Roberts",
                        Introduction = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                        Genre = "Crime",
                        Price = 219,
                        ImageUrl = "assets/images/askim.jpg"
                    },
                    new Book
                    {
                        Title = "When Moon has risen",
                        Introduction = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                        Genre = "Crime",
                        Price = 219,
                        ImageUrl = "assets/images/askim.jpg"
                    },
                    new Book
                    {
                        Title = "Kapil finds a match for Sarla",
                        Introduction = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                        Genre = "Romans",
                        Price = 199,
                        ImageUrl = "assets/images/askim.jpg"
                    },
                     new Book
                     {
                         Title = "Trip in April",
                         Introduction = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                         Genre = "Romans",
                         Price = 199,
                         ImageUrl = "assets/images/askim.jpg"
                     }, 
                     new Book
                     {
                         Title = "Green Rose",
                         Introduction = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                         Genre = "Romans",
                         Price = 199,
                         ImageUrl = "assets/images/askim.jpg"
                     }
                );
            context.Authors.AddRange(

                new Author
                {
                    AuthorName = "Linda Moe",
                    Gender = "Female",
                    BirthYear = "1970",
                    Description = "",

                },
                new Author
                {
                    AuthorName = "Lars Sen",
                    Gender = "Female",
                    BirthYear = "1970",
                    Description = ""
                },
                new Author
                {
                    AuthorName = "Robert Haugilen",
                    Gender = "Female",
                    BirthYear = "1970",
                    Description = ""
                }
            ); 
                context.SaveChanges();
            context.Reservations.AddRange(

             new Reservation
             {
                 OrderId = 1,
                 BookId = 1
             }
         );
            context.Orders.AddRange(

          new Order
            {
                UserId = 1,
                Status = "Paid",
                Reservations = new List<Reservation>()
            }
          );
            context.Users.AddRange(

            new User
            {
                FirstName = "Paul",
                FamilyName = "Max",
                Address = "Furuveien 7",
                PostNumber = "1102",
                Country = "Norway",
                Mobil = "92929292"
            }
        );
            context.Registrations.AddRange(

            new Registration
            {
                BookId = 1,
                AuthorId = 1
            }
        );
            context.Contacts.AddRange(

            new Contact
            {
                FirstName = "Lin",
                LastName = "Xin",
                Mail = "linxin@yahoo.com",
                Country = "Norway",
                Content = "NNN"
            }
        );
            context.SaveChanges();
        }

    }
}

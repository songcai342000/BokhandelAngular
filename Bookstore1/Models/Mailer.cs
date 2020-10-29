using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.VisualBasic.FileIO;
using MimeKit;
using Org.BouncyCastle.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
    public interface IMailer
    {
        Task SendEmailAsync(string email, string subject, string body);
    }

    public class Mailer : IMailer
    {
        private readonly SmptSettings _smptSettings;
        private readonly IWebHostEnvironment _env;

        public Mailer(IOptions<SmptSettings> smptSettings, IWebHostEnvironment env) 
        {
            _smptSettings = smptSettings.Value;
            _env = env;
        }
        public async Task SendEmailAsync(string email, string subject, string body)
        {
            try
            {
                var message = new MimeMessage();
               // message.From.Add(new MailboxAddress(_smptSettings.SenderName, _smptSettings.SenderEmail));
               // message.To.Add(email);
            }
            catch { }
        }
    }
}

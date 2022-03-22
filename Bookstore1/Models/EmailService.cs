using MimeKit;
using Org.BouncyCastle.Crypto.Tls;
using System;
using System.Collections.Generic;
using System.Linq;
using MailKit.Net.Smtp;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;

namespace Bookstore1.Models
{
	public class EmailService : IEmailService
	{
		private readonly SmptSettings _smptSettings;
		private readonly IWebHostEnvironment _env;

		/*public EmailService(IOptions<SmptSettings> smptSettings, IWebHostEnvironment env)
        {
			_smptSettings = smptSettings.Value;
			_env = env;
        }*/

		
		public async Task SendEmailAsync
		(
			string fromDisplayName,
			string fromEmailAddress,
			string toMail,
			string toEmailAddress,
			string subject,
			string message
		)
		{
			var email = new MimeMessage();
			email.From.Add(new MailboxAddress(fromDisplayName, fromEmailAddress));
			email.To.Add(new MailboxAddress(toMail, toEmailAddress));
			email.Subject = subject;

			//email.Body = new TextPart("plain")
			email.Body = new TextPart("html")
			{
				Text = message
			};

			using (var client = new SmtpClient())
			{
				client.ServerCertificateValidationCallback = (sender, certificate, certChainType, errors) => true;
				client.AuthenticationMechanisms.Remove("XOAUTH2");

				await client.ConnectAsync("smtp.gmail.com", 587);
				await client.AuthenticateAsync("**********", "*******");
				await client.SendAsync(email);
				await client.DisconnectAsync(true);
				
			}

		}
	}
}

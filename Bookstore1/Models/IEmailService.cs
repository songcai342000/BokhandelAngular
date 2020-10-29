using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
	public interface IEmailService
	{
		Task SendEmailAsync
		(
			string fromDisplayName,
			string fromEmailAddress,
			string toMail,
			string toEmailAddress,
			string subject,
			string message
		);
	}
}

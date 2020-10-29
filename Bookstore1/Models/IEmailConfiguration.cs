﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore1.Models
{
	public interface IEmailConfiguration
	{
		string SmtpServer { get; }
		int SmtpPort { get; }
		string SmtpUsername { get; set; }
		string SmtpPassword { get; set; }

		/*string PopServer { get; }
		int PopPort { get; }
		string PopUsername { get; }
		string PopPassword { get; }*/
	}
}

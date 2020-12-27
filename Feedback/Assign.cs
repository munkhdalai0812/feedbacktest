using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Feedback
{
    public class Assign
    {
        public Guid Id { get; set; }
        public Guid from_employee { get; set; }
        public Guid to_employee { get; set; }

    }
}

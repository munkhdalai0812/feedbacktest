using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Feedback
{
    public class Review
    {
        public Guid Id { get; set; }
        public int Star { get; set; }
        public Guid from_employee { get; set; }
        public Guid to_employee { get; set; }
        public string username { get; set; }
        public double averageRating { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Feedback;

namespace Feedback.Data
{
    public class FeedbackContext : DbContext
    {
        public FeedbackContext (DbContextOptions<FeedbackContext> options)
            : base(options)
        {
        }

        public DbSet<Feedback.Employee> Employee { get; set; }

        public DbSet<Feedback.Review> Review { get; set; }

        public DbSet<Feedback.Assign> Assign { get; set; }
    }
}

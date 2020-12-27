using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Feedback;
using Feedback.Data;

namespace Feedback.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly FeedbackContext _context;

        public ReviewsController(FeedbackContext context)
        {
            _context = context;
        }

        // GET: api/Reviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Review>>> GetReview()
        {
            return await _context.Review
                .GroupBy(b => new { b.to_employee })
                .Select(c => new Review
                {
                    to_employee = c.Key.to_employee,
                    averageRating = c.Average(x => x.Star),
                    username = _context.Employee.Where(k => k.Id == c.Key.to_employee).FirstOrDefault().Name
                })
                .ToListAsync();
        }

        // GET: api/Reviews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Review>>> GetReview(Guid id)
        {
            return await _context.Review
                .Where(k => k.to_employee == id)
                .Select(c => new Review
                {
                    from_employee = c.from_employee,
                    averageRating = c.Star,
                    username = _context.Employee.Where(k => k.Id == c.from_employee).FirstOrDefault().Name
                })
                .ToListAsync();
        }
    }
}
